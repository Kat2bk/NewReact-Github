import React from "react";
import "../App.css";

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        console.log("this is from the handleSubmit", this.state.username)
        event.preventDefault();
        this.props.handleChangeUser(this.state.username);
    }

    render() {
        return (
            <div>
            <section className="search-text">
            <form onSubmit={this.handleSubmit}>
            <input className="input-text" type="text" name="username" onChange={this.handleChange} placeholder="Enter Username"/>
            <button type="submit">Search</button>
            </form>
            </section>
            </div>
        )
    }
}

export default UserForm;