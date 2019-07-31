import React, { Component } from 'react';
import "../dashboard/dashboard.css"
import CurrentTaskCard from "../dashboard/CurrentTaskCard"



export default class CurrentTaskList extends Component {
    render () {
        return (
            <React.Fragment>
            <section className="assignTask">
            {
            this.props.assignTask.map(task =>
                 <CurrentTaskCard key={task.id} task={task} {...this.props} />
                 )
            }
            </section>
            </React.Fragment>
        )
    }
}