import React, { Component } from "react";
import "./App.css";

// redux stuff
import { connect } from "react-redux";
import { updateUser } from "./actions/user_actions";
import { bindActionCreators } from "redux";

class App extends Component {
  updateTheUser = event => {
    let newName = event.target.value;
    this.props.onUserUpdate(newName);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div>{this.props.user}</div>
        <input type="text" onChange={this.updateTheUser} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onUserUpdate: updateUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
