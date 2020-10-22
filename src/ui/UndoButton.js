import React from 'react';
import './UndoButton.css'

function UndoButton({contextRef}) {

  const undo = () => {
    contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
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
