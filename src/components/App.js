import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsersRequest, createUserRequest, deleteUserRequest, usersError} from '../actions/users';
import {Alert} from 'reactstrap';

import UsersList from './UsersList';
import AddUserForm from './AddUserForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.getUsersRequest();
  }

  handleCloseAlert = () => {
    this.props.usersError({
      error: ''
    });
  }

  handleDeleteUser = (userId) => {
    this.props.deleteUserRequest(userId);
  }

  handleSubmit = ({firstName, lastName}) => {
    this.props.createUserRequest({firstName, lastName});
  }

  render() {
    const users = this.props.users;

    return (
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <h1 style={{textAlign: 'center'}}>Users</h1>
        <Alert color="danger" isOpen={!!users.error} toggle={this.handleCloseAlert}>
          {users.error}
        </Alert>
        <AddUserForm onSubmit={this.handleSubmit}/>
        <UsersList users={users.users} onDeleteUser={this.handleDeleteUser}/>
      </div>
    );
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError
})(App);
