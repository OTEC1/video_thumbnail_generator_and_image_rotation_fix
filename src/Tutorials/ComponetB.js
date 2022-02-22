import React,{useContext} from 'react'
import ComponentA from './ComponentA'
import { userContext, channelContext } from '../App'

function ComponetB() {

  const user = useContext(userContext);
  const channel = useContext(channelContext);

  return (
    <div>
      {user} - {channel}

      {/* <ComponentA/> */}
    </div> 
  )
}

export default ComponetB