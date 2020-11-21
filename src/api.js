import axios from 'axios'
import {Speech} from './speech'
import {classes61} from './ui/data'

//===================================
const base = "http://127.0.0.1:"
const port = "8008/"
//===================================

async function setisBackendUpFromAPI(isBackendUp, setisBackendUp){
    if (isBackendUp) { return }
    const response = await axios.get(base + port + "wakeup")
    console.log('DEBUG server status ', response.data)
    if (response.data.status === "up"){
        setisBackendUp(true)
    }
}

var doNotPredict = false
const predictB64 = async (curB64) => {
    if ((curB64 === null) || (doNotPredict === true)) {
        doNotPredict = false
        return
    }
    const response = await axios.post(base + port + "predict", {
        "b64Image": curB64
    })
    return response.data.preds
}

function getRandomInt(min, max) {
    // max is inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const prefixes = ['I see ', 'Looks like ', 'I think', '']
function getRandomPrefix(){
    return prefixes[getRandomInt(0, prefixes.length-1)]
}

var voiceDisplayStr = ""
const resetDoodle = (preds, curDoodle, setDoodle, setTime, timeFieldRef, runningTimerRef, voiceDisplayRef, contextRef) => {
    if (preds===undefined) {return} 
    console.log("DEBUG preds array ", preds)
    preds.forEach(e => {
        // console.log('adding: ', e[0])
        voiceDisplayStr = voiceDisplayStr + "<code>" + e[0] + "</code>" 
    })

    for (let i=0; i<preds.length; i++){
        const [label, score] = preds[i]
        Speech(getRandomPrefix() + label)

        if (curDoodle === label) {
            // reset time, doodlename to new
            // ============================================
            // todo: doodle name
            if (runningTimerRef.current !== null){
                clearInterval(runningTimerRef.current);
            }

            console.log('found!')
            clearInterval(runningTimerRef.current);
            contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
            setDoodle(classes61[getRandomInt(0, 60)])

            var timeleft = 10
            runningTimerRef.current = setInterval(function(){
                timeleft--;
                timeFieldRef.current.textContent = timeleft;
                if(timeleft <= 0){
                    timeleft = 10
                    contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
                    doNotPredict = true
                    setDoodle(classes61[getRandomInt(0, 60)])
                    //!don't: clearInterval(runningTimerRef.current);
                }
            },1000);
            // ============================================
            voiceDisplayStr = ""
            return true
        }
    }
    voiceDisplayRef.current.innerHTML = voiceDisplayStr
    voiceDisplayStr = ""
    return false
}

export {setisBackendUpFromAPI, predictB64, resetDoodle}