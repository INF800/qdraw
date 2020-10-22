import React, {useRef, useState, useEffect} from 'react';
import './App.css';
import SketchPad from './sketch/SketchPad'
import UndoButton from './ui/UndoButton'
import Info from './ui/Info'

// axios
import {setisBackendUpFromAPI} from './api'


function App() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const [isBackendUp, setisBackendUp] = useState(false)
  const [curB64, setCurB64] = useState(null)
  const [doodle, updateDoodle] = useState('initalDoodleFromStoredData')
  const [time, updateTime] = useState('resetTime')

  useEffect(()=>{
    // if isBackendUp is false, try to wake. skip if already up
    // to avoid unnncecessary requests
    setisBackendUpFromAPI(isBackendUp, setisBackendUp)
    // send to api and get preds
    console.log(curB64)

  })

  
  if (isBackendUp !== true){
    return (
      <div  className='BigInfo'>
        😴 &nbsp; Waking up server...
      </div>
    )
  }

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
