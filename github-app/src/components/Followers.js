import React from "react";
import {DiGithubFull} from "react-icons/di";
import "../App.css";

const Followers = ({followerData}) => {
    return (
        <div className="followers-container">
        {followerData.slice(0, 12).map(follower => (
            <div className="followerbox" key={follower.id}>
            <img width="20%" src={follower.avatar_url} alt="follower"/>
            <p>{follower.login}</p>
            <a href={`click here: ${follower.html_url}`}><DiGithubFull /></a>
            </div>
        ))}
        </div>
    )
}

export default Followers