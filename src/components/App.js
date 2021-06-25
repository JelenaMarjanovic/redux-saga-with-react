import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsersRequest} from '../actions/users';

import UsersList from './UsersList';
import AddUserForm from './AddUserForm';

class App extends Component {
  componentDidMount() {
    const {getUsersRequest} = this.props;

    getUsersRequest();
  }

  handleSubmit = ({firstName, lastName}) => {
    console.log(firstName, lastName);
  }

  render() {
    const users = this.props.users;

    return (
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <h1 style={{textAlign: 'center'}}>Users</h1>
        <AddUserForm onSubmit={this.handleSubmit}/>
        <UsersList users={users.users}/>
      </div>
    );
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest
})(App);
