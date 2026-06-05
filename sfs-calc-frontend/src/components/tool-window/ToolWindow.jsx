import "./ToolWindow.css"
import BurnTime from "./tools/burn-time/BurnTime"

export default function ToolWindow(){
    return(
        <div className="tool-window">
            <BurnTime />
        </div>
    )
}