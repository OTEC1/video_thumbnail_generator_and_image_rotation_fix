import React, { useState } from 'react'
import MouseEventFunction from './MouseEventFunction'




function MouseContainer() {

  const [display , setDisplay] = useState(true);

  return (
    <div>
        <button  onClick={(e) => setDisplay(!display)}> Click</button>
        {display && <MouseEventFunction/>}
    </div>
  )
}

export default MouseContainer