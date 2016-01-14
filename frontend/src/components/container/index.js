import React, { Component } from 'react';
import ContainerStore from '../../stores/ContainerStore';
import ContainerActions from '../../actions/ContainerActions';
import uuid from 'uuid';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = ContainerStore.getState();
    this.fetchContainers();
  }

  componentDidMount() {
    ContainerStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    ContainerStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  fetchContainers() {
    ContainerStore.getContainers();
  }

  render() {
    console.log(this.state)
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
