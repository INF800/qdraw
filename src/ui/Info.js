import React from 'react';
import './Info.css'

function Info({doodle, time, timeFieldRef}) {

  return (
    <div className="InfoWeb">
      Please draw <b>{doodle}</b> <br/>
      in <b><span ref={timeFieldRef} className="letter-changer">{time}</span></b> seconds
    </div>
  )
}


export default Info;
