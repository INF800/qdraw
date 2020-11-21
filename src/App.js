import React, {useRef, useState, useEffect} from 'react';
import './App.css';
import SketchPad from './sketch/SketchPad'
import UndoButton from './ui/UndoButton'
import Info from './ui/Info'
import Voice from './ui/Voice'
import {Speech} from './speech'
import {setisBackendUpFromAPI, predictB64, resetDoodle} from './api'

function App() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const timeFieldRef = useRef(null)
  const runningTimerRef = useRef(null)
  const voiceDisplayRef = useRef(null)

  const [isBackendUp, setisBackendUp] = useState(false)
  const [curB64, setCurB64] = useState(null)
  const [curDoodle, setDoodle] = useState('matches')
  const [time, setTime] = useState('any number of')

  useEffect( ()=>{
    setisBackendUpFromAPI(isBackendUp, setisBackendUp)
    const run = async () => {
      speechSynthesis.cancel() // clear queue due to async/await
      var preds = await predictB64(curB64)
      const doodleStatus = resetDoodle(
        preds, curDoodle, setDoodle, setTime,
        timeFieldRef, runningTimerRef, voiceDisplayRef, contextRef
      )
    }
    run()
  }, [isBackendUp, curB64, curDoodle, time, timeFieldRef, runningTimerRef, contextRef])

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
      <Voice
        voiceDisplayRef={voiceDisplayRef}
      />
    </div>
  )
}


export default App;
