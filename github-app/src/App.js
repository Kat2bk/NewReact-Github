import React from 'react';
import './App.css';
import axios from "axios";
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      username: "Kat2bk"
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(response => {
      this.setState({ user: response.data})
    })
    .catch(error => {
      console.log("Unable to grab data", error)
    })
  }

  componentDidUpdate(prevProps, prevState) {
   if(prevState.username !== this.state.username) { 
   axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(response => {
      this.setState({ user: response.data})
    })
    .catch(error => {
      console.log("Unable to grab data", error)
    })
  }
}

  handleChangeUser = (user) => {
    this.setState({username: user})
  }


  render() {
    return (
      <div className="App-container">
      <UserCard userData={this.state.user} handleChangeUser={this.handleChangeUser}/>
      </div>
    )
  }
}

export default App;
