import React from 'react';
import './UndoButton.css'

function UndoButton({contextRef}) {

  function retBottomPos(){
    if (window.innerHeight > window.innerWidth){
      return "100vh"
    } else {
      return "20vh"
    }
  }

  const next = () => {
    // todo
  }

  const undo = () => {
    contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
    //contextRef.current.fillStyle = "rgb(255,255,255)";
    //contextRef.current.fillRect(0,0,window.innerWidth, window.innerHeight);
  }

  return (
    <div className="ButtonsContainer">
      <div
        onClick={next} 
        className="NextButtonWeb"
      >
        Skip
      </div>
      &nbsp;  &nbsp;  
      <div
        onClick={undo} 
        className="UndoButtonWeb"
      >
        Clear
      </div>
    </div>
    
  )
}


export default UndoButton;
