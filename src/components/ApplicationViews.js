import { Route} from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import APIManager from "../module/APIManager";
import CreateTask from "./createTask/CreateTask"
import AssignTask from "./assignTask/AssignTask"
import Login from "./login/Login"
import Registration from "./login/Registration"
import CurrentTaskList from "./dashboard/CurrentTaskList"
import AssignTaskDetail from "./assignTask/AssignTaskDetail"
class ApplicationViews extends Component {

    state = {
        users: [],
        tasks: [],
        assignTask: [],
        taskTool: [],
        chemTask: [],
        chemicals: [],
        tools: [],
        taskTools: [],
        taskChemicals: [],
        priority: [],
        locations: [],

    }



    componentDidMount() {
        const newState = {}

        APIManager.getAll("users")
        .then(users => newState.users = users)
        APIManager.getAll("locations")
        .then(locations => newState.locations = locations)
        APIManager.getAll("priority")
        .then(priority => newState.priority = priority)
        APIManager.getAll("tasks")
        .then(tasks => newState.tasks = tasks)
        APIManager.getAll("assignTask")
        .then(assignTask => newState.assignTask = assignTask)
        APIManager.getAll("tools")
        .then(tools => newState.tools = tools)
        APIManager.getAll("chemicals")
        .then(chemicals => newState.chemicals = chemicals)
        APIManager.getAllExpand("taskChemicals", "chemical")
        .then(taskChemicals => newState.taskChemicals = taskChemicals)
        APIManager.getAllExpand("taskTools", "tool")
        .then(taskTools => newState.taskTools = taskTools)
        APIManager.getAllExpandTask("assignTask", "task", "user")
        .then(assignTask => newState.assignTask = assignTask)
        .then (() => this.setState(newState))
    }




    createNewTask = (newTask) => {
      return APIManager.put(newTask, "tasks")
      .then(() => APIManager.getAll("tasks"))
      .then(tasks => {
        this.setState({
          tasks: tasks
        })
      })
    }



    assignTask = (assignTask) => {
      return APIManager.post(assignTask, "assignTask")
      .then(() => APIManager.getAllExpandTask("assignTask", "task", "user"))
      .then(assignTask => {
        this.setState({
          assignTask: assignTask
        })
      })
    }




    addTool = tool => {
      return APIManager.post(tool, "taskTools")
        .then(() => APIManager.getAllExpand("taskTools", "tool"))
        .then(taskTools =>
          this.setState({
            taskTools: taskTools
          })
        );
    };




    addChemical = chemical => {
      return APIManager.post(chemical, "taskChemicals")
        .then(() => APIManager.getAllExpand("taskChemicals", "chemical"))
        .then(taskChemicals =>
          this.setState({
            taskChemicals: taskChemicals
          })
        );
    };




    addUser = user => {
      return APIManager.post(user, "users")
        .then(() => APIManager.getAll("users"))
        .then(users =>
          this.setState({
            users: users
          })
        );
    };


    deleteTaskChemical = id => APIManager.delete("taskChemicals", id)
    .then(() => APIManager.getAllExpand("taskChemicals", "chemical"))
    .then(taskChemicals => {
        this.setState({ taskChemicals: taskChemicals })
    })

    deleteTaskTool = id => APIManager.delete("taskTools", id)
    .then(() => APIManager.getAllExpand("taskTools", "tool"))
    .then(taskTools => {
        this.setState({ taskTools: taskTools })
    })

    render() {
      return (
        <React.Fragment>
          <Route exact path="/" render={props => {
            // return <Login {...props} />;
          }}
        />

        <Route exact path="/dashboard" render={props => {
                    return <CurrentTaskList assignTask={this.state.assignTask} {...props} />;
                  }}
                />


          <Route exact path="/assignTask" render={props => {
                       return <AssignTask {...props} assignTask={this.assignTask} users={this.state.users} priority={this.state.priority} locations={this.state.locations} tasks={this.state.tasks}/>
                  }}
                  />

          <Route exact path="/tasks" render={(props) => {
                      return <CreateTask {...props} createNewTask={this.createNewTask} users={this.state.users} priority={this.state.priority} locations={this.state.locations} tools={this.state.tools} taskTools={this.state.taskTools} addTool={this.addTool} addChemical={this.addChemical} chemicals={this.state.chemicals} taskChemicals={this.state.taskChemicals} deleteTaskChemical={this.deleteTaskChemical} deleteTaskTool={this.deleteTaskTool}/>
                  }}
                  />

          <Route
            exact path="/completed" render={props => {
            //   return  <TaskForm {...props} />

            }}
            />

          <Route exact path="/" render={props => {
               return <Login {...props} users={this.state.users} />

            }}
          />

          <Route exact path="/register" render={props => {
            return <Registration {...props} addUser={this.addUser} users={this.state.users} />;
          }}
        />

          <Route exact path="/assignTask/:assignTaskId(\d+)" render={(props) => {
                    let task = this.state.assignTask.find(task =>
                        task.id === parseInt(props.match.params.taskId)
                    )
                    if (!task) {
                        task = {id:404, name:"404", breed:"Dog not found"}
                    }
                    return <AssignTaskDetail task={ task } />
                }} />
        </React.Fragment>
      );
    }
  }

  export default withRouter(ApplicationViews);
