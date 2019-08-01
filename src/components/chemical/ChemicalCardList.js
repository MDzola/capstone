import React, { Component } from "react"
// import { Link } from "react-router-dom"
import "../chemical/chemical.css"


export default class ChemicalCardList extends Component {
    render() {
        return (
                <div key={this.props.chemical.id} className="card card--employee">
                    <div className="card-body">
                        <div className="card-title">
                            <h5>{this.props.chemical.name}</h5>
                        </div>
                    </div>
                </div>

     )
   }
}