import "./CalculatorWindow.css";
import ToolBar from "../tool-bar/ToolBar";
import ToolWindow from "../tool-window/ToolWindow";

export default function CalculatorWindow() {
  return (
    <div className="calc-window">
        <ToolBar />
        <ToolWindow />
    </div>
  );
}
