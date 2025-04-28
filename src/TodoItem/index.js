import "./TodoItems.css";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <FaRegSquareCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        className={`Icon Icon-delete" ${
          props.completed && "Icon-trash--active"} `}
        onClick={props.onDelete}
      >
        <FaTrashCan />
      </span>
    </li>
  );
}
export { TodoItem}