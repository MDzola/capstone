import React, { Component } from "react"
import APIManager from "../../module/APIManager"
import ToolCard from"../tool/ToolCard"
import ChemicalCard from "../chemical/ChemicalCard"
import "./createtask.css"


export default class CreateTask extends Component {

    state = {
      taskId: "",
      taskName: "",
      taskDetails: "",
      toolId: ""
    }

    createNewTaskId = (newTaskId) => {
        APIManager.post(newTaskId, "tasks")
        .then(taskId => {
          this.setState({
            taskId: taskId.id
          })
        })
      }



    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }



    newTaskStepOne = evt => {
        if (this.state.taskId === "") {
        evt.preventDefault()

          const newTaskId = {};

      this.createNewTaskId(newTaskId)

        }
        else {
            alert("A new Task has already been created, please move on to step 2")
        }

    }


    newTask = evt => {
      evt.preventDefault()

      if (this.state.taskId === "" || this.state.taskName === null) {
        window.alert("Please Fill out all of the Form");
      }

      else{
       {
        const newTask = {
          id: this.state.taskId,
          taskName: this.state.taskName,
          taskCreator: parseInt(sessionStorage.getItem("userId")),
          details: this.state.taskDetails
        };

    this.props.createNewTask(newTask)
    .then(() => this.props.history.push("/dashboard"))
    }
        }
  }


    addChemical = evt => {
        evt.preventDefault()

        if(this.state.taskId !== ""){
        const taskChemicals = {
            chemicalId: parseInt(this.state.chemicalId),
            taskId: this.state.taskId
        }


        this.props.addChemical(taskChemicals, "taskChemicals")

    }
        else {
            alert("Please create a Task first (Step One)")
        }

    }

   addTool = evt => {
        evt.preventDefault()

        if(this.state.taskId !== ""){
        const taskTools = {
            toolId: parseInt(this.state.toolId),
            taskId: this.state.taskId
        }

          this.props.addTool(taskTools, "taskTools")
          console.log(this.props.taskTools)

    }

        else {
            alert("Please create a Task first (Step One)")
        }

      };





    render() {

      return (
        <React.Fragment>
            <div>
                <h3 className="Guide">Step One, click on Create Task</h3>
            </div>
            <button
              type="submit"
              onClick={this.newTaskStepOne}
              className="btn btn-primary btn-lg"
            >
              Create Task
            </button>
            <div className="Guide">
                <h3>Step Two, fill out Task Parameters</h3>
            </div>
          <form className="taskForm">
            <div className="form-group col">
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
            <div className="form-group col">
              <label htmlFor="taskName">Task Details</label>
              <input
                type="textarea"
                row={10}
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="taskDetails"
                value = {this.state.taskDetails}
              />
            </div>
          <div className="form-group">
            <label htmlFor="location">Pick Tool(s) for Job</label>
            <select
              defaultValue=""
              name="tool"
              id="toolId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select a Tool</option>
              {this.props.tools.map(tool => (
                <option key={tool.id} id={tool.id} value={tool.id}>
                  {tool.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="location">Pick Chemical(s) for Job</label>
            <select
              defaultValue=""
              name="chemical"
              id="chemicalId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select a Chemical</option>
              {this.props.chemicals.map(chemical => (
                <option key={chemical.id} id={chemical.id} value={chemical.id}>
                  {chemical.name}
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
            <button
              type="submit"
              onClick={this.addTool}
              className="btn btn-primary"
            >
              Add a Tool
            </button>
            <button
              type="submit"
              onClick={this.addChemical}
              className="btn btn-danger"
            >
              Add a Chemical
            </button>
          </form>
          <div className="toolCard">
                {
                    this.props.taskTools
                    .filter(tool => tool.taskId === this.state.taskId)
                    .map(taskTool => <ToolCard key={taskTool.id} taskTool={taskTool} deleteTaskTool={this.props.deleteTaskTool} />)
                }
          </div>
          <div className="ChemicalCard">
                {
                    this.props.taskChemicals
                    .filter(chemical => chemical.taskId === this.state.taskId)
                    .map(taskChemical => <ChemicalCard key={taskChemical.id} taskChemical={taskChemical} deleteTaskChemical={this.props.deleteTaskChemical} />)
                }
          </div>
        </React.Fragment>
      );
    }
}



