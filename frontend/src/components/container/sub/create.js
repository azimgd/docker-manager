import React, { Component } from 'react';

import cssmodules from 'react-css-modules';
import styles from '../container.styl';

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
      <div styleName="Form">
        <div styleName="Form-group">
          <input type="text" name="Image" placeholder="Image" styleName="Form-control" defaultValue={this.state.Image} onChange={this.handleChange.bind(this)}/>
        </div>
        <div styleName="Form-group">
          <input type="text" name="Name" placeholder="Name" styleName="Form-control" defaultValue={this.state.Name} onChange={this.handleChange.bind(this)}/>
        </div>
        <div styleName="Form-group">
          <input type="text" name="Cmd" placeholder="Cmd" styleName="Form-control" defaultValue={this.state.Cmd} onChange={this.handleChange.bind(this)}/>
        </div>

        <button styleName="Btn" onClick={this.handleSubmit.bind(this)}>Create container</button>
      </div>
    );
  }
}

Create.propTypes = {
  imageId: React.PropTypes.string.isRequired,
  createContainer: React.PropTypes.func.isRequired,
};

export default cssmodules(Create, styles);
