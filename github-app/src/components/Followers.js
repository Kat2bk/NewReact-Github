import React from "react";

const Followers = ({followerData}) => {
    return (
        <div className="followers-container">
        {followerData.slice(0, 10).map(follower => (
            <div className="followerbox" key={follower.id}>
            <img width="20%" src={follower.avatar_url} alt="follower"/>
            </div>
        ))}
        </div>
    )
}

export default Followers