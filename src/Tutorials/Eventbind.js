import React, { Component } from 'react'

class Eventbind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    //   this.changeName  = this.changeName.bind(this);
    }


    // changeName(){
    //     this.setState({
    //         message : "How are you"
    //     })
    // }



    //Option two 
    changeName = () => {
        this.setState({
            message: "How are you"
        })
    }

  render() {
    return (
      <div>
          
          {/* Approach One
          <button onClick={this.changeName.bind(this)}>Click  me </button>  {this.state.message} */}

          <button onClick={this.changeName}>Click  me </button>  {this.state.message}
          
    </div>
    )
  }
}

export default Eventbind