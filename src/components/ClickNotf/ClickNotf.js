import React from "react";
import './style.scss';

// "click to mark todo as complete" animation
const ClickNotf = props => {
  const style = {
    backgroundColor: "inherit",
    color: "inherit",
    margin: 0,
    textAlign: "center"
  }
  return(
    <div style={style}>
      <p id="notf">Click a todo to mark as complete</p>
    </div>
  );
}

export default ClickNotf;
