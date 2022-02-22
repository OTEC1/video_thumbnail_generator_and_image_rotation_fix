import React, { Component } from 'react'

class ClassCounte extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }



    componentDidUpdate(preState,preProps){   

        if(preProps.count !== this.state.count){
          document.title  = `Clicked ${this.state.count} Times`;
          console.log("Updating component")
        }
    }

  render() {
    return (
      <div>
          <input type="text"
          value={this.state.name}
          onChange={(e) => this.setState({name: e.target.value})}/>
            <br/>
          <button onClick={() => this.setState({ count : this.state.count +1 }) }> ClassCounte</button>
      </div>
    )
  }
}

export default ClassCounte