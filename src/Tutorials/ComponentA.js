import React from 'react'
import { userContext, channelContext } from '../App'


function ComponentA() {
  return (
      <userContext.Consumer>
          {
              iuser => {
                 return (
                    <channelContext.Consumer>
                                {
                                    channel => {
                                        return <div>ComponentA {iuser} channel {channel}</div>
                                    }
                                }

                    </channelContext.Consumer>
               )
              }
          }
      </userContext.Consumer>
   
  )
}

export default ComponentA