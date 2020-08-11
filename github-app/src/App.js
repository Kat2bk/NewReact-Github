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
      console.log("This is the data", response.data)
      this.setState({ user: response.data})
    })
    .catch(error => {
      console.log("Unable to grab data", error)
    })
  }


  render() {
    return (
      <div className="App-container">
      <h1>GitHub Users</h1>
      <h2>Let's Git Crazy!</h2>
      <UserCard />
      </div>
    )
  }
}

export default App;
