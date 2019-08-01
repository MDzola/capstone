import React, { Component } from "react"
import APIManager from "../../module/APIManager"


export default class CurrentTaskEdit extends Component {

    state = {

      taskId: "",
      assignedUser: "",
      isCompleted: "",
      location: "",
      priority: ""
    }


    componentDidMount() {
        APIManager.getExpand("assignTask", parseInt(this.props.match.params.assignTaskId), "task", "user", "location", "priority")
        .then(task => {
            console.log(task)
          this.setState({
            taskId: task.task.id,
            assignedUser: task.user.id,
            location: task.location.id,
            priority: task.priority.id,
            isCompleted: task.isCompleted
          });
        });
      }




   handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
   }

    updateTask = evt => {
      evt.preventDefault()

        const assignTask = {
          id: this.props.match.params.assignTaskId,
          taskId: this.state.taskId,
          priorityId: parseInt(this.state.priority),
          locationId: parseInt(this.state.location),
          userId: parseInt(this.state.assignedUser),
          isCompleted: this.state.isCompleted
        };

    this.props.editTask(assignTask)
    .then(() => this.props.history.push("/dashboard"))
    }





    render() {
      return (
        <React.Fragment>
              <form className="taskForm">

               <div className="form-group">
              <label htmlFor="assignPriority">Assign a Priority Level</label>
              <select
                name="assignPriority"
                id="priority"
                onChange={this.handleFieldChange}
                value = {this.state.priority}
              >
                <option value="">Select a Priority Level</option>
                {this.props.priorities.map(e => (
                  <option key={e.id} id={e.id} value={e.id}>
                    {e.level}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="assignEmployee">Assign an Employee for Task</label>
              <select
                name="assignEmployee"
                id="assignedUser"
                onChange={this.handleFieldChange}
                value = {this.state.assignedUser}
              >
                <option value="">Select an Employee</option>
                {this.props.users.map(e => (
                  <option key={e.id} id={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
            <label htmlFor="location">Assign to a Location</label>
            <select
              name="location"
              id="location"
              onChange={this.handleFieldChange}
              value= {this.state.location}
            >
              <option value="">Select a Location</option>
              {this.props.locations.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>

            <button
              type="submit"
              onClick={this.updateTask}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}