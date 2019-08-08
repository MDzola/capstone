import { Route} from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import APIManager from "../module/APIManager";
import CreateTask from "./createTask/CreateTask"
import AssignTask from "./assignTask/AssignTask"
import Login from "./login/Login"
import Registration from "./login/Registration"
import CurrentTaskList from "./dashboard/CurrentTaskList"
import CurrentTaskDetails from "./dashboard/CurrentTaskDetails"
import CurrentTaskEdit from "./dashboard/CurrentTaskEdit"
import ToolList from "./tool/ToolList"
import ToolDetails from "./tool/ToolDetails"
import ToolEdit from "./tool/ToolEdit"
import ChemicalDetails from "./chemical/ChemicalDetails"
import ChemicalList from "./chemical/ChemicalList"
import ChemicalEdit from "./chemical/ChemicalEdit"
import TaskList from "./task/TaskList"
import TaskDetails from "./task/TaskDetails"
import CompletedTaskList from "./completedTask/CompletedTaskList"


class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("userId") !== null;

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
        priorities: [],
        locations: [],

    }



    componentDidMount() {
        const newState = {}

        APIManager.getAll("users")
        .then(users => newState.users = users)
        APIManager.getAll("locations")
        .then(locations => newState.locations = locations)
        APIManager.getAll("priorities")
        .then(priorities => newState.priorities = priorities)
        APIManager.getAll("tasks")
        .then(tasks => newState.tasks = tasks)
        APIManager.getAll("tools")
        .then(tools => newState.tools = tools)
        APIManager.getAll("chemicals")
        .then(chemicals => newState.chemicals = chemicals)
        APIManager.getAllExpand("taskChemicals", "chemical")
        .then(taskChemicals => newState.taskChemicals = taskChemicals)
        APIManager.getAllExpand("taskTools", "tool")
        .then(taskTools => newState.taskTools = taskTools)
        APIManager.getAllExpandTask("assignTask", "task", "user", "location", "priority")
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
      .then(() => APIManager.getAllExpandTask("assignTask", "task", "user", "location", "priority"))
      .then(assignTask => {
        this.setState({
          assignTask: assignTask
        })
      })
    }


    editTask = (assignTask) => {
      return APIManager.put(assignTask, "assignTask")
      .then(() => APIManager.getAllExpandTask("assignTask", "task", "user", "location", "priority"))
      .then(assignTask => {
        this.setState({
          assignTask: assignTask
        })
      })
    }

    completeTask = (completedTask) => {
      return APIManager.patch(completedTask, "assignTask")
      .then(() => APIManager.getAllExpandTask("assignTask", "task", "user", "location", "priority"))
      .then(assignTask => {
        this.setState({
          assignTask: assignTask
        })
      })
    }

    editTool = (updateTool) => {
      return APIManager.put(updateTool, "tools")
      .then(() => APIManager.getAll("tools"))
      .then(tools => {
        this.setState({
          tools: tools
        })
      })
    }

    editChemical = (updateChemical) => {
      return APIManager.put(updateChemical, "chemicals")
      .then(() => APIManager.getAll("chemicals"))
      .then(chemicals => {
        this.setState({
          chemicals: chemicals
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

    deleteCurrentTask = id => APIManager.delete("assignTask", id)
    .then(() => APIManager.getAllExpandTask("assignTask", "task", "user", "location", "priority"))
    .then(assignTask => {
      this.setState({ assignTask: assignTask })
      this.props.history.push("/dashboard")
    })



    render() {
      return (
        <React.Fragment>
          <Route exact path="/" render={props => {
            // return <Login {...props} />;
          }}
        />

        <Route exact path="/dashboard" render={props => {
                    return <CurrentTaskList assignTask={this.state.assignTask} completeTask={this.completeTask} {...props} />;
                  }}
                />

          <Route exact path="/assignTask/:assignTaskId(\d+)" render={(props) => {
            return <CurrentTaskDetails assignTask={this.state.assignTask} deleteCurrentTask={this.deleteCurrentTask} {...props} />
          }}
          />

          <Route path="/assignTask/:assignTaskId(\d+)/edit" render={(props) => {
            return <CurrentTaskEdit assignTask={this.state.assignTask} editTask={this.editTask} deleteCurrentTask={this.deleteCurrentTask} priorities={this.state.priorities} users={this.state.users} locations={this.state.locations} {...props} />
          }}
          />

          <Route exact path="/assignTask" render={props => {
                       return <AssignTask {...props} assignTask={this.assignTask} users={this.state.users} priorities={this.state.priorities} locations={this.state.locations} tasks={this.state.tasks}/>
                  }}
                  />

          <Route exact path="/tasks" render={(props) => {
                      return <CreateTask {...props} createNewTask={this.createNewTask} users={this.state.users} tools={this.state.tools} taskTools={this.state.taskTools} addTool={this.addTool} addChemical={this.addChemical} chemicals={this.state.chemicals} taskChemicals={this.state.taskChemicals} deleteTaskChemical={this.deleteTaskChemical} deleteTaskTool={this.deleteTaskTool}/>
                  }}
                  />


        <Route exact path="/mytasks" render={(props) => {
                       return <TaskList {...props} tasks={this.state.tasks}/>
                   }}
                  />

        <Route path="/mytasks/:taskId(\d+)" render={(props) => {
                       return <TaskDetails {...props} tasks={this.state.tasks} taskTools={this.state.taskTools} taskChemicals={this.state.taskChemicals}/>
                        }}
                        />

          <Route exact path="/myTools" render={props => {
              return <ToolList {...props} tools={this.state.tools} />

            }}
          />

          <Route exact path="/myTools/:toolId(\d+)" render={props => {
                return <ToolDetails {...props} tools={this.state.tools} taskTools={this.state.taskTools}/>

              }}
            />

          <Route path="/myTools/:toolId(\d+)/edit" render={props => {
                return <ToolEdit {...props} tools={this.state.tools} editTool={this.editTool}/>

              }}
            />

          <Route exact path="/myChemicals" render={props => {
              return <ChemicalList {...props} chemicals={this.state.chemicals} />

            }}
          />

            <Route exact path="/myChemicals/:chemicalId(\d+)" render={props => {
              return <ChemicalDetails {...props} chemicals={this.state.chemicals} />

            }}
          />

            <Route path="/myChemicals/:chemicalId(\d+)/edit" render={props => {
              return <ChemicalEdit {...props} chemicals={this.state.chemicals} editChemical={this.editChemical} />

            }}
          />

          <Route
            exact path="/completed" render={props => {
              return  <CompletedTaskList {...props} assignTask={this.state.assignTask} />

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

        </React.Fragment>
      );
    }
  }

  export default withRouter(ApplicationViews);
