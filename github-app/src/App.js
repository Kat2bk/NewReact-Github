import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Kat2bk")
    .then(response => {
      this.setState({ user: response.data})
    })
    .catch(error => {
      console.log("Unable to grab data", error)
    })
  }


  render() {
    return (
      <div className="App-container">
      <UserCard userData={this.state.user}/>
      </div>
    )
  }
}

export default App;
