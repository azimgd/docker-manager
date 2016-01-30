import React, { Component } from 'react';

import cssmodules from 'react-css-modules';
import styles from '../container.styl';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Image: this.props.imageId,
      Name: null,
      Cmd: [],
      Env: [],
    };
  }

  handleChange(type, event) {
    const data = (type === 'string') ? event.target.value : [].concat([event.target.value]);

    this.setState({
      [event.target.name]: data,
    });
  }

  handleSubmit() {
    this.props.createContainer(this.state);
  }

  render() {
    return (
      <div styleName="Form">
        <div styleName="Form-group">
          <input type="text" name="Image" placeholder="Image" styleName="Form-control" defaultValue={this.state.Image} onChange={this.handleChange.bind(this, 'string')}/>
        </div>
        <div styleName="Form-group">
          <input type="text" name="Name" placeholder="Name" styleName="Form-control" defaultValue={this.state.Name} onChange={this.handleChange.bind(this, 'string')}/>
        </div>
        <div styleName="Form-group">
          <input type="text" name="Cmd" placeholder="Cmd" styleName="Form-control" defaultValue={this.state.Cmd} onChange={this.handleChange.bind(this, 'array')}/>
        </div>
        <div styleName="Form-group">
          <input type="text" name="Env" placeholder="Env" styleName="Form-control" defaultValue={this.state.Env} onChange={this.handleChange.bind(this, 'array')}/>
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
