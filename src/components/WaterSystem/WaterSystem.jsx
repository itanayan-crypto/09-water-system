import { useEffect, useState } from "react";
import WaterTank3D from "./WaterTank3D.jsx";
import "./WaterSystem.css";

// All amounts are in paise
const CFG = { rate: 200, deliveryBase: 3000, perJar: 500, jar: 20, gstHalf: 9, min: 5, max: 500, sliderMax: 200 };
// Replace with your real business details before going live
const SELLER = { name: "AquaPure Water Services", gstin: "27XXXXX0000X1ZX", address: "Registered office address, City, State" };
const SLOTS = ["8 AM – 10 AM", "10 AM – 12 PM", "12 PM – 2 PM", "2 PM – 4 PM", "4 PM – 6 PM"];
const PRESETS = [[20, "Ghar"], [40, "Family"], [60, "Party"], [100, "Society"]];
const BANKS = ["SBI", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra Bank", "Bank of Maharashtra"];
const TABS = ["Order", "Payment", "Bill", "Water"];
const FILL_TICKS = 120; // filling takes ~12 s (100 ms per tick)

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });
const inr = (p) => money.format(p / 100);
const clock = () => new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
const methodName = (id, mode) =>
  id === "COD" ? (mode === "DELIVERY" ? "Cash on delivery" : "Pay at counter") : { UPI: "UPI", CARD: "Card", NETBANKING: "Net banking" }[id];

const calc = (liters, mode) => {
  const water = liters * CFG.rate;
  const delivery = mode === "DELIVERY" ? CFG.deliveryBase + Math.ceil(liters / CFG.jar) * CFG.perJar : 0;
  const taxable = water + delivery;
  const cgst = Math.round((taxable * CFG.gstHalf) / 100);
  return { water, delivery, taxable, cgst, sgst: cgst, total: taxable + cgst * 2 };
};

const CUR = { IDLE: 2, DISPENSING: 2, READY: 3, DONE: 5 }; // tracker: current step per stage

// Dotted ring + water-level circle (the gauge in the Order tab)
function Gauge({ liters, ok }) {
  const frac = ok ? Math.min(1, liters / 120) : 0;
  const dots = 72, lit = Math.round(dots * Math.min(1, (ok ? liters : 0) / CFG.sliderMax));
  const wy = 210 - frac * 165;
  return (
    <div className="wt-gauge">
      <svg viewBox="0 0 240 240" aria-hidden="true">
        <defs>
          <linearGradient id="wtg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7a5cff" /><stop offset="1" stopColor="#35e6ff" /></linearGradient>
          <clipPath id="wtc"><circle cx="120" cy="120" r="90" /></clipPath>
        </defs>
        {Array.from({ length: dots }, (_, i) => {
          const a = (i / dots) * Math.PI * 2 - Math.PI / 2;
          return <circle key={i} cx={120 + Math.cos(a) * 112} cy={120 + Math.sin(a) * 112} r="2.3" fill="url(#wtg)" opacity={i < lit ? 1 : 0.35} />;
        })}
        <circle cx="120" cy="120" r="94" fill="#0a2447" stroke="#2b5578" strokeWidth="3" />
        <g clipPath="url(#wtc)">
          <g style={{ transform: `translateY(${wy}px)`, transition: "transform .4s ease" }}>
            <path className="wt-wave" d="M0 12 Q30 0 60 12 T120 12 T180 12 T240 12 T300 12 T360 12 T420 12 T480 12 V220 H0 Z" fill="#3ee6ff" />
          </g>
        </g>
      </svg>
      <div className="wt-gauge-txt"><b>{ok ? liters : 0} L</b><span>{inr(CFG.rate)} per liter</span></div>
    </div>
  );
}

export default function WaterSystem() {
  const [tab, setTab] = useState("Order");
  const [f, setF] = useState({ name: "", phone: "", address: "", liters: 20, mode: "DELIVERY", slot: SLOTS[1] });
  const [pay, setPay] = useState({ method: "UPI", upi: "", bank: BANKS[0] });
  const [order, setOrder] = useState(null);
  const [stage, setStage] = useState("IDLE"); // IDLE → DISPENSING → READY → DONE
  const [dispensed, setDispensed] = useState(0);
  const [times, setTimes] = useState({});
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
  const locked = !!order;
  const liters = locked ? order.liters : Number(f.liters);
  const litersOk = Number.isInteger(liters) && liters >= CFG.min && liters <= CFG.max;
  const mode = locked ? order.mode : f.mode;
  const bill = locked ? order : litersOk ? calc(liters, mode) : null;
  const jarN = litersOk ? Math.ceil(liters / CFG.jar) : 0;

  // Validation (each step only checks what it owns)
  const checkOrder = () => {
    if (!litersOk) return `Enter a volume between ${CFG.min} and ${CFG.max} litres.`;
    if (!f.name.trim()) return "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(f.phone)) return "Enter a valid 10-digit mobile number.";
    if (f.mode === "DELIVERY" && !f.address.trim()) return "Please enter the delivery address.";
    return "";
  };
  const checkPay = () => (pay.method === "UPI" && !/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(pay.upi) ? "Enter a valid UPI ID (e.g. name@bank)." : "");

  const go = (t) => {
    if (locked && (t === "Order" || t === "Payment")) return;
    const e1 = t !== "Order" && t !== "Water" ? checkOrder() : "";
    const e2 = !e1 && t === "Bill" ? checkPay() : "";
    if (e1 || e2) { setErr(e1 || e2); setTab(e1 ? "Order" : "Payment"); return; }
    setErr("");
    setTab(t);
  };

  // Filling simulation. With real hardware, feed flow-meter readings / API data here
  useEffect(() => {
    if (stage !== "DISPENSING") return;
    const id = setInterval(() => setDispensed((d) => Math.min(order.liters, d + order.liters / FILL_TICKS)), 100);
    return () => clearInterval(id);
  }, [stage, order]);

  useEffect(() => {
    if (stage === "DISPENSING" && order && dispensed >= order.liters) {
      setStage("READY");
      setTimes((t) => ({ ...t, 2: clock() }));
    }
  }, [dispensed, stage, order]);

  // Filling starts by itself a moment after the order is placed
  useEffect(() => {
    if (!order || stage !== "IDLE") return;
    const id = setTimeout(() => { setDispensed(0); setStage("DISPENSING"); }, 1500);
    return () => clearTimeout(id);
  }, [order, stage]);

  const placeOrder = () => {
    const e = checkOrder() || checkPay();
    if (e) { setErr(e); setTab(checkOrder() ? "Order" : "Payment"); return; }
    setErr("");
    setBusy(true);
    // A real gateway (Razorpay / PayU) checkout opens here; mark paid only after verified success
    setTimeout(() => {
      const cod = pay.method === "COD";
      const id = Date.now().toString(36).toUpperCase();
      const t = clock();
      setOrder({
        ...f, liters, ...bill, method: pay.method, paid: !cod,
        ref: cod ? null : `TXN${id}`, invoiceNo: `INV-${id}`,
        date: new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }),
      });
      setTimes({ 0: t, 1: t });
      setBusy(false);
      setTab("Water");
    }, 1200);
  };

  const complete = () => {
    const t = clock();
    setStage("DONE");
    setTimes((x) => ({ ...x, 3: t, 4: t }));
    setOrder((o) => ({ ...o, paid: true })); // cash collected on delivery / at counter
  };
  const reset = () => {
    setOrder(null); setStage("IDLE"); setDispensed(0); setTimes({}); setErr(""); setTab("Order");
  };

  const pct = locked ? Math.round((dispensed / order.liters) * 100) : 0;
  const curJar = locked ? Math.min(jarN, Math.floor(dispensed / CFG.jar) + 1) : 0;
  const steps = locked
    ? ["Order placed", order.method === "COD" ? "Order confirmed (pay later)" : "Payment received", "Filling and sealing",
       order.mode === "DELIVERY" ? "Out for delivery" : "Ready for collection", order.mode === "DELIVERY" ? "Delivered" : "Collected"]
    : [];
  const stepSub = (i) => {
    if (i === 2 && stage === "IDLE") return "Starting shortly…";
    if (i === 2) return `${pct}% filled · jar ${curJar} of ${jarN}`;
    if (i === 3) return order.mode === "DELIVERY" ? `Slot: ${order.slot}` : "Collect from the plant counter";
    return "";
  };
  const status = !locked ? "No active order"
    : stage === "IDLE" ? "Order confirmed"
    : stage === "DISPENSING" ? "Filling in progress"
    : stage === "READY" ? (order.mode === "DELIVERY" ? "Out for delivery" : "Ready for collection") : "Completed";

  const rangeStyle = { "--p": `${((Math.min(litersOk ? liters : CFG.min, CFG.sliderMax) - CFG.min) / (CFG.sliderMax - CFG.min)) * 100}%` };

  return (
    <div className="wt">
      <nav className="wt-tabs no-print" aria-label="Order steps">
        {TABS.map((t) => (
          <button key={t} type="button" className={"wt-tab" + (tab === t ? " is-on" : "")} aria-current={tab === t ? "step" : undefined}
            disabled={locked && (t === "Order" || t === "Payment")} onClick={() => go(t)}>{t}</button>
        ))}
      </nav>
      {err && <p className="wt-err no-print" role="alert">{err}</p>}

      {/* ===================== ORDER ===================== */}
      {tab === "Order" && (
        <div className="wt-col">
          <section className="wt-card">
            <Gauge liters={liters} ok={litersOk} />
            <div className="wt-qty">
              <button type="button" className="wt-step" aria-label="Decrease by 5 litres" onClick={() => set("liters", Math.max(CFG.min, (litersOk ? liters : CFG.min) - 5))}>−</button>
              <input type="range" className="wt-range" style={rangeStyle} min={CFG.min} max={CFG.sliderMax} step={5}
                value={litersOk ? Math.min(liters, CFG.sliderMax) : CFG.min} onChange={(e) => set("liters", Number(e.target.value))} aria-label="Litres" />
              <button type="button" className="wt-step" aria-label="Increase by 5 litres" onClick={() => set("liters", Math.min(CFG.max, (litersOk ? liters : CFG.min) + 5))}>+</button>
            </div>
            <div className="wt-presets">
              {PRESETS.map(([l, n]) => (
                <button key={l} type="button" className={"wt-preset" + (liters === l ? " is-on" : "")} onClick={() => set("liters", l)}><b>{l}L</b><span>{n}</span></button>
              ))}
            </div>
          </section>

          <section className="wt-card">
            <div className="wt-seg">
              <button type="button" className={f.mode === "DELIVERY" ? "is-on" : ""} onClick={() => set("mode", "DELIVERY")}>🚚 Home delivery</button>
              <button type="button" className={f.mode === "PICKUP" ? "is-on" : ""} onClick={() => set("mode", "PICKUP")}>🏭 Plant pickup · free</button>
            </div>
            <label className="wt-field">Full name
              <input value={f.name} autoComplete="name" onChange={(e) => set("name", e.target.value)} />
            </label>
            <label className="wt-field">Mobile number
              <input inputMode="numeric" maxLength={10} autoComplete="tel" value={f.phone} onChange={(e) => set("phone", e.target.value.replace(/\D/g, ""))} />
            </label>
            {f.mode === "DELIVERY" && (
              <>
                <label className="wt-field">Delivery address
                  <textarea rows={2} autoComplete="street-address" value={f.address} onChange={(e) => set("address", e.target.value)} />
                </label>
                <label className="wt-field">Delivery slot (today)
                  <select value={f.slot} onChange={(e) => set("slot", e.target.value)}>{SLOTS.map((s) => <option key={s}>{s}</option>)}</select>
                </label>
              </>
            )}
          </section>
          <button type="button" className="wt-go" onClick={() => go("Payment")}>Continue to payment{bill ? ` · ${inr(bill.total)}` : ""}</button>
        </div>
      )}

      {/* ===================== PAYMENT ===================== */}
      {tab === "Payment" && (
        <div className="wt-col">
          <section className="wt-card">
            <h3 className="wt-h">Payment method</h3>
            <div className="wt-grid">
              {[["UPI", "Any UPI app"], ["CARD", "Credit or debit card"], ["NETBANKING", "All major banks"],
                ["COD", f.mode === "DELIVERY" ? "Pay when delivered" : "Pay at the plant"]].map(([id, hint]) => (
                <button key={id} type="button" className={"wt-tile" + (pay.method === id ? " is-on" : "")} onClick={() => { setPay((p) => ({ ...p, method: id })); setErr(""); }}>
                  <b>{methodName(id, f.mode)}</b><span>{hint}</span>
                </button>
              ))}
            </div>
            {pay.method === "UPI" && (
              <label className="wt-field">UPI ID
                <input placeholder="name@bank" value={pay.upi} onChange={(e) => setPay((p) => ({ ...p, upi: e.target.value.trim() }))} />
              </label>
            )}
            {pay.method === "NETBANKING" && (
              <label className="wt-field">Select bank
                <select value={pay.bank} onChange={(e) => setPay((p) => ({ ...p, bank: e.target.value }))}>{BANKS.map((b) => <option key={b}>{b}</option>)}</select>
              </label>
            )}
            {pay.method === "CARD" && <p className="wt-note">You will enter card details on the secure payment page. Card numbers are never entered or stored here.</p>}
            {pay.method === "COD" && <p className="wt-note">No advance payment needed. Please pay {f.mode === "DELIVERY" ? "the delivery executive" : "at the plant counter"} when you receive your water.</p>}
          </section>
          <div className="wt-two">
            <button type="button" className="wt-ghost" onClick={() => go("Order")}>Back</button>
            <button type="button" className="wt-go" onClick={() => go("Bill")}>Review bill</button>
          </div>
        </div>
      )}

      {/* ===================== BILL ===================== */}
      {tab === "Bill" && (
        <div className="wt-col">
          <section className="wt-card wt-invoice">
            {locked && <div className={"wt-stamp" + (order.paid ? "" : " is-due")}>{order.paid ? "PAID" : "PAYMENT DUE"}</div>}
            <div className="wt-inv-head">
              <b>{locked ? "TAX INVOICE" : "ESTIMATE"}</b>
              <span>{SELLER.name}<br />GSTIN: {SELLER.gstin}<br />{SELLER.address}</span>
            </div>
            {locked ? (
              <p className="wt-meta">
                <b>{order.invoiceNo}</b> · {order.date}<br />
                Billed to: {order.name} · {order.phone}
                {order.mode === "DELIVERY" ? <><br />Deliver to: {order.address}<br />Slot: {order.slot}</> : <><br />Self pickup from plant</>}
              </p>
            ) : <p className="wt-meta">Final invoice is generated once the order is placed.</p>}
            {bill ? (
              <div className="wt-scroll">
                <table className="wt-table">
                  <thead><tr><th>Description</th><th className="num">Qty</th><th className="num">Rate</th><th className="num">Amount</th></tr></thead>
                  <tbody>
                    <tr><td>Purified drinking water</td><td className="num">{liters} L</td><td className="num">{inr(CFG.rate)}</td><td className="num">{inr(bill.water)}</td></tr>
                    {mode === "DELIVERY" && (
                      <tr>
                        <td>Delivery charges<small>{inr(CFG.deliveryBase)} + {inr(CFG.perJar)} × {jarN} jar{jarN === 1 ? "" : "s"}</small></td>
                        <td className="num">1</td><td className="num">—</td><td className="num">{inr(bill.delivery)}</td>
                      </tr>
                    )}
                  </tbody>
                  <tfoot>
                    <tr><td colSpan={3}>Taxable value</td><td className="num">{inr(bill.taxable)}</td></tr>
                    <tr><td colSpan={3}>CGST @ {CFG.gstHalf}%</td><td className="num">{inr(bill.cgst)}</td></tr>
                    <tr><td colSpan={3}>SGST @ {CFG.gstHalf}%</td><td className="num">{inr(bill.sgst)}</td></tr>
                    <tr className="wt-grand"><td colSpan={3}>Total</td><td className="num">{inr(bill.total)}</td></tr>
                  </tfoot>
                </table>
              </div>
            ) : <p className="wt-err">Enter a volume between {CFG.min} and {CFG.max} litres.</p>}
            {locked && (
              <p className="wt-meta">
                Payment: {methodName(order.method, order.mode)} · <b>{order.paid ? `Paid${order.ref ? ` (ref ${order.ref})` : ""}` : "Payable " + (order.mode === "DELIVERY" ? "on delivery" : "at counter")}</b>
                <br />This is a computer-generated invoice.
              </p>
            )}
          </section>
          {!locked ? (
            <div className="wt-two no-print">
              <button type="button" className="wt-ghost" onClick={() => go("Payment")}>Back</button>
              <button type="button" className="wt-go" onClick={placeOrder} disabled={busy || !bill}>
                {busy ? "Processing…" : pay.method === "COD" ? "Place order" : `Pay ${bill ? inr(bill.total) : ""}`}
              </button>
            </div>
          ) : (
            <div className="wt-two no-print">
              <button type="button" className="wt-ghost" onClick={() => window.print()}>Print invoice</button>
              <button type="button" className="wt-go" onClick={() => setTab("Water")}>Watch the tank</button>
            </div>
          )}
        </div>
      )}

      {/* ===================== WATER ===================== */}
      {tab === "Water" && (
        <div className="wt-water-grid">
          <section className="wt-card wt-tankcard">
            <WaterTank3D fill={locked ? dispensed / order.liters : 0} flowing={stage === "DISPENSING"} capacity={locked ? order.liters : 20} />
            <div className="wt-meter" aria-live="polite">
              <small>{status}</small>
              <b>{locked ? dispensed.toFixed(1) : "0.0"}<em> / {locked ? order.liters : 0} L</em></b>
            </div>
            <p className="wt-hint">Drag the tank to rotate it</p>
          </section>
          <section className="wt-side">
            {!locked ? (
              <div className="wt-card">
                <h3 className="wt-h">No active order</h3>
                <p className="wt-note">Place an order and the tank fills here, litre by litre.</p>
                <button type="button" className="wt-go" onClick={() => setTab("Order")}>Start an order</button>
              </div>
            ) : (
              <>
                <div className="wt-card">
                  <h3 className="wt-h">Order tracking</h3>
                  <ol className="wt-track">
                    {steps.map((s, i) => {
                      const st = stage === "DONE" || i < CUR[stage] ? "done" : i === CUR[stage] ? "active" : "todo";
                      return (
                        <li key={s} className={"wt-trk is-" + st}>
                          <span className="wt-node">{st === "done" ? "✓" : i + 1}</span>
                          <div><b>{s}</b><small>{st === "done" ? times[i] || "" : st === "active" ? stepSub(i) : ""}</small></div>
                        </li>
                      );
                    })}
                  </ol>
                  {stage === "READY" && <button type="button" className="wt-go" onClick={complete}>{order.mode === "DELIVERY" ? "Mark as delivered" : "Mark as collected"}</button>}
                  {stage === "DONE" && <p className="wt-ok">Order completed. Thank you for ordering.</p>}
                </div>
                <div className="wt-two">
                  <button type="button" className="wt-ghost" onClick={() => setTab("Bill")}>View bill</button>
                  <button type="button" className="wt-ghost" onClick={reset}>New order</button>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
