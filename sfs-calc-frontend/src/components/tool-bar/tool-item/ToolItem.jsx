import "./ToolItem.css"

export default function ToolItem(props) {
  return (
    <button className="pushable">
      <span className="front">{props.icon} {props.name}</span>
    </button>
  );
}