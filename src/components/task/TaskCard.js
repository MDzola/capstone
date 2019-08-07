import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./task.css"

export default class TaskCard extends Component {
    render() {
        return (
                <div key={this.props.task.id} className="card card--employee">
                    <div className="card-body">
                        <div className="card-title">

                            <Link className="nav-link" to={`/mytasks/${this.props.task.id}`}> <h5>{this.props.task.taskName}</h5></Link>
                        {/* <a href="#"
                            onClick={() => this.props.deleteTaskTool(this.props.taskTool.id)}
                            className="card-link">Delete</a> */}
                        </div>
                    </div>
                </div>

     )
   }
}