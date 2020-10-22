import React, {useRef} from 'react';
import './App.css';
import SketchPad from './sketch/SketchPad'
import UndoButton from './ui/UndoButton'
import Info from './ui/Info'

function App() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  return (
    <div>
      <SketchPad 
        canvasRef={canvasRef}
        contextRef={contextRef}
      />
      <UndoButton
        contextRef={contextRef}
      />
      <Info/>
    </div>
  )
}


export default App;
