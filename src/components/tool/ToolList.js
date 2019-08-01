import React, { Component } from 'react';
import "../tool/tool.css"
import ToolCardList from "./ToolCardList"


export default class CurrentTaskList extends Component {
    render () {
        return (
            <React.Fragment>
            <section className="assignTask">
            {
            this.props.tools.map(tool =>
                 <ToolCardList key={tool.id} tool={tool} {...this.props} />
                 )
            }
            </section>
            </React.Fragment>
        )
    }
}