import React from "react";
import  addTaskImage from "./add-task.png";
import "./emptyTodos.css";
function EmptyTodos() {

  return (
    <div className="add-task-container">
      <img src={addTaskImage} alt="Agregar Tarea" className="add-task-image" />
      <p className="add-task-message">Agrega tu primera tarea para empezar</p>
      <button className="add-task-button">Agregar tarea</button>
    </div>
  );
}
export { EmptyTodos };