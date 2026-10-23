import { useEffect, useRef } from "react";
import * as THREE from "three";

// Transparent glass tank with real water volume, animated surface, inlet pipe + stream, bubbles and a litre scale.
// Props: fill (0..1 target level), flowing (inlet open), capacity (litres shown on the scale)

const R = 1, H = 2.5, FLOOR = 0.14, HW = 2.1; // radius, height, water floor, max water height
const NOZZLE = { x: 0.5, y: H + 0.3 };

const gradTex = (stops, w = 8, h = 256) => {
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  const g = c.getContext("2d"), gr = g.createLinearGradient(0, 0, 0, h);
  stops.forEach(([o, col]) => gr.addColorStop(o, col));
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  return new THREE.CanvasTexture(c);
};
const labelSprite = (text) => {
  const c = document.createElement("canvas");
  c.width = 128; c.height = 48;
  const g = c.getContext("2d");
  g.font = "700 30px system-ui, sans-serif"; g.textAlign = "left"; g.textBaseline = "middle";
  g.fillStyle = "#e9f8ff"; g.fillText(text, 6, 26);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthTest: false }));
  s.scale.set(0.62, 0.23, 1); s.renderOrder = 10;
  return s;
};

export default function WaterTank3D({ fill, flowing, capacity }) {
  const host = useRef(null);
  const live = useRef({ fill, flowing });
  live.current = { fill, flowing };

  useEffect(() => {
    const el = host.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
    camera.position.set(0, 2.3, 8.8);
    camera.lookAt(0.55, 1.75, 0);

    // Reflection environment (so the glass and water have something to reflect)
    const envScene = new THREE.Scene();
    envScene.add(new THREE.Mesh(
      new THREE.SphereGeometry(20, 32, 16),
      new THREE.MeshBasicMaterial({ map: gradTex([[0, "#e8f6ff"], [0.45, "#3b78b0"], [1, "#04101f"]]), side: THREE.BackSide })
    ));
    [[-6, 4, 4, 5, 3], [6, 3, -2, 3, 6]].forEach(([x, y, z, w, h]) => {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }));
      p.position.set(x, y, z); p.lookAt(0, 1.5, 0); envScene.add(p);
    });
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(envScene, 0.03).texture;

    scene.add(new THREE.HemisphereLight(0xbfe6ff, 0x04101c, 0.7));
    const sun = new THREE.DirectionalLight(0xffffff, 1.3);
    sun.position.set(4, 6, 5); scene.add(sun);
    const rim = new THREE.PointLight(0x4fd8ff, 1.2, 14);
    rim.position.set(-3, 2, -3); scene.add(rim);

    const tank = new THREE.Group();
    scene.add(tank);

    // Floor shadow
    const sc = document.createElement("canvas"); sc.width = sc.height = 128;
    const sg = sc.getContext("2d"), rg = sg.createRadialGradient(64, 64, 6, 64, 64, 64);
    rg.addColorStop(0, "rgba(0,0,0,.65)"); rg.addColorStop(1, "rgba(0,0,0,0)");
    sg.fillStyle = rg; sg.fillRect(0, 0, 128, 128);
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(2.1, 48), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.002; scene.add(shadow);

    // Glass shell + moulded ribs, base, rim
    const glass = new THREE.MeshPhysicalMaterial({
      color: 0xcfefff, metalness: 0, roughness: 0.04, transparent: true, opacity: 0.17,
      envMapIntensity: 1.8, clearcoat: 1, clearcoatRoughness: 0, side: THREE.DoubleSide, depthWrite: false,
    });
    const shell = new THREE.Mesh(new THREE.CylinderGeometry(R, R, H, 72, 1, true), glass);
    shell.position.y = H / 2; shell.renderOrder = 3; tank.add(shell);
    const ribMat = new THREE.MeshStandardMaterial({ color: 0xe4f7ff, roughness: 0.18, metalness: 0.1, transparent: true, opacity: 0.32, envMapIntensity: 1.1, depthWrite: false });
    for (let i = 1; i <= 7; i++) {
      const rib = new THREE.Mesh(new THREE.TorusGeometry(R + 0.012, 0.016, 10, 72), ribMat);
      rib.rotation.x = Math.PI / 2; rib.position.y = (i * H) / 8; rib.renderOrder = 4; tank.add(rib);
    }
    const steel = new THREE.MeshStandardMaterial({ color: 0x1b3a5c, roughness: 0.45, metalness: 0.55, envMapIntensity: 1.2 });
    const base = new THREE.Mesh(new THREE.CylinderGeometry(R + 0.07, R + 0.12, FLOOR, 72), steel);
    base.position.y = FLOOR / 2; tank.add(base);
    const topRim = new THREE.Mesh(new THREE.TorusGeometry(R, 0.05, 12, 72), steel);
    topRim.rotation.x = Math.PI / 2; topRim.position.y = H; tank.add(topRim);

    // Inlet plumbing (pipe, elbow, valve, nozzle)
    const chrome = new THREE.MeshStandardMaterial({ color: 0xcfd9e3, roughness: 0.22, metalness: 0.95, envMapIntensity: 1.6 });
    const pipeTop = H + 1.0;
    const hPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 1.7, 20), chrome);
    hPipe.rotation.z = Math.PI / 2; hPipe.position.set(NOZZLE.x + 0.85, pipeTop, 0); tank.add(hPipe);
    const vPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, pipeTop - NOZZLE.y, 20), chrome);
    vPipe.position.set(NOZZLE.x, (pipeTop + NOZZLE.y) / 2, 0); tank.add(vPipe);
    const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.1, 20, 14), chrome);
    elbow.position.set(NOZZLE.x, pipeTop, 0); tank.add(elbow);
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.07, 0.12, 20), chrome);
    nozzle.position.set(NOZZLE.x, NOZZLE.y - 0.04, 0); tank.add(nozzle);
    const valveMat = new THREE.MeshStandardMaterial({ color: 0xe5484d, roughness: 0.4, metalness: 0.3 });
    const valve = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.035, 10, 28), valveMat);
    valve.position.set(NOZZLE.x + 1.2, pipeTop + 0.2, 0); tank.add(valve);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.2, 10), chrome);
    stem.position.set(NOZZLE.x + 1.2, pipeTop + 0.1, 0); tank.add(stem);

    // Water body + animated surface
    const bodyGeo = new THREE.CylinderGeometry(R - 0.04, R - 0.04, 1, 72, 1, false);
    bodyGeo.translate(0, 0.5, 0);
    const body = new THREE.Mesh(bodyGeo, new THREE.MeshPhysicalMaterial({
      color: 0x0a86f0, transparent: true, opacity: 0.72, roughness: 0.12, metalness: 0, envMapIntensity: 0.35, depthWrite: false,
    }));
    body.position.y = FLOOR; body.renderOrder = 1; tank.add(body);
    const surfGeo = new THREE.RingGeometry(0, R - 0.04, 72, 16);
    surfGeo.rotateX(-Math.PI / 2);
    const surf = new THREE.Mesh(surfGeo, new THREE.MeshPhysicalMaterial({
      color: 0x4cc0ff, transparent: true, opacity: 0.85, roughness: 0.06, metalness: 0.1, envMapIntensity: 0.9, side: THREE.DoubleSide, depthWrite: false,
    }));
    surf.renderOrder = 2; tank.add(surf);
    const surfBase = Float32Array.from(surfGeo.attributes.position.array);

    // Falling stream + splashes
    const stripe = gradTex([[0, "rgba(255,255,255,0)"], [0.5, "rgba(255,255,255,.95)"], [1, "rgba(255,255,255,0)"]], 4, 64);
    stripe.wrapT = THREE.RepeatWrapping; stripe.repeat.set(1, 6);
    const stream = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.06, 1, 16, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xa8e6ff, map: stripe, transparent: true, opacity: 0.8, depthWrite: false })
    );
    stream.renderOrder = 5; tank.add(stream);
    const SPL = 36;
    const splPos = new Float32Array(SPL * 3), splVel = new Float32Array(SPL * 3), splLife = new Float32Array(SPL);
    const splGeo = new THREE.BufferGeometry();
    splGeo.setAttribute("position", new THREE.BufferAttribute(splPos, 3));
    const splash = new THREE.Points(splGeo, new THREE.PointsMaterial({ color: 0xeaf9ff, size: 0.06, transparent: true, opacity: 0.85, depthWrite: false }));
    splash.renderOrder = 6; splash.frustumCulled = false; tank.add(splash);

    // Bubbles
    const BUB = 60;
    const bubPos = new Float32Array(BUB * 3), bubSpd = new Float32Array(BUB);
    const respawn = (i) => {
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * (R - 0.15);
      bubPos[i * 3] = Math.cos(a) * r; bubPos[i * 3 + 1] = FLOOR + 0.05; bubPos[i * 3 + 2] = Math.sin(a) * r;
      bubSpd[i] = 0.25 + Math.random() * 0.5;
    };
    for (let i = 0; i < BUB; i++) { respawn(i); bubPos[i * 3 + 1] = FLOOR + Math.random() * HW; }
    const bubGeo = new THREE.BufferGeometry();
    bubGeo.setAttribute("position", new THREE.BufferAttribute(bubPos, 3));
    const bubbles = new THREE.Points(bubGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.045, transparent: true, opacity: 0.6, depthWrite: false }));
    bubbles.renderOrder = 6; bubbles.frustumCulled = false; tank.add(bubbles);

    // Litre ruler beside the tank (does not rotate with it)
    const tickMat = new THREE.MeshBasicMaterial({ color: 0xe9f8ff });
    const rule = new THREE.Mesh(new THREE.BoxGeometry(0.015, HW, 0.015), tickMat);
    rule.position.set(R + 0.3, FLOOR + HW / 2, 0); scene.add(rule);
    for (let i = 0; i <= 4; i++) {
      const y = FLOOR + (HW * i) / 4;
      const tick = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.02, 0.02), tickMat);
      tick.position.set(R + 0.3, y, 0); scene.add(tick);
      const l = labelSprite(`${Math.round(capacity * (i / 4) * 10) / 10} L`);
      l.position.set(R + 0.3 + 0.52, y, 0); scene.add(l);
    }

    // Size / drag-to-rotate
    const resize = () => {
      const w = el.clientWidth || 300, h = el.clientHeight || 400;
      renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(el);
    let drag = null, yaw = -0.35;
    const cv = renderer.domElement;
    cv.style.touchAction = "pan-y"; cv.style.cursor = "grab";
    const down = (e) => { drag = { x: e.clientX, yaw }; cv.setPointerCapture(e.pointerId); cv.style.cursor = "grabbing"; };
    const move = (e) => { if (drag) yaw = drag.yaw + (e.clientX - drag.x) * 0.01; };
    const up = () => { drag = null; cv.style.cursor = "grab"; };
    cv.addEventListener("pointerdown", down); cv.addEventListener("pointermove", move);
    cv.addEventListener("pointerup", up); cv.addEventListener("pointercancel", up);

    // Animation
    let raf, last = performance.now(), t = 0, lvl = 0;
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000), dtRaw = Math.min(0.5, (now - last) / 1000); last = now; t += dt;
      const { fill: target, flowing: on } = live.current;
      lvl += (Math.max(0, Math.min(1, target)) - lvl) * (1 - Math.exp(-dtRaw * 5));
      const wh = lvl * HW, top = FLOOR + wh;
      if (!drag) yaw += (Math.sin(t * 0.35) * 0.18 - 0.35 - yaw) * 0.01;
      tank.rotation.y = yaw;

      body.visible = wh > 0.004; body.scale.y = Math.max(wh, 0.001);
      surf.visible = body.visible; surf.position.y = top;
      const amp = on ? 0.04 : 0.012, p = surfGeo.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const x = surfBase[i * 3], z = surfBase[i * 3 + 2];
        const d = Math.hypot(x - NOZZLE.x, z);
        p.array[i * 3 + 1] = amp * (Math.sin(x * 5 + t * 2.2) + 0.7 * Math.cos(z * 6 + t * 1.7)) +
          (on ? 0.05 * Math.sin(d * 16 - t * 7) * Math.exp(-d * 2) : 0);
      }
      p.needsUpdate = true; surfGeo.computeVertexNormals();

      const showStream = on && lvl < 0.995;
      stream.visible = splash.visible = showStream;
      if (showStream) {
        const len = Math.max(0.05, NOZZLE.y - 0.1 - top);
        stream.scale.y = len; stream.position.set(NOZZLE.x, top + len / 2, 0);
        stripe.offset.y -= dt * 2.6; stream.material.opacity = 0.65 + Math.sin(t * 30) * 0.1;
        for (let i = 0; i < SPL; i++) {
          if ((splLife[i] -= dt) <= 0) {
            splLife[i] = 0.35 + Math.random() * 0.4;
            splPos.set([NOZZLE.x, top, 0], i * 3);
            const a = Math.random() * Math.PI * 2, s = 0.3 + Math.random() * 0.6;
            splVel.set([Math.cos(a) * s, 1.1 + Math.random() * 1.2, Math.sin(a) * s], i * 3);
          }
          splVel[i * 3 + 1] -= 7 * dt;
          for (let k = 0; k < 3; k++) splPos[i * 3 + k] += splVel[i * 3 + k] * dt;
        }
        splGeo.attributes.position.needsUpdate = true;
      }

      bubbles.visible = wh > 0.05;
      for (let i = 0; i < BUB; i++) {
        bubPos[i * 3 + 1] += bubSpd[i] * dt * (on ? 1.4 : 0.35);
        bubPos[i * 3] += Math.sin(t * 2 + i) * 0.0015;
        if (bubPos[i * 3 + 1] > top - 0.03) respawn(i);
      }
      bubGeo.attributes.position.needsUpdate = true;

      valve.rotation.z = on ? t * 2 : valve.rotation.z;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf); ro.disconnect();
      cv.removeEventListener("pointerdown", down); cv.removeEventListener("pointermove", move);
      cv.removeEventListener("pointerup", up); cv.removeEventListener("pointercancel", up);
      scene.traverse((o) => {
        o.geometry?.dispose();
        [].concat(o.material || []).forEach((m) => { m.map?.dispose(); m.dispose(); });
      });
      scene.environment?.dispose(); pmrem.dispose(); renderer.dispose();
      if (cv.parentNode === el) el.removeChild(cv);
    };
  }, [capacity]);

  return <div ref={host} className="wt-3d" role="img" aria-label="Transparent water tank showing the current water level" />;
}
