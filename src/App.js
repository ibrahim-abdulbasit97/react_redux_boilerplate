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
        <h1>React + Redux boilerplate</h1>
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
