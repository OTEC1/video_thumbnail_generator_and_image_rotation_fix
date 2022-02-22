import React, { Component } from 'react'
import Child from './Child';

export class ChildToParent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       parentName: "Parent"
    }


    this.showDialog = this.showDialog.bind(this);
  }


  showDialog(data){
      alert(`Hello ${this.state.parentName}` +data)
  }





  render() {
    return (
      <div>
          <Child  showDialog={this.showDialog} logged="Hello all" />
      </div>
    )
  }
}

export default ChildToParent