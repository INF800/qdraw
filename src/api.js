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
    // todo: find why 'Promise' if not used as in below.
    // ! it taking time!!!!!!!!!!!!!
    console.log('i',response.data)
    return response.data
}

const isRightDoodle = (preds, curDoodle) => {
}

export {setisBackendUpFromAPI, predictB64, isRightDoodle}