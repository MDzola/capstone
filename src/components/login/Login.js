import React, { Component } from "react"
import APIManager from "../../module/APIManager";


export default class Login extends Component {


    state = {
        email: "",
        password: ""
    }


    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    handleLogin = (evt) => {
        evt.preventDefault()
        APIManager.getAll("users").then(users => {
            const userLoggedIn = users.find( thisUser =>
                thisUser.email.toLowerCase() === this.state.email.toLowerCase() && thisUser.password.toLowerCase() === this.state.password.toLowerCase()
            );
            if (userLoggedIn) {
                sessionStorage.setItem("userId", userLoggedIn.id);
                this.props.history.push("/dashboard");
            }
            else {
                window.alert("Login Information does not match, please try again or Register a new Account")
            }
        }
    )}

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
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
                       required="" />&nbsp;
                <button type="submit"
                        className="btn btn-info btn-sm login-button">
                    Sign in
                </button>
                <br></br>
                <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => this.props.history.push("/register")}
                        >
                        Register New Account
                        </button>
            </form>
        )
    }
}