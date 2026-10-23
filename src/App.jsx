import { useEffect } from "react";
import WaterSystem from "./components/WaterSystem/WaterSystem.jsx";

// body[data-task] is used by styles/base.css for this task's page background.
const TASK_ID = "9";

export default function App() {
  useEffect(() => {
    document.body.dataset.task = TASK_ID;
    return () => { delete document.body.dataset.task; };
  }, []);

  return (
    <main className="page">
      <div className="page-head">
        <span className="task-chip">Task 9</span>
        <h1 className="page-title">Purified Water Order</h1>
        <p className="page-sub">Enter the litres of purified water you need, pay with UPI, card, net banking or cash on delivery, get a bill with delivery charges, and receive your water.</p>
      </div>
      <WaterSystem />
    </main>
  );
}
