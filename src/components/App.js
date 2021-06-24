import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsersRequest} from '../actions/users';

class App extends Component {
  render() {
    return (
      <div>
        Test
      </div>
    );
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest
})(App);
