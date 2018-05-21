import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const emptyForm = { path: '', description: '' };

class AddItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: emptyForm,
    }
  }

  handleChangeFor = propertyName => event => {
    this.setState({
      form: {
        ...this.state.form,
        [propertyName]: event.target.value,
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: '/gallery',
      data: this.state.form
    }).then(response => {
      console.log(response);
      this.setState({
        form: emptyForm
      });
      this.props.getGalleryList();
    }).catch(error => {
      console.log(`ERROR trying to POST /gallery: ${error}`);
    });
  }

  render() {
    return (
      <div className="AddItemForm">
        <form onSubmit={this.handleSubmit}>
          <Input value={this.state.form.path} onChange={this.handleChangeFor('path')} placeholder="Image URL" />
          <TextField value={this.state.form.description} onChange={this.handleChangeFor('description')} placeholder="Description" />
          <Input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddItemForm;