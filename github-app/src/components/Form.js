import React from "react";
import "../App.css";

class Form extends React.Component {
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
        event.preventDefault();

    }

    render() {
        return (
            <div>
            <section className="search-text">
            <form>
            <input className="input-text" type="text" name="users" onChange={this.handleChange} />
            <button type="submit">Search</button>
            </form>
            </section>
            </div>
        )
    }
}

export default Form;