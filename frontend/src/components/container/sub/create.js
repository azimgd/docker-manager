import React, { Component } from 'react';
import _ from 'lodash';

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
      Volumes: [],
    };
  }

  handleChange(type, event) {
    const value = event.target.value;
    const data = (type === 'string') ? value : this.state[event.target.name].concat([value]);

    if (value && value.length === 0) {
      return;
    }

    event.target.value = '';
    this.setState({
      [event.target.name]: data,
    });
  }

  generateRequest(data) {
    const obj = {};

    if (data.hasOwnProperty('Volumes')) {
      obj.Volumes = _.transform(data.Volumes, (acc, val) => {
        return Object.assign(acc, { [val]: {} });
      }, {});
    }

    return Object.assign({}, data, obj);
  }

  handleSubmit(data) {
    const request = this.generateRequest(data);
    this.props.createContainer(request);
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
          <label>Volumes</label>
          {this.state.Volumes.map((item, key) =>
            <div key={key}>{item} <a href="" onClick={this.removeEntry.bind(this, 'Volumes', key)}>Remove</a></div>
          )}
          <input type="text" name="Volumes" placeholder="Volumes" styleName="Form-control" defaultValue={this.state.Volumes} onBlur={this.handleChange.bind(this, 'array')}/>
          <small>/var/www</small>
        </div>

        <button onClick={this.handleSubmit.bind(this, this.state)}>Create container</button>
      </div>
    );
  }
}

Create.propTypes = {
  imageId: React.PropTypes.string.isRequired,
  createContainer: React.PropTypes.func.isRequired,
};

export default cssmodules(Create, styles);
