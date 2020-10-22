import React, {useRef, useState, useEffect} from 'react';
import './App.css';
import SketchPad from './sketch/SketchPad'
import UndoButton from './ui/UndoButton'
import Info from './ui/Info'

function App() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const [curB64, setCurB64] = useState(null)
  const [doodle, updateDoodle] = useState('xxx')
  const [time, updateTime] = useState('yy')

  useEffect(()=>{
    // send to api and get preds
    console.log(curB64)
  })

  return (
    <div>
      <SketchPad 
        canvasRef={canvasRef}
        contextRef={contextRef}
        setCurB64={setCurB64}
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
