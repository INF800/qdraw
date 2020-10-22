import React, {useRef, useState, useEffect} from 'react';
import './App.css';
import SketchPad from './sketch/SketchPad'
import UndoButton from './ui/UndoButton'
import Info from './ui/Info'

// axios
import {setisBackendUpFromAPI, predictB64, isRightDoodle} from './api'


function App() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const [isBackendUp, setisBackendUp] = useState(false)
  const [curB64, setCurB64] = useState(null)
  const [curDoodle, setDoodle] = useState('initalDoodleFromStoredData')
  const [time, setTime] = useState('resetTime')

  useEffect( ()=>{
    setisBackendUpFromAPI(isBackendUp, setisBackendUp)
    var preds = predictB64(curB64)
    console.log('o', preds)
    const doodleStatus = ( async () => {return await isRightDoodle(preds, curDoodle)})

  }, [isBackendUp, curB64, curDoodle])

  
  if (isBackendUp !== true){
    return (
      <div  className='BigInfo'>
        Waking up server &nbsp;😴 &nbsp;  
        <span className="letter-changer">ZzZ</span>
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
        doodle={curDoodle}
        time={time}
      />
    </div>
  )
}


export default App;
