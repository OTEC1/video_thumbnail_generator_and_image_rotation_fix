import React from 'react'

function Child({showDialog, logged}) {

    
  return (
    <div>
    
    <button onClick={(e) => {showDialog('Child');console.log(logged)}}>Child clicked</button> 

    <button onClick={showDialog}>Child clicked</button> 
    
    </div>
  )
}

export default Child