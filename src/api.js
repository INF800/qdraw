import axios from 'axios'
//===================================
const base = "http://127.0.0.1:"
const port = "8004/"
//===================================

async function setisBackendUpFromAPI(isBackendUp, setisBackendUp){
    if (isBackendUp) { return }
    const response = await axios.get(base + port + "wakeup")
    if (response.data.status === "up"){
        setisBackendUp(true)
    }
}

const predictB64 = async (curB64) => {
    if (curB64 === null) {return}
    const response = await axios.post(base + port + "predict", {
        "b64Image": curB64
    })
    console.log(response.data)
}

export {setisBackendUpFromAPI, predictB64}