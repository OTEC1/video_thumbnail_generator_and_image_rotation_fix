import React, { useReducer } from 'react'



const  initialState = {
    firstCounter: 0,
    secondcouter: 10
};

const reducer = (state, action) => {
    
    switch(action.type){

        case "increment":
            return {...state, firstCounter: state.firstCounter + action.value} 
            break;

        case "Decrement":
            if(state.firstCounter !== 0)
              return {...state, firstCounter: state.firstCounter -action.value} 
            else
              return initialState
            break;


            case "increment2":
                return {...state, secondcouter: state.secondcouter + action.value} 
                break;
    
            case "Decrement2":
                if(state.secondcouter > 10)
                  return {...state, secondcouter: state.secondcouter - action.value} 
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

function CouterTwo() {
    const [count, dispatching] = useReducer(reducer,initialState);

    return (
        <div>
            FirstCount  - {count.firstCounter}
            SecondCounter - {count.secondcouter}

            <button onClick={() => dispatching({type: 'increment', value: 5})}>Increment</button>
            <button onClick={() => dispatching({type: 'Decrement', value: 5})}>Decrement</button>
            <button onClick={() => dispatching({type: 'increment2', value: 5})}>Increment 2</button>
            <button onClick={() => dispatching({type: 'Decrement2', value: 5})}>Decrement 2</button>
            <button onClick={() => dispatching({type: 'reset'})}>Reset</button>
        </div>
       )

    }


export default CouterTwo