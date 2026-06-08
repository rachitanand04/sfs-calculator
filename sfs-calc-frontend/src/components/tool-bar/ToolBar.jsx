import "./ToolBar.css"
import ToolItem from "./tool-item/ToolItem"
import { FaFire } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";

export default function ToolBar(props){
    function handleClick(name){
        props.onClick(name);
    }
    return (
        <div className="tool-bar">
            <ToolItem name="Burn Time" icon={<FaFire/>} handleClick={handleClick}/>
            <ToolItem name="Delta V" icon={<IoSpeedometer/>} handleClick={handleClick}/>
        </div>
    )
}