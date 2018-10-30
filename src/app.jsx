import React, {Component} from 'react';
import Clock from "./clock";
import {Form, FormControl, Button, Container} from 'react-bootstrap';
import './app.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: "December 25, 2019",
      newDeadline: ""
    }
  }

  changeDeadline(){
    this.setState({deadline: this.state.newDeadline});
  }

  render(){
    return ( //es importante poner el return para regresar el componente
      <div className="app">
        <div className="app-title">
           Countdown to {this.state.deadline}
        </div>
        <div>
          <Clock deadline={this.state.deadline} />
        </div>
        <Form inline>
          <FormControl className="deadline-input" placeholder="new date" onChange={event => this.setState({newDeadline:event.target.value})} />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
