import React, { Component } from "react"
import APIManager from "../../module/APIManager"
import "../chemical/chemical.css"


export default class ChemicalEdit extends Component {

    state = {
        id: "",
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

            id: chemical.id,
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



   handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
   }

    editThisChemical = evt => {
      evt.preventDefault()

        const updateChemical = {
          id: this.props.match.params.toolId,
          name: this.state.name,
          type: this.state.type,
          description: this.state.description,
          resource: this.state.resource,
          inventory: parseInt(this.state.inventory),
          cost: parseInt(this.state.cost),
          img: this.state.img,
          sdsUrl: this.state.sdsUrl

        };

    this.props.editTool(updateChemical)
    .then(() => this.props.history.push("/myChemicals"))
    }





    render() {
      return (
        <React.Fragment>
              <form className="taskForm">


            <div className="form-group">
              <label htmlFor="taskName">Name</label>
              <input
                type="textarea"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value = {this.state.name}
              />
            </div>

            <div className="form-group">
              <label htmlFor="taskName">Type</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="type"
                value = {this.state.type}
              />
            </div>

             <div className="form-group">
              <label htmlFor="taskName">Description</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="description"
                value = {this.state.description}
              />
            </div>

            <div className="form-group">
              <label htmlFor="taskName">Resource</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="resource"
                value = {this.state.resource}
              />
            </div>

            <div className="form-group">
              <label htmlFor="taskName">Inventory</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="inventory"
                value = {this.state.inventory}
              />
            </div>

            <div className="form-group">
              <label htmlFor="taskName">Cost</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="cost"
                value = {this.state.cost}
              />
            </div>

            <button
              type="submit"
              onClick={this.editThisChemical}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}