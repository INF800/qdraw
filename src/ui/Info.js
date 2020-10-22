import React from 'react';
import './Info.css'

function Info({doodle, time}) {

  return (
    <div className="InfoWeb">
      Please draw <b>{doodle}</b> <br/>
      in <b>{time}</b> seconds
    </div>
  )
}


export default Info;
