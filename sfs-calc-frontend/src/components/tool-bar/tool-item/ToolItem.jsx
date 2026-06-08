import "./ToolItem.css"

export default function ToolItem(props) {
  function handleClick(e){
    props.handleClick(props.name);
    e.preventDefault();
  }
  return (
    <button className="pushable" onClick={handleClick}>
      <span className="front">{props.icon} {props.name}</span>
    </button>
  );
}