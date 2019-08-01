import React, { Component } from "react"
// import { Link } from "react-router-dom"
import "../tool/tool.css"


export default class ToolCardList extends Component {
    render() {
        return (
                <div key={this.props.tool.id} className="card card--employee">
                    <div className="card-body">
                        <div className="card-title">
                            <h5>{this.props.tool.name}</h5>
                        </div>
                    </div>
                </div>

     )
   }
}