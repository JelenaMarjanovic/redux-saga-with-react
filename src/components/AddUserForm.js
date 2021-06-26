import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

class AddUserForm extends Component {
  state = {
    firstName: '',
    lastName: ''
  };

  handleFirstNameChange = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  handleLastNameChange = e => {
    this.setState({
      lastName: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const {onSubmit} = this.props;
    const {firstName, lastName} = this.state;

    onSubmit({firstName, lastName});

    this.setState({
      firstName: '',
      lastName: ''
    });
  };

  render() {
    const {firstName, lastName} = this.state;

    return (
      <Form style={{marginBottom: '10px'}} onSubmit={this.handleSubmit}>
        <FormGroup style={{marginBottom: '10px'}}>
          <Label for="firstName">
            First name
          </Label>
          <Input required placeholder="First name" id="firstName" type="text" onChange={this.handleFirstNameChange}
                 value={firstName}/>
        </FormGroup>
        <FormGroup style={{marginBottom: '10px'}}>
          <Label for="lastName">
            Last name
          </Label>
          <Input required placeholder="Last name" id="lastName" type="text" onChange={this.handleLastNameChange}
                 value={lastName}/>
        </FormGroup>
        <Button style={{marginBottom: '10px', width: '100%'}} block outline type="submit" color="primary">
          Create
        </Button>
      </Form>
    );
  }
}

export default AddUserForm;