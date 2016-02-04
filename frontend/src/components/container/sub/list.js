import React, { Component } from 'react';

class Containers extends Component {
  constructor(props) {
    super(props);
  }

  redirectShow(containerId) {
    this.context.history.pushState(null, '/containers/' + containerId);
  }

  redirectStart(containerId) {
    this.context.history.pushState(null, '/containers/start/' + containerId);
  }

  isContainerRunning(container) {
    return container.Status.substring(0, 2) === 'Up';
  }

  beautifyPorts(data) {
    return data.map(item => {
      const publicPort = (item.PublicPort) ? `${item.IP}:${item.PublicPort}->` : '';
      const privatePort = (item.PrivatePort) ? `${item.PrivatePort}` : '';
      const type = (item.Type) ? `/${item.Type}` : '';

      return `${publicPort}${privatePort}${type}`;
    });
  }

  render() {
    const stopContainer = this.props.stopContainer;
    const restartContainer = this.props.restartContainer;
    const removeContainer = this.props.removeContainer;

    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <button onClick={this.props.getContainers}>Refresh Containers</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Status</th>
              <th>Ports</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.containers.map((container) => {
              const isRunning = this.isContainerRunning(container);

              return (
                <tr key={container.Id}>
                  <td>{container.Id.substring(0, 12)}</td>
                  <td>{container.Image}</td>
                  <td>{container.Status}</td>
                  <td>{this.beautifyPorts(container.Ports).join(', ')}</td>
                  <td><button onClick={this.redirectShow.bind(this, container.Id)}>view</button></td>
                  <td>
                    {isRunning ?
                      <div>
                        <button onClick={stopContainer.bind(this, container.Id)}>stopContainer</button>
                        <button onClick={restartContainer.bind(this, container.Id)}>restartContainer</button>
                      </div>
                    :
                      <div>
                        <button onClick={this.redirectStart.bind(this, container.Id)}>startContainer</button>
                        <button onClick={removeContainer.bind(this, container.Id)}>removeContainer</button>
                      </div>
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

Containers.contextTypes = {
  location: React.PropTypes.object,
  history: React.PropTypes.object,
};

Containers.propTypes = {
  getContainers: React.PropTypes.func.isRequired,
  stopContainer: React.PropTypes.func.isRequired,
  restartContainer: React.PropTypes.func.isRequired,
  removeContainer: React.PropTypes.func.isRequired,
  containers: React.PropTypes.array.isRequired,
};

export default Containers;
