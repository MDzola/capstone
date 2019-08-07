import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../chemical/chemical.css"


export default class ChemicalCardList extends Component {
    render() {
        return (
                <div key={this.props.chemical.id} className="card chemical">
                    <div className="card-body">
                    <h4 className="card-title">
                            <img src={ this.props.chemical.img } className="icon--chemicalList" alt="" />
                        </h4>
                        <div className="card-title">
                              <Link className="nav-link" to={`/myChemicals/${this.props.chemical.id}`}> <h5>{this.props.chemical.name}</h5></Link>
                        </div>
                    </div>
                </div>

     )
   }
}