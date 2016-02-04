import React, { Component } from 'react';
import _ from 'lodash';

import cssmodules from 'react-css-modules';
import styles from '../container.styl';

class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Binds: [],
    };
  }

  handleChange(type, event) {
    const value = event.target.value;
    const data = (type === 'string') ? value : this.state[event.target.name].concat([value]);

    if (value && value.length === 0) {
      return;
    }

    if (type !== 'string') {
      event.target.value = '';
    }

    this.setState({
      [event.target.name]: data,
    });
  }

  generateRequest(data) {
    const obj = {};

    return Object.assign({}, data, obj);
  }

  handleSubmit(containerId, data) {
    const request = this.generateRequest(data);
    this.props.startContainer(containerId, request);
  }

  removeEntry(field, position, event) {
    event.preventDefault();
    const array = this.state[field];
    array.splice(position, 1);

    this.setState({
      [field]: array,
    });
  }

  render() {
    return (
      <div styleName="Form">
        <div styleName="Form-group">
          <label>Binds</label>
          {this.state.Binds.map((item, key) =>
            <div key={key}>{item} <a href="" onClick={this.removeEntry.bind(this, 'Binds', key)}>Remove</a></div>
          )}
          <input type="text" name="Binds" placeholder="Binds" styleName="Form-control" defaultValue={this.state.Binds} onBlur={this.handleChange.bind(this, 'array')}/>
          <small>/home/vagrant:/stuff</small>
        </div>

        <button onClick={this.handleSubmit.bind(this, this.props.container.Id, this.state)}>Start container</button>
      </div>
    );
  }
}

Start.propTypes = {
  container: React.PropTypes.object.isRequired,
  startContainer: React.PropTypes.func.isRequired,
};

export default cssmodules(Start, styles);
