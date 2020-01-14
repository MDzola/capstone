import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../dashboard/dashboard.css"
import "../../module/APIManager"


export default class CompletedTaskCard extends Component {

    render() {
        console.log(this.props.task)
        return (
                <div key={this.props.task.id} className="card card--assignTask">
                    <div className="card-body">
                        <div className="card-title">
                            <Link className="nav-link" to={`/assignTask/${this.props.task.id}`}><h5>{this.props.task.task.taskName}</h5></Link>
                        </div>
        </div>

                    </div>

     )
   }
}