import "./ToolWindow.css";
import BurnTime from "./tools/burn-time/BurnTime";
import DeltaV from "./tools/delta-v/DeltaV";

export default function ToolWindow(props) {
  return (
    <div className="tool-window">
      <div className="tool-container">
        {props.activeTool === "" && <h2>Please Select a Tool</h2>}
        {props.activeTool === "Burn Time" && <BurnTime />}
        {props.activeTool === "Delta V" && <DeltaV />}
      </div>
    </div>
  );
}
