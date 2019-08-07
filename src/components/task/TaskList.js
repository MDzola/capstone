import React, { Component } from 'react';
import "../task/task.css"
import TaskCard from "./TaskCard"


export default class CurrentTaskList extends Component {
    render () {
        return (
            <React.Fragment>
            <section className="assignTask">
            {
            this.props.tasks.map(task =>
                 <TaskCard key={task.id} task={task} {...this.props} />
                 )
            }
            </section>
            </React.Fragment>
        )
    }
}