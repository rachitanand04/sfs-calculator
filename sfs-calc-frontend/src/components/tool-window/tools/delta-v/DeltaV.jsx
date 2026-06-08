import "./DeltaV.css";
import engines from "../../../../js/engine_info.js";
import gravity from "../../../../js/gravity.js";
import { calculateDeltaV } from "../../../../js/maths.js";
import { useState } from "react";

export default function DeltaV() {
  const [fuelMass, setFuelMass] = useState();
  const [totalMass, setTotalMass] = useState();
  const [engine, setEngine] = useState("");
  const [deltaV, setDeltaV] = useState("-");

  function handleSubmit(e) {
    const engineObject = engines.find((eng) => eng.id == engine);
    setDeltaV(calculateDeltaV(fuelMass,totalMass,engineObject.isp));
    e.preventDefault();
  }
  return (
    <div className="delta-v">
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
        <label>Fuel Mass(Tons)</label>
        <input
          name="fuelMass"
          value={fuelMass}
          type="number"
          placeholder="Fuel Mass (Tons)"
          onChange={(e) => setFuelMass(e.target.value)}
        />
        <label>Total Mass(Tons)</label>
        <input
          name="totalMass"
          value={totalMass}
          type="number"
          placeholder="Total Mass (Tons)"
          onChange={(e) => setTotalMass(e.target.value)}
        />
        <button className="pushable" type="submit">
          <span className="front">Go</span>
        </button>
      </form>
      <div className="delta-v-result">Delta V: {deltaV} m/s</div>
    </div>
  );
}
