import React, { Component } from 'react';
import SendModel from './sendmodel';

var Highlight = require('react-highlight');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {text:"Enviar", codigo:"wasd"}
  }


  render() {
    return (
      <div>
        <h1>Django model generator</h1>
        <SendModel text={this.state.text} codigo={this.state.codigo} ponerCodigo={(codigo) => {this.setState({codigo: codigo})}}/>
        <Highlight className='python'>
          {this.state.codigo}
        </Highlight>
      </div>
    );
  }
}

export default App;
