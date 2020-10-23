var talking = true

async function Speech(say) {
    if ('speechSynthesis' in window && talking) {
        console.log('speakig:', say)
        var utterance = new SpeechSynthesisUtterance(say.replace( /(<([^>]+)>)/ig, ''));
        //msg.voice = voices[10]; // Note: some voices don't support altering params
        //msg.voiceURI = 'native';
        //utterance.volume = 1; // 0 to 1
        //utterance.rate = 0.1; // 0.1 to 10
        //utterance.pitch = 1; //0 to 2
        //utterance.text = 'Hello World';
        //utterance.lang = 'en-UK';
        speechSynthesis.speak(utterance);
    }
}

export {Speech}