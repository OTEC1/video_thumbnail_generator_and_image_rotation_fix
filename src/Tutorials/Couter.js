import React, { Component } from 'react'

class Couter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         first:0
      }
    }


increment(){
    
    // this.setState({
    //     first: this.state.first +1
    // }, () => {
    //     console.log(this.state.first)
    // })
   
    this.setState(prev => ({
        first: prev.first + 1
     }), () => console.log("Ok"))

}

incrementFive(){
    for(let i=0; i < 5; i++)
        this.increment();
}

  render() {
    return (
      <div>
          <h5>{this.state.first}</h5>
          <button onClick={(e) => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Couter