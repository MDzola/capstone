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
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ this.state.img } className="icon--tool" alt="" />
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
                  <Link className="nav-link" to={`/mytools/${this.props.match.params.toolId}/edit`}><h2>EDIT THIS TOOL</h2></Link>
               </div>
               {/* <div>
                            <a href="#"
                            onClick={() => this.deleteTool(this.props.match.params.toolId)}
                            className="card-link">Delete</a>
               </div> */}
            </section>
        )
    }
}
