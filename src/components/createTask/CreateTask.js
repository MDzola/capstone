import React, { Component } from "react"



export default class CreateTask extends Component {

    state = {

      taskName: "",
      location: "",
      priority: "",
      taskDetails: ""
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
          taskName: this.state.taskName,
          taskCreator: parseInt(sessionStorage.getItem("userId")),
          priority: this.state.priority,
          locationId: parseInt(this.state.locationId),
          detail: this.state.taskDetails
        };

    this.props.createNewTask(newTask)
    .then(() => this.props.history.push("/dashboard"))
    }
  }

    taskChemicals = evt => {
        evt.preventDefault()

        const taskChemical = {
            chemicalId: "",
            taskId: ""
        }

    }

    taskTools = evt => {
        evt.preventDefault()

        const taskTools = {
            toolId: "",
            taskId: ""
        }

    }



    render() {
      return (
        <React.Fragment>
          <form className="taskForm">
            <div className="form-group">
              <label htmlFor="taskName">Task Name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="taskName"
                value = {this.state.taskName}
              />
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
                {this.props.priority.map(e => (
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