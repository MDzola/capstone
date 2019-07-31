import React, { Component } from "react"
// import { Link } from "react-router-dom"
import "../chemical/chemical.css"


export default class ChemicalCard extends Component {
    render() {
        return (
                <div key={this.props.taskChemical.id} className="card card--employee">
                    <div className="card-body">
                        <div className="card-title">
                            <h5>{this.props.taskChemical.chemical.name}</h5>
                            {/* <Link className="nav-link" to={`/tools/${this.props.tool.id}`}>Details</Link> */}
                        <a href="#"
                            onClick={() => this.props.deleteTaskChemical(this.props.taskChemical.id)}
                            className="card-link">Delete</a>
                        </div>
                    </div>
                </div>

     )
   }
}