import "./CalculatorWindow.css";
import ToolBar from "../tool-bar/ToolBar";
import ToolWindow from "../tool-window/ToolWindow";
import { useState } from "react";

export default function CalculatorWindow() {
  const [selectedTool, setTool] = useState("");
  function handleClick(name){
    setTool(name);
  }
  return (
    <div className="calc-window">
        <ToolBar onClick={handleClick}/>
        <ToolWindow activeTool={selectedTool}/>
    </div>
  );
}
