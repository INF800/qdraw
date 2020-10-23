import axios from 'axios'
//===================================
const base = "http://127.0.0.1:"
const port = "8003/"
//===================================

async function setisBackendUpFromAPI(isBackendUp, setisBackendUp){
    if (isBackendUp) { return }
    const response = await axios.get(base + port + "wakeup")
    console.log('w', response.data)
    if (response.data.status === "up"){
        setisBackendUp(true)
    }
}

const predictB64 = async (curB64) => {
    if (curB64 === null) {return}
    const response = await axios.post(base + port + "predict", {
        "b64Image": curB64
    })
    return response.data.preds
}

const resetDoodle = (preds, curDoodle, setTime, timeFieldRef, runningTimerRef) => {
    if (preds===undefined) {return} 
    console.log(preds)
    for (let i=0; i<preds.length; i++){
        const [label, score] = preds[i]
        if (curDoodle === label) {
            // reset time, doodlename to new
            // -------------------------------
            if (runningTimerRef.current !== null){
                clearInterval(runningTimerRef.current);
            }
            clearInterval(runningTimerRef.current);
            var timeleft = 10
            runningTimerRef.current = setInterval(function(){
                timeleft--;
                timeFieldRef.current.textContent = timeleft;
                if(timeleft <= 0)
                    clearInterval(runningTimerRef.current);
            },1000);
            setTime("10") // should be @end
            // --------------------------------
            return true
        }
    }
    return false
}

export {setisBackendUpFromAPI, predictB64, resetDoodle}