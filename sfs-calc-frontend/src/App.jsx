import "./App.css";
import CalculatorWindow from "./components/calculator-window/CalculatorWindow";

export default function App() {
  return (
    <div className="home-page">
      <div className="header">
        <h1>Spaceflight Simulator</h1>
        <h2>Flight Parameters Calculator</h2>
        <CalculatorWindow />
      </div>
    </div>
  );
}
