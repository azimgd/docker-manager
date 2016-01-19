import React, { Component } from 'react';
import ContainerStore from '../../stores/ContainerStore';
import ContainerActions from '../../actions/ContainerActions';
import uuid from 'uuid';

import CSSModules from 'react-css-modules';
import styles from './container.css';

class Container extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = ContainerStore.getState();
  }

  componentDidMount() {
    ContainerStore.listen(this.onChange);
    this.fetchContainers();
  }

  componentWillUnmount() {
    ContainerStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  fetchContainers() {
    ContainerStore.getContainers();
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchContainers.bind(this)}>Get them</button>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Status</th>
              <th>Ports</th>
            </tr>
          </thead>
          <tbody>
            {this.state.containers.map((container) => {
              return <tr key={uuid.v1()}>
                <td>{container.Id}</td>
                <td>{container.Image}</td>
                <td>{container.Status}</td>
                <td>{JSON.stringify(container.Ports)}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CSSModules(Container, styles);
