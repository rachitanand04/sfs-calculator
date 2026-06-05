import "./ToolItem.css"

export default function ToolItem(props) {
  return (
    <button class="pushable">
      <span class="front">{props.icon} {props.name}</span>
    </button>
  );
}