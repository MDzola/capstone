import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../dashboard/dashboard.css"

export default class CurrentTaskCard extends Component {
    render() {
        console.log(this.props.task)
        return (
                <div key={this.props.task.id} className="card card--assignTask">
                    <div className="card-body">
                        <div className="card-title">
                            <h5>{this.props.task.task.taskName}</h5>
                            <Link className="nav-link" to={`/assignTask/${this.props.task.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteAssignTask(this.props.assignTask.id)}
                            className="card-link">Delete</a>
                        </div>
                         <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push(`/assignTask/${this.props.assignTask.id}/edit`);
                        }}
                        >
                        Edit
                        </button>
                    </div>
                </div>

     )
   }
}