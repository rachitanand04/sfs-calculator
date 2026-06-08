import "./DeltaV.css";
import engines from "../../../../js/engine_info.js";
import gravity from "../../../../js/gravity.js";
import { calculateBurnTime } from "../../../../js/maths.js";
import { useState } from "react";

export default function DeltaV() {
  const [mass, setMass] = useState();
  const [count, setCount] = useState();
  const [engine, setEngine] = useState("");
  const [burnTime, setBurnTime] = useState("-");

  function handleSubmit(e) {
    const engineObject = engines.find((eng) => eng.id == engine);
    console.log("here");
    setBurnTime(
      calculateBurnTime(mass, engineObject.thrust, engineObject.isp, count),
    );
    e.preventDefault();
  }
  return (
    <div className="burn-time">
      <h2>Delta V</h2>
      <form onSubmit={handleSubmit}>
        <label>Engine</label>
        <select
          name="engine"
          value={engine}
          onChange={(e) => setEngine(e.target.value)}
        >
          {engines.map((eng) => (
            <option key={eng.id} value={eng.id}>
              {eng.name}
            </option>
          ))}
        </select>
        <label>Total Mass(Tons)</label>
        <input
          name="mass"
          type="number"
          placeholder="Fuel Mass (Tons)"
          value={mass}
          onChange={(e) => setMass(Number(e.target.value))}
        />
        <label>Fuel(Tons)</label>
        <input
          name="mass"
          type="number"
          placeholder="Fuel Mass (Tons)"
          value={mass}
          onChange={(e) => setMass(Number(e.target.value))}
        />
        <label>Count</label>
        <input
          name="count"
          type="number"
          placeholder="# of Engines"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="pushable" type="submit">
          <span className="front">Go</span>
        </button>
      </form>
      <div className="burn-time-result">Burn Time: {burnTime} seconds</div>
    </div>
  );
}
