import React, { Component } from 'react';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Image: this.props.imageId,
      Name: null,
      Cmd: null,
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    this.props.createContainer(this.state);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" name="Image" placeholder="Image" defaultValue={this.state.Image} onChange={this.handleChange.bind(this)}/>
        </div>
        <div>
          <input type="text" name="Name" placeholder="Name" defaultValue={this.state.Name} onChange={this.handleChange.bind(this)}/>
        </div>
        <div>
          <input type="text" name="Cmd" placeholder="Cmd" defaultValue={this.state.Cmd} onChange={this.handleChange.bind(this)}/>
        </div>

        <button onClick={this.handleSubmit.bind(this)}>Create container</button>
      </div>
    );
  }
}

Create.propTypes = {
  imageId: React.PropTypes.string.isRequired,
  createContainer: React.PropTypes.func.isRequired,
};

export default Create;
