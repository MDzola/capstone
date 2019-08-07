import React, { Component } from "react"
import { Link } from "react-router-dom"
import {withRouter} from "react-router"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Create Task</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/assigntask">Assign Task</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/completed">Completed Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myTools">My Tools</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myChemicals">My Chemicals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/myTasks">Pre-made Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cardflip">card flip</Link>
                    </li>
                </ul>
                <Link className="btn btn-primary btn-sm" onClick={() => sessionStorage.clear()} to="/">Logout</Link>
            </nav>
        )
    }
}

export default  withRouter(NavBar)
