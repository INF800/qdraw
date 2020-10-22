import React from 'react';
import './Info.css'

function Info({doodle, time}) {

  return (
    <div className="InfoWeb">
      Please draw <b>{doodle}</b> <br/>
      in <b><span className="letter-changer">{time}</span></b> seconds
    </div>
  )
}


export default Info;
