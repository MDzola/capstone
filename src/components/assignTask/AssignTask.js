import React, { Component } from "react"



export default class AssignTask extends Component {

    state = {

      taskNameId: "",
      employeeId: "",
      priority: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    newTask = evt => {
      evt.preventDefault()

    //   if (this.state.animalId === "" || this.state.animalId === null) {
    //     window.alert("Please select an animal");
    //   }
       {
        const newTask = {
          name: this.state.taskName,
          priority: this.state.priority,
          userId: parseInt(this.state.userId),
        };

    this.props.createNewTask(newTask)
    .then(() => this.props.history.push("/dashboard"))
    }
  }




    render() {
      return (
        <React.Fragment>
            <form className="taskForm">
          <div className="form-group">
              <label htmlFor="assignPriority">Pick a Task</label>
              <select
                name="assignPriority"
                id="taskNameId"
                onChange={this.handleFieldChange}
                value = {this.state.taskNameId}
              >
                <option value="">Select a Task</option>
                {this.props.tasks.map(e => (
                  <option key={e.id} id={e.id} value={e.id}>
                    {e.taskName}
                  </option>
                ))}
              </select>
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
                {this.props.priority.map(e => (
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