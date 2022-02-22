import React, { useEffect, useState } from 'react'

function MouseEventFunction() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);





  const setCursor = (e) => {
    console.log("Shifting ")
    setX(e.clientX);
    setY(e.clientY) 
  }


  useEffect( ()=> {
    console.log("UseEffect ")
    window.addEventListener('mousemove', setCursor)

    return () => {
      console.log("Done")
      window.removeEventListener('mousemove', setCursor)
    }
  },[])



  return (
    <div> 
      X= {x}  Y= {y}
    </div>
  )
}

export default MouseEventFunction