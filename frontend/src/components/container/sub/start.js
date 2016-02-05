import React, { Component } from 'react';
import _ from 'lodash';

import cssmodules from 'react-css-modules';
import styles from '../container.styl';

class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Binds: [],
      PortBindings: [],
    };
  }

  handleChange(type, event) {
    const value = event.target.value;
    const data = (type === 'string') ? value : this.state[event.target.name].concat([value]);

    if (value.length === 0) {
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

    if (data.hasOwnProperty('PortBindings')) {
      obj.PortBindings = _.transform(data.PortBindings, (acc, val) => {
        const ports = val.split(':');

        if(ports.length !== 2) {
          return acc;
        }

        return Object.assign(acc, { [ports[0]]: [{ HostPort: ports[1] }] });
      }, {});
    }

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
      <div>
        <div styleName="Info-field">
          <div styleName="Info-field-title">Binds</div>
          <div styleName="Info-field-text">
            {this.state.Binds.map((item, key) =>
              <div key={key}>{item} <a href="" onClick={this.removeEntry.bind(this, 'Binds', key)}>Remove</a></div>
            )}
          </div>
          <div styleName="Info-field-text">
            <input type="text" name="Binds" placeholder="Binds" styleName="Form-control" defaultValue={this.state.Binds} onBlur={this.handleChange.bind(this, 'array')}/>
          </div>
          <div styleName="Info-field-subtext">
            /home/vagrant:/stuff
          </div>
        </div>

        <div styleName="Info-field">
          <div styleName="Info-field-title">PortBindings</div>
          <div styleName="Info-field-text">
            {this.state.PortBindings.map((item, key) =>
              <div key={key}>{item} <a href="" onClick={this.removeEntry.bind(this, 'PortBindings', key)}>Remove</a></div>
            )}
          </div>
          <div styleName="Info-field-text">
            <input type="text" name="PortBindings" placeholder="PortBindings" styleName="Form-control" defaultValue={this.state.PortBindings} onBlur={this.handleChange.bind(this, 'array')}/>
          </div>
          <div styleName="Info-field-subtext">
            80/tcp:11022
          </div>
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
