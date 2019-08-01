import React, { Component } from "react"



export default class AssignTask extends Component {

    state = {

      taskNameId: "",
      taskId: "",
      taskDetails: "",
      location: "",
      priorityId: "",
      locationId: ""
    }




    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        if (evt.target.id === "taskId") {const matchedTask = this.props.tasks.find(task =>
            task.id === parseInt(evt.target.value)
            )
            console.log(matchedTask)
            stateToChange.taskDetails = matchedTask.details
            stateToChange.taskId = matchedTask.id
        }
        this.setState(stateToChange)
    }

    newTask = evt => {
      evt.preventDefault()

       {
        const assignTask = {
          name: this.state.taskName,
          taskId: this.state.taskId,
          priorityId: parseInt(this.state.priorityId),
          userId: parseInt(this.state.userId),
          isCompleted: false,
          locationId: parseInt(this.state.locationId)
        };

    this.props.assignTask(assignTask)
    .then(() => this.props.history.push("/dashboard"))
    }
    console.log(this.props.assignTask)
  }




    render() {
      return (
        <React.Fragment>
            <form className="taskForm">
          <div className="form-group">
              <label htmlFor="pickATask">Pick a Task</label>
              <select
                name="pickATask"
                id="taskId"
                onChange={this.handleFieldChange}
                value = {this.state.taskId}
              >
                <option value="">Select a Task</option>
                {this.props.tasks.map(task => (
                  <option key={task.id} id={task.id} value={task.id}>
                    {task.taskName}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="taskName">Task Details</label>
              <input
                type="textarea"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="taskDetails"
                value = {this.state.taskDetails}
              />
            </div>
               <div className="form-group">
              <label htmlFor="assignPriority">Assign a Priority Level</label>
              <select
                name="assignPriority"
                id="priorityId"
                onChange={this.handleFieldChange}
                value = {this.state.priorityId}
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
            <label htmlFor="location">Assign to a Location</label>
            <select
              defaultValue=""
              name="location"
              id="locationId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select a Location</option>
              {this.props.locations.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
            <div className="form-group">
              <label htmlFor="assignEmployee">Assign an Employee for Task</label>
              <select
                name="assignEmployee"
                id="userId"
                onChange={this.handleFieldChange}
                value = {this.state.userId}
              >
                <option value="">Select an Employee</option>
                {this.props.users.map(e => (
                  <option key={e.id} id={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              onClick={this.newTask}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}