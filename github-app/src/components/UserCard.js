import React from "react";
import axios from "axios";
import Followers from "./Followers";
import Form from "./Form";
import "../App.css";

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: [],
            bool: false
        }
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/Kat2bk/followers")
        .then(response => {
            this.setState({ followers: response.data})
        })
        .catch(error => {
            console.log("unable to access data", error)
        })
    }

    render() {
        return (
            <div className="usercard-container">
            <div className="App-text">
            <h1>Github Mania</h1>
            <h2>Let's Git Crazy</h2>
            <Form />
            </div>
            <div className="usercard">
            <img className="card-picture" width="30%" src={this.props.userData.avatar_url}/>
            <div className="info">
            <h2>{this.props.userData.name}</h2>
            <h3>{this.props.userData.bio}</h3>
           <a href={this.props.userData.html_url}><button className="btn-user">Github</button></a>
            </div>
            </div>
            <button className="btn-follower" onClick={() =>  this.setState({bool: !this.state.bool})}>View Followers</button>
            <div className="usercard-followers">
            <Followers followerData={this.state.followers} boolean={this.state.bool}/>
            </div>
            </div>
        )
    }
}

export default UserCard;