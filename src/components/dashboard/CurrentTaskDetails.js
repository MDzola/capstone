import React, { Component } from "react"
import "../assignTask/assigntask.css"
import APIManager from "../../module/APIManager"

export default class CurrentTaskDetails extends Component {

    state = {
        id: "",
        taskName: "",
        userAssigned: "",
        location: "",
        priority: ""
      }







    componentDidMount() {
        APIManager.getExpand("assignTask", parseInt(this.props.match.params.assignTaskId), "task", "user", "location", "priority")
        .then(task => {
            console.log(task)
          this.setState({
            id: task.id,
            taskName: task.task.taskName,
            userAssigned: task.user.name,
            location: task.location.name,
            priority: task.priority.level
          });
        });
      }



    render() {

        return (
                <div key={this.props.match.params.assignTaskId} className="card card--assignTask">
                    <div className="card-body">

                        <div className="card-title">
                            <h3>{this.state.taskName}</h3>
                        </div>

                        <div className="card-title">
                            <h5>Employee Assigned:{this.state.userAssigned}</h5>
                        </div>
                        <div className="card-title">
                            <h5>Location:{this.state.location}</h5>
                        </div>
                        <div className="card-title">
                            <h5>Priority:{this.state.priority}</h5>
                        </div>


                        <a href="#"
                            onClick={() => this.props.deleteCurrentTask(this.state.id)}
                            className="card-link">Delete this Task</a>

                        <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push(`/assignTask/${this.props.match.params.assignTaskId}/edit`);
                        }}
                        >
                        Edit
                        </button>
                    </div>
                </div>

     )
   }
}