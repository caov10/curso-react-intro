import React from "react";
import "./TodoFormStyle.css";
import {TodoContext} from '../TodoContext'
function TodoForm() {
const {
  addTodo,
  setOpenModal,
}= React.useContext(TodoContext);
const [newTodoValue, setNewTodoValue]=React.useState('');

const onSubmit=(event)=>{
  event.preventDefault();
  addTodo(newTodoValue);
  setOpenModal(false);
};
const onCancel=()=>{
  setOpenModal(false);
};

const onChange=( event)=>{
setNewTodoValue(event.target.value);
}

return (
    <form className="TodoForm" onSubmit={onSubmit}
      //const textarea = event.target.querySelector("textarea");
      //const newTodoText = textarea.value;
      //textarea.value = "";
      //console.log(newTodoText);
    >
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Escribe tu nuevo TODO" 
      value={newTodoValue}
      onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button type="button" className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };