import React, {Component}  from 'react'


class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: "Test is not working",
        }
    }


    changemessage(){
        this.setState({
            message: "Test is working now"
        })
    }

    render(){
        return (
            <div>
            <h1> {this.state.message}</h1>
            <button onClick={(e) => this.changemessage()}>Subscribe</button>
            </div>
        )
    }

}



export default Message