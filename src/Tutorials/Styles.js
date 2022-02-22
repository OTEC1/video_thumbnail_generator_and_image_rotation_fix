import React from 'react'
import  './mystyle.css'

function Styles({primary}) {

    let className = primary ? 'secondary' : "";
    
  return (
    <div><h1 className={`${className} font-xl`}>Hello</h1></div>
  )
}

export default Styles