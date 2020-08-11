import React from "react";
import axios from "axios";
import {DiGithubFull} from "react-icons/di";

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/Kat2bk/followers")
        .then(response => {
            console.log("data from followers api", response)
        })
        .catch(error => {
            console.log("unable to access data", error)
        })
    }

    render() {
        return (
            <div className="usercard-container">
            <div className="usercard">
            <img className="card-picture" src={this.props.userData.avatar_url}/>
            <h2>{this.props.userData.name}</h2>
            <h3>{this.props.userData.bio}</h3>
            <a href={`click here: ${this.props.userData.html_url}`}><DiGithubFull /></a>
            </div>
            <div className="usercard-followers">
            {}
            </div>
            </div>
        )
    }
}

export default UserCard;