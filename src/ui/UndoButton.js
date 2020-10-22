import React from 'react';
import './UndoButton.css'

function UndoButton({contextRef}) {

  const undo = () => {
    contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
    contextRef.current.fillStyle = "rgb(255,255,255)";
    contextRef.current.fillRect(0,0,window.innerWidth, window.innerHeight);
  }

  return (
    <div
      onClick={undo} 
      className="UndoButtonWeb">
        Undo
    </div>
  )
}


export default UndoButton;
