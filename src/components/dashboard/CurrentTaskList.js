import React, { Component } from 'react';
import "../dashboard/dashboard.css"
import CurrentTaskCard from "../dashboard/CurrentTaskCard"




export default class CurrentTaskList extends Component {
    render () {
        return (
            <React.Fragment>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100 .active" src={ "../image/carousel-img-3.jpg" } alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src={ "../image/warehouseimageUSE.jpg" } alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>
            <section className="assignTask">
                <h2>Assigned Tasks to be Completed:</h2>
            {

                this.props.assignTask
                .filter(task => task.isCompleted === false)
                .map(task =>
                 <CurrentTaskCard key={task.id} task={task} {...this.props} />
                 )
            }
            </section>
            </React.Fragment>
        )
    }
}

