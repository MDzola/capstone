import React, { Component } from "react"
import APIManager from "../../module/APIManager"


export default class ToolEdit extends Component {

    state = {
        id: "",
        name: "",
        type: "",
        description: "",
        resource: "",
        inventory: "",
        cost: "",
        img: ""
     }



     componentDidMount() {
        APIManager.get("tools", parseInt(this.props.match.params.toolId))
        .then(tool => {
            console.log(tool)
          this.setState({

            id: tool.id,
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



   handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
   }

    editThisTool = evt => {
      evt.preventDefault()

        const updateTool = {
          id: this.props.match.params.toolId,
          name: this.state.name,
          type: this.state.type,
          description: this.state.description,
          resource: this.state.resource,
          inventory: parseInt(this.state.inventory),
          cost: parseInt(this.state.cost),
          img: this.state.img

        };

    this.props.editTool(updateTool)
    .then(() => this.props.history.push("/myTools"))
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
              onClick={this.editThisTool}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}