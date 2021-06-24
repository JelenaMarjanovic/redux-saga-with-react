import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsersRequest} from '../actions/users';

import UsersList from './UsersList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getUsersRequest } = this.props;

    getUsersRequest();
  }

  render() {
    const users = this.props.users;

    return (
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <UsersList users={users.users} />
      </div>
    );
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest
})(App);
