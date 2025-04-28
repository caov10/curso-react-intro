import React from "react";
import "./ErrorView.css";
function TodosError() {

  return (
    <div className="error-container">
      <div className="error-icon-container">
        {/* SVG de advertencia (ícono de exclamación en triángulo) */}
        <svg
          className="error-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill="currentColor"
        >
          <path d="M569.517 440.13L327.94 43.674C317.504 26.927 302.007 16 285.171 16c-16.835 0-32.332 10.927-42.768 27.674L6.483 440.13C-3.837 456.74.53 477.465 16.667 486.736 32.804 495.979 56.623 485.838 64.001 466.553l95.999-370.553H416l95.999 370.553c7.377 19.285 31.196 29.426 47.334 20.183 16.136-9.271 20.504-29.995 10.184-46.716zM288 346c-13.255 0-24 10.745-24 24 0 13.255 10.745 24 24 24s24-10.745 24-24c0-13.255-10.745-24-24-24zm-24-192c0-13.255 10.745-24 24-24s24 10.745 24 24l.007 96c0 13.255-10.745 24-24.007 24-13.255 0-24-10.745-24-24L264 154z" />
        </svg>
      </div>
      <p className="error-message">Ha ocurrido un error</p>
    </div>
  );
}
export { TodosError };