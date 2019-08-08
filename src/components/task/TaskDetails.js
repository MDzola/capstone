import React, { Component } from "react"
import "../assignTask/assigntask.css"
import APIManager from "../../module/APIManager"
import ToolCard from "../tool/ToolCard"
import ChemicalCard from "../chemical/ChemicalCard"
import "./task.css"

export default class TaskDetails extends Component {

    state = {
        taskName: "",
        details: "",
        taskCreator: ""
      }







    componentDidMount() {
        APIManager.get("tasks", parseInt(this.props.match.params.taskId))
        .then(task => {
            console.log(task)
          this.setState({
            taskName: task.taskName,
            details: task.details,
            taskCreator: parseInt(task.taskCreator)
          });
        });
      }



    render() {

        return (
            <React.Fragment>
                <div key={this.props.match.params.taskId} className="card card--assignTask">
                    <div className="card-body">

                        <div className="card-title">
                            <h3>{this.state.taskName}</h3>
                        </div>

                        <div className="card-title">
                            <h5>Details:  {this.state.details}</h5>
                        </div>
                    </div>
                </div>
                <div><h2>
                    Tools For Task:
                    </h2></div>
                        <div>
                          {

                            this.props.taskTools
                            .filter(taskTool => parseInt(taskTool.taskId) === parseInt(this.props.match.params.taskId))
                            .map(taskTool =>
                                <ToolCard key={taskTool.id} taskTool={taskTool} {...this.props} />
                                )
                            }

                         </div>
                         <div>
                         <h2>
                   Chemicals For Task:
                    </h2></div>
                        <div>
                          {

                            this.props.taskChemicals
                            .filter(taskChemical => parseInt(taskChemical.taskId) === parseInt(this.props.match.params.taskId))
                            .map(taskChemical =>
                                <ChemicalCard key={taskChemical.id} taskChemical={taskChemical} {...this.props} />
                                )
                            }

                         </div>
                </React.Fragment>
     )
   }
}