import React, { Component } from 'react'
import { ipcRenderer } from 'electron'
import { Link } from 'react-router'

export default class HomePage extends Component {
    constructor() {
      super();
      this.state = {
          message: ""
      };
      ipcRenderer.on('ping', (event, message) => {
          this.setMessage(message);
      });
    }
    
   setMessage(message) {
       this.setState({message: message}); 
   } 

    render() {
        return(
            <div>
                <h1> Home Page</h1>
                <p>{this.state.message}</p>
                <ul>
                    <li> <Link to='/counter'> Counter Page </Link> </li>
                    <li> <Link to='/forex'> Forex Page </Link> </li>
                </ul>
            </div>
        )
    }
}
