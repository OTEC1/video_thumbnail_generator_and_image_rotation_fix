import React, { useEffect, useState } from 'react'

function IntervalHookCouter() {

    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(precount => precount +1);
    }

 
    useEffect( ()=> {

        const interval = setInterval(tick,1000)
        return () => {
            clearInterval(tick)
        }
    },[])

  return (
    <div>{count}</div>
  )
}

export default IntervalHookCouter