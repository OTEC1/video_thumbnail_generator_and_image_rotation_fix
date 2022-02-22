import React, { Component } from 'react'
import FRinput from './FRinput'

class FRparent extends Component {

    constructor(props) {
      super(props)

      this.state = {
          name: "name"
      }
      this.inputRef = React.createRef()
      
    }



    componentDidCatch(){
        console.log("componentDidCatch")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }


    componentDidUpdate(){
        console.log("componentDidUpdate")
    }


    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    static getDerivedStateFromProps (props, state){
        console.log("getDerivedStateFromProps")
    }
 
    clickhandler = () =>{
        this.inputRef.current.focus();
        this.setState({
            name: "Boy"
        })
        console.log(this.state.name)

    }
  render() {
    return (
      <div>
          <FRinput  ref={this.inputRef}/>
          <button onClick={this.clickhandler}> Focus input</button>
      </div>
    )
  }
}

export default FRparent