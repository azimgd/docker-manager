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
      Mounts: [],
    };
  }

  handleChange(type, event) {
    const value = event.target.value;
    const data = (type === 'string') ? value : this.state[event.target.name].concat([value]);

    if (!value || value.length === 0) {
      return;
    } else {
      event.target.value = '';
    }

    this.setState({
      [event.target.name]: data,
    });
  }

  handleSubmit() {
    this.props.createContainer(this.state);
  }

  removeEntry(field, position, event) {
    event.preventDefault();
    const array = this.state[field];
    array.slice(position, 1);

    this.setState({
      field: array,
    });
  }

  render() {
    const mountsFormat = { "Source": "/data", "Destination": "/data", "Mode": "ro,Z", "RW": false };

    return (
      <div styleName="Form">
        <div styleName="Form-group">
          <label>Image</label>
          <input type="text" name="Image" placeholder="Image" styleName="Form-control" defaultValue={this.state.Image} onBlur={this.handleChange.bind(this, 'string')}/>
        </div>
        <div styleName="Form-group">
          <label>Name</label>
          <input type="text" name="Name" placeholder="Name" styleName="Form-control" defaultValue={this.state.Name} onBlur={this.handleChange.bind(this, 'string')}/>
        </div>
        <div styleName="Form-group">
          <label>Cmd</label>
          {this.state.Cmd.map((item, key) =>
            <div key={key}>{item} <a href="" onClick={this.removeEntry.bind(this, 'Cmd', key)}>Remove</a></div>
          )}
          <input type="text" name="Cmd" placeholder="Cmd" styleName="Form-control" defaultValue={this.state.Cmd} onBlur={this.handleChange.bind(this, 'array')}/>
        </div>
        <div styleName="Form-group">
          <label>Env</label>
          {this.state.Env.map((item, key) =>
            <div key={key}>{item} <a href="" onClick={this.removeEntry.bind(this, 'Env', key)}>Remove</a></div>
          )}
          <input type="text" name="Env" placeholder="Env" styleName="Form-control" defaultValue={this.state.Env} onBlur={this.handleChange.bind(this, 'array')}/>
          <small>"FOO=bar"</small>
        </div>
        <div styleName="Form-group">
          <label>Mounts</label>
          {this.state.Mounts.map((item, key) =>
            <div key={key}>{item} <a href="" onClick={this.removeEntry.bind(this, 'Mounts', key)}>Remove</a></div>
          )}
          <input type="text" name="Mounts" placeholder="Mounts" styleName="Form-control" defaultValue={this.state.Mounts} onBlur={this.handleChange.bind(this, 'array')}/>
          <small>{JSON.stringify(mountsFormat)}</small>
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

export default cssmodules(Create, styles);
