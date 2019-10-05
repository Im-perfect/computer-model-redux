import React from "react";

export default class ModelDetails extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.model.name}</li>
          <li>Manufacturer: {this.props.model.manufacturer}</li>
          <li>Year: {this.props.model.year}</li>
          <li>Origin: {this.props.model.origin}</li>
        </ul>
      </div>
    );
  }
}
