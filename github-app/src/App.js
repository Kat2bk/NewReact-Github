import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Kat2bk")
    .then(response => {
      console.log("This is the data", response)
    })
    .catch(error => {
      console.log("this is the error", error)
    })
  }


  render() {
    return (
      <div className="App-container">
      <h1>GitHub Users</h1>
      <h2>Let's Git Crazy!</h2>
      </div>
    )
  }
}

export default App;
