import React, { Component } from 'react';
import "../dashboard/dashboard.css"
import CurrentTaskCard from "../dashboard/CurrentTaskCard"




export default class CompletedTaskList extends Component {
    render () {
        return (
            <React.Fragment>
                <h4 className="card-title">
                            <img src={ "../image/carousel-img-3.jpg" } className="icon--header" alt="" />
                        </h4>
            <section className="assignTask">
                <h2>Completed Tasks:</h2>
            {

                this.props.assignTask
                .filter(task => task.isCompleted === true)
                .map(task =>
                 <CurrentTaskCard key={task.id} task={task} {...this.props} />
                 )
            }
            </section>
            </React.Fragment>
        )
    }
}