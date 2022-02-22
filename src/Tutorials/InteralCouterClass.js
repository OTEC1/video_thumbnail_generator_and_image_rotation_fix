import React, { Component } from 'react'

export class InteralCouterClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }



  componentDidMount(){
        console.log("Start")
        this.interval = setInterval(this.tick, 1000)
    }

componentWillUnmount(){
    console.log("Done")
    clearInterval(this.interval)
}


tick = () => {
    this.setState({
        count: this.state.count + 1
    })
}


  render() {
    return (
      <div><h2>{this.state.count}</h2></div>
    )
  }
}

export default InteralCouterClass