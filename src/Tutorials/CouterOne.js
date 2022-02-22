import React, { useReducer } from 'react'



const  initialState = 0;

const reducer = (state,action) => {
    
    switch(action){

        case "increment":
            return state + 1
            break;

        case "Decrement":
            if(state !== 0)
              return state - 1
            else
              return initialState
            break;

        case "reset":
             return initialState
             break;

      default:
            return state;
    }
}

function CouterOne() {
    const [count, dispatching] = useReducer(reducer,initialState);

    return (
        <div>
            Count  - {count}
            <button onClick={() => dispatching('increment')}>Increment</button>
            <button onClick={() => dispatching('Decrement')}>Decrement</button>
            <button onClick={() => dispatching('reset')}>Reset</button>
        </div>
       )

    }


export default CouterOne