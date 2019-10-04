import React from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {

  state = {
    selectedComputer:{}
  }

  updateSelection = event => {
    console.log(event.target.selectedIndex)
    this.setState({
      selectedComputer: this.props.computers[event.target.selectedIndex-1]
    })
  }

  addComputer = () => {
    this.props.dispatch({
      type: 'ADD_COMPUTER',
      payload: {
        ...this.state.selectedComputer
      }
    })
  }

  render() {
    return (
      <div className="App">
        <select onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          {this.props.computers.map(computer => (
            //there's no id in the data, generate a random one
            <option value={computer.name} key={Math.round(Math.random()*10000)}>
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
    computers: state
  };
};
export default connect(mapStateToProps)(App);
