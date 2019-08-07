import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../tool/tool.css"


export default class ToolCardList extends Component {
    render() {
        return (
                <div key={this.props.tool.id} className="card tool">
                    <div className="card-body">
                    <h4 className="card-title">
                            <img src={ this.props.tool.img } className="icon--toolList" alt="" />
                        </h4>
                        <div className="card-title">
                        <Link className="nav-link" to={`/mytools/${this.props.tool.id}`}><h5>{this.props.tool.name}</h5></Link>
                        </div>
                    </div>
                </div>

     )
   }
}