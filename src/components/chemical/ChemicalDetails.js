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
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ this.state.img } className="icon--chemical" alt="" />
                        </h4>
                        <h3 className="card-title">{ this.state.name }</h3>
                        <h6 className="card-title">Type: {this.state.type}</h6>
                        <h4 className="card-title">{this.state.description}</h4>
                        <h4 className="card-title">Inventory: {this.state.inventory}</h4>
                        <h6 className="card-title">Cost: {this.state.cost}</h6>
                         <a href= {this.state.resource}
                            onClick={() => this.state.resource}
                            className="card-title">RESOURCE</a>
                    </div>
                </div>
                <div className="card-title">
                  <Link className="nav-link" to={`/mytools/${this.props.match.params.chemicalId}/edit`}><h2>EDIT THIS CHEMICAL</h2></Link>
               </div>
            </section>
        )
    }
}
