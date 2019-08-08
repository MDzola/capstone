import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../dashboard/dashboard.css"
import "../../module/APIManager"


export default class CurrentTaskCard extends Component {
state= {
    isCompleted: ""
}

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = true
        this.setState(stateToChange)
        console.log(stateToChange)
    }

completeTask = evt => {
    evt.preventDefault()

    const updatedTask = {
        id: this.props.task.id,
        isCompleted: this.state.isCompleted
    }

    this.props.completeTask(updatedTask)
    .then(() => this.props.history.push("/dashboard"))
}


    render() {
        console.log(this.props.task)
        return (
                <div key={this.props.task.id} className="card card--assignTask">
                    <div className="card-body">
                        <div className="card-title">
                            <Link className="nav-link" to={`/assignTask/${this.props.task.id}`}><h5>{this.props.task.task.taskName}</h5></Link>
                        </div>
                        <div className="radio">
          <label>
            <input type="radio" id="isCompleted" value={this.props.task.isCompleted}  onChange={this.handleFieldChange} />
            Task Completed
          </label>
          <button
              type="submit"
              onClick={this.completeTask}
              className="btn btn-primary"
            >
             Task Completed
            </button>
        </div>

                    </div>
                </div>

     )
   }
}