import React, { Component } from "react"
import "./tool.css"
import { Link } from "react-router-dom"
import APIManager from "../../module/APIManager"


export default class ToolDetails extends Component {
    state = {
       name: "",
       type: "",
       description: "",
       resource: "",
       inventory: "",
       cost: "",
       img: "",
    }




    componentDidMount() {
        APIManager.get("tools", parseInt(this.props.match.params.toolId))
        .then(tool => {
            console.log(tool)
          this.setState({

           name: tool.name,
           type: tool.type,
           description: tool.description,
           resource: tool.resource,
           inventory: tool.inventory,
           cost: tool.cost,
           img: tool.img

          });
        });
      }



    deleteTool = id =>
    APIManager.delete("tools", id)
    .then(() => APIManager.getAll("tools"))
    .then(tools => {
        this.setState({ tools: tools })
    })




    render() {


        return (
            <section className="tool">
                <div key={ this.props.match.params.toolId } className="card">
                    <img class="card-img-top" src={ this.state.img } alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">{ this.state.name }</h5>
                        <p class="card-text">{this.state.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Type: {this.state.type}</li>
                    <li class="list-group-item">Inventory: {this.state.inventory} </li>
                    <li class="list-group-item">Cost: {this.state.cost}</li>
                    </ul>
                    <div classs="card-body">
                    <a href= {this.state.resource}
                            onClick={() => this.state.resource}
                            className="card-title">RESOURCE</a>
                    </div>
                    <div class="card-body">
                    <Link className="nav-link" to={`/mytools/${this.props.match.params.toolId}/edit`}><h2>EDIT THIS TOOL</h2></Link>
                    </div>
               </div>
            </section>
        )
    }
}
