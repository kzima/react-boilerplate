import React, { Component } from 'react';

export default class extends Component {
  constructor(){
    super();

    this.state = {
      value: "xd"
    }
  }

  changed = event => {
    this.setState({
      value: event.target.valueAsNumber
    });
  }

  render() {
    return <div>
      Page       <input type="number" value={this.state.value} onChange={this.changed} />
    </div>   
  }
}



