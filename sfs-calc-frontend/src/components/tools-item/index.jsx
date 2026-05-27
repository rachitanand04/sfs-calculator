import "./index.css";
import { FaFire } from "react-icons/fa";

function ToolItem() {
  return (
    <div>
      <button className="tool-select-button">
        <h2>
          <FaFire /> Total Burn Time
        </h2>
        <p>Total time to burn fuel in a rocket stage.</p>
      </button>
    </div>
  );
}

export default ToolItem;
