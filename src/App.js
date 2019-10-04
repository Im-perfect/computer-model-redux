import React from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {

  state = {
    selectedComputer:{}
  }

  render() {
    return (
      <div className="App">
        <select>
          <option value="">-- pick a model --</option>
          {this.props.computers.map(computer => (
            //there's no id in the data, generate a random one
            <option value={computer.name} key={Math.round(Math.random()*10000)}>
              {computer.name} ({computer.year})
            </option>
          ))}
        </select>
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
