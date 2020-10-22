import React, {useRef, useState} from 'react';
import './App.css';
import SketchPad from './sketch/SketchPad'
import UndoButton from './ui/UndoButton'
import Info from './ui/Info'

function App() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [doodle, updateDoodle] = useState('xxx')
  const [time, updateTime] = useState('yy')

  return (
    <div>
      <SketchPad 
        canvasRef={canvasRef}
        contextRef={contextRef}
      />
      <UndoButton
        contextRef={contextRef}
      />
      <Info
        doodle={doodle}
        time={time}
      />
    </div>
  )
}


export default App;
