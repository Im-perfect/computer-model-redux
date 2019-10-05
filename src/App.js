import React from "react";
import "./App.css";
import { connect } from "react-redux";
import ModelDetails from "./modelDetails";

class App extends React.Component {
  state = {
    selectedComputer: {}
  };

  updateSelection = event => {
    // console.log(event.target.selectedIndex);
    if (event.target.selectedIndex !== 0) {
      this.setState({
        selectedComputer: this.props.computers[event.target.selectedIndex - 1]
      });
    }
  };

  addComputer = () => {
    this.props.dispatch({
      type: "ADD_COMPUTER",
      payload: {
        ...this.state.selectedComputer
      }
    });
  };

  render() {
    return (
      <div>
        {this.props.addedComputers.length
          ? this.props.addedComputers.map(model => (
            //there's no id in the data, generate a random key
              <ModelDetails model={model} key={Math.round(Math.random() * 10000)}/>
            ))
          : ""}

        <select
          onChange={this.updateSelection}
          value={`${this.state.selectedComputer.name} (${this.state.selectedComputer.year})`}
        >
          <option value="">-- pick a model --</option>
          {this.props.computers.map(computer => (
            //there's no id in the data, generate a random key
            <option
              value={`${computer.name} (${computer.year})`}
              key={Math.round(Math.random() * 10000)}
            >
              {computer.name} ({computer.year})
            </option>
          ))}
        </select>
        <button onClick={this.addComputer}>ADD</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    computers: state.computers,
    addedComputers: state.addedComputers
  };
};
export default connect(mapStateToProps)(App);
