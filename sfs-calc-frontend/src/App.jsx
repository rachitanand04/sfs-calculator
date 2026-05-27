import "./App.css";
import engines from "./js/engine_info";
import Calculator from "./components/calculator";

export default function App() {
  return (
    <div className="background">
      <div className="stars"></div>
      <div className="body">
        <h1>Spaceflight Simulator</h1>
        <h2>Flight Parameters Calculator</h2>
        <Calculator />
      </div>
    </div>
  );
}
