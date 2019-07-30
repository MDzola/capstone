import { Route} from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import APIManager from "../module/APIManager";
import CreateTask from "./createTask/CreateTask"
import AssignTask from "./assignTask/AssignTask"
import Login from "./login/Login"
import Registration from "./login/Registration"

class ApplicationViews extends Component {

    state = {
        users: [],
        tasks: [],
        toolTask: [],
        chemTask: [],
        chemicals: [],
        tools: [],
        priority: [],
        locations: []

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
        .then (() => this.setState(newState))
    }




    createNewTask = (newTask) => {
      return APIManager.post(newTask, "tasks")
      .then(() => APIManager.getAll("tasks"))
      .then(tasks => {
        this.setState({
          tasks: tasks
        })
      })
    }

    addUser = user => {
      return APIManager.post(user, "users")
        .then(() => APIManager.getAll("users"))
        .then(users =>
          this.setState({
            users: users
          })
        );
    };


    render() {
      return (
        <React.Fragment>
          <Route exact path="/" render={props => {
            // return <Login {...props} />;
          }}
        />

          <Route path="/assigntask" render={props => {
                       return <AssignTask {...props} createNewTask={this.createNewTask} users={this.state.users} priority={this.state.priority} locations={this.state.locations} tasks={this.state.tasks}/>
                  }}
                  />

          <Route exact path="/tasks" render={(props) => {
                      return <CreateTask {...props} createNewTask={this.createNewTask} users={this.state.users} priority={this.state.priority} locations={this.state.locations} />
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
        </React.Fragment>
      );
    }
  }

  export default withRouter(ApplicationViews);
