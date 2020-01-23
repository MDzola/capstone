import React, { Component } from "react"
import "../chemical/chemical.css"
import { Link } from "react-router-dom"
import APIManager from "../../module/APIManager"


export default class ChemicalDetails extends Component {
    state = {
       name: "",
       type: "",
       description: "",
       resource: "",
       inventory: "",
       cost: "",
       img: "",
       sdsUrl: ""
    }



    componentDidMount() {
        APIManager.get("chemicals", parseInt(this.props.match.params.chemicalId))
        .then(chemical => {
            console.log(chemical)
          this.setState({

           name: chemical.name,
           type: chemical.type,
           description: chemical.description,
           resource: chemical.resource,
           inventory: chemical.inventory,
           cost: chemical.cost,
           img: chemical.img,
           sdsUrl: chemical.sdsUrl

          });
        });
      }




    render() {


        return (
            <section className="chemical">
                <div key={ this.props.match.params.chemicalId } className="card">
                            <img class="card-img-top" src={ this.state.img } alt="Card img cap"></img>
                         <div className="card-body">
                             <h5 class="card-title">{ this.state.name }</h5>
                                <p class="card-text">{this.state.description}</p>
                         </div>
                        <div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">Type: {this.state.type}</li>
                            <li class="list-group-item">Inventory: {this.state.inventory} </li>
                            <li class="list-group-item">Cost: {this.state.cost}</li>
                            </ul>
                        </div>
                        <div classs="card-body">
                            <a href= {this.state.resource}
                            onClick={() => this.state.resource}
                            className="card-title">RESOURCE</a>
                        </div>
                        <div class="card-body">
                            <Link className="nav-link" to={`/myChemicals/${this.props.match.params.chemicalId}/edit`}><h2>EDIT THIS CHEMICAL</h2></Link>
                        </div>
                </div>
            </section>
        )
    }
}
