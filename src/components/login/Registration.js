import React, { Component } from "react";
import APIManager from "../../module/APIManager";

export default class Registration extends Component {
    state = {
        name: "",
        email: "",
        password: ""
    };

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleRegister = event => {
        event.preventDefault()
        APIManager.getAll("users").then((users) => {
            let emailCheck = users.find(user => user.email.toLowerCase() === this.state.email.toLowerCase())
            if(emailCheck){
                alert("This email already exists! Please go back to login page.")
            } else if(this.state.name === "" || this.state.email === "" || this.state.password === ""){
                alert("Please fill out all fields to Register a new account!")
            } else {
            let newUser = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            };
            this.props.addUser(newUser)
            .then(() => APIManager.getAll("users").then(users => users.find(user => user.password === this.state.password))
            .then(userLoggedIn =>
                sessionStorage.setItem("userId", userLoggedIn.id))
                .then(() =>
                this.props.history.push("/dashboard")))
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Sign Up</h1>
                <label htmlFor="inputName">
                    Name:&nbsp;
                </label>
                <input onChange={this.handleFieldChange} type="name"
                       id="name"
                       placeholder="Name"
                       required="" autoFocus="" />
                       <br></br>
                <label htmlFor="inputEmail">
                    Email address:&nbsp;
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" />
                        <br></br>
                <label htmlFor="inputPassword">
                    Password:&nbsp;
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder="Password"
                       required="" />
                       <br></br>
                <button type="submit"
                        className="btn btn-info btn-sm login-button">
                    Register
                </button>
                <br></br>
                <button type="button"
                        className="btn btn-link"
                        onClick={() => this.props.history.push("/")}>
                    Back to Login Page
                </button>
            </form>
        )
    }
}