import React from "react";

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: []
        }
    }

    render() {
        const {userData} = this.props;
        console.log("props from usercard class", userData)
        return (
            <div>
            </div>
        )
    }
}

export default UserCard;