import axios from 'axios'

const base = "http://127.0.0.1:"
const port = "8000/"

async function setisBackendUpFromAPI(isBackendUp, setisBackendUp){
    if (isBackendUp) { return }
    var response = await axios.get(base + port + "wakeup")
    if (response.data.status === "up"){
        setisBackendUp(true)
    }
}


export {setisBackendUpFromAPI}