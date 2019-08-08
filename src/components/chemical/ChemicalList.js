import React, { Component } from 'react';
import "../chemical/chemical.css"
import ChemicalCardList from "./ChemicalCardList"


export default class ChemicalList extends Component {
    render () {
        return (
            <React.Fragment>
            <section className="chemical">
            {
            this.props.chemicals.map(chemical =>
                 <ChemicalCardList key={chemical.id} chemical={chemical} {...this.props} />
                 )
            }
            </section>
            </React.Fragment>
        )
    }
}