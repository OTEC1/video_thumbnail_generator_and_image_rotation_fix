import React, { Component } from 'react'

class ClassProps extends Component {
  render() {
      const {name} = this.props;
    return (
      <div>ClassProps {name} </div>
    )
  }
}

export default ClassProps



