import React from "react";
import {DiGithubFull} from "react-icons/di";
import "../App.css";

const Followers = ({followerData, boolean}) => {
    return (
        <div className="followers-container">
        {boolean ? followerData.slice(0, 12).map(follower => (
            <div className="followerbox" key={follower.id}>
            <img width="20%" src={follower.avatar_url} alt="follower"/>
            <p>{follower.login}</p>
            <a href={follower.html_url}><DiGithubFull /></a>
            </div>
        )) : null}
        </div>
    )
}

export default Followers