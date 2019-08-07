import React, { Component } from 'react';
import "../tool/tool.css"
import ToolCardList from "./ToolCardList"


export default class ToolList extends Component {
    render () {
        return (
            <React.Fragment>
            <section className="tool">
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