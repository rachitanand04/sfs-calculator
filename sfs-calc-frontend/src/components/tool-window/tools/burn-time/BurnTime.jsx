import "./BurnTime.css";
import engines from "../../../../js/engine_info.js";
import { calculateBurnTime } from "../../../../js/maths.js"
import { useState } from "react";

export default function BurnTime() {
  const [mass, setMass] = useState();
  const [count, setCount] = useState();
  const [engine, setEngine] = useState("");
  const [burnTime, setBurnTime] = useState("-");

  function handleSubmit(e){
    const engineObject = engines.find((eng) => (eng.id == engine));
    console.log("here");
    setBurnTime(calculateBurnTime(mass,engineObject.thrust,engineObject.isp,count));
    e.preventDefault();
  }
  return (
    <div className="burn-time">
      <form onSubmit={handleSubmit}>
        <input
          name="mass"
          type="number"
          placeholder="Fuel Mass (Tons)"
          value={mass}
          onChange={(e) => setMass(Number(e.target.value))}
        />
        <select
          name="engine"
          value={engine}
          onChange={(e) => setEngine(e.target.value)}
        >
          <option value="">Select Engine</option>
          {engines.map((eng) => (
            <option key={eng.id} value={eng.id}>
              {eng.name}
            </option>
          ))}
        </select>
        <input
          name="count"
          type="number"
          placeholder="# of Engines"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button type="submit">Submit</button>
      </form>
      {burnTime}
    </div>
  );
}
