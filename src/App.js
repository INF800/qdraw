import React, {useRef, useState, useEffect} from 'react';
import './App.css';
import SketchPad from './sketch/SketchPad'
import UndoButton from './ui/UndoButton'
import Info from './ui/Info'
import {Speech} from './speech'
import {setisBackendUpFromAPI, predictB64, resetDoodle} from './api'

function App() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const timeFieldRef = useRef(null)
  const runningTimerRef = useRef(null)

  const [isBackendUp, setisBackendUp] = useState(false)
  const [curB64, setCurB64] = useState(null)
  const [curDoodle, setDoodle] = useState('Q')
  const [time, setTime] = useState('InitalresetTime')

  useEffect( ()=>{
    setisBackendUpFromAPI(isBackendUp, setisBackendUp)
    const run = async () => {
      speechSynthesis.cancel() // clear queue due to async/await
      var preds = await predictB64(curB64)
      const doodleStatus = resetDoodle(preds, curDoodle, setTime, timeFieldRef, runningTimerRef)
    }
    run()
  }, [isBackendUp, curB64, curDoodle, time, timeFieldRef, runningTimerRef])

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
        timeFieldRef={timeFieldRef}
      />
    </div>
  )
}


export default App;
