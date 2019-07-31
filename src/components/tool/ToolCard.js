import React, { Component } from "react"
// import { Link } from "react-router-dom"
import "../tool/tool.css"


export default class ToolCard extends Component {
    render() {
        return (
                <div key={this.props.taskTool.id} className="card card--employee">
                    <div className="card-body">
                        <div className="card-title">
                            <h5>{this.props.taskTool.tool.name}</h5>
                            {/* <Link className="nav-link" to={`/tools/${this.props.tool.id}`}>Details</Link> */}
                        <a href="#"
                            onClick={() => this.props.deleteTaskTool(this.props.taskTool.id)}
                            className="card-link">Delete</a>
                        </div>
                    </div>
                </div>

     )
   }
}