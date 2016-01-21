import React, { Component } from 'react';

class Containers extends Component {
  constructor(props) {
    super(props);
  }

  redirect(containerId) {
    this.context.history.pushState(null, '/containers/' + containerId);
  }

  render() {
    const startContainer = this.props.startContainer;
    const stopContainer = this.props.stopContainer;

    return (
      <div>
        <button onClick={this.props.getContainers}>Get them</button>

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
            {this.props.containers.map((container) => {
              return (
                <tr key={container.Id}>
                  <td>{container.Id}</td>
                  <td>{container.Image}</td>
                  <td>{container.Status}</td>
                  <td>{JSON.stringify(container.Ports)}</td>
                  <td><button onClick={this.redirect.bind(this, container.Id)}>view</button></td>
                  <td><button onClick={startContainer.bind(this, container.Id)}>startContainer</button></td>
                  <td><button onClick={stopContainer.bind(this, container.Id)}>stopContainer</button></td>
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
  startContainer: React.PropTypes.func.isRequired,
  stopContainer: React.PropTypes.func.isRequired,
  containers: React.PropTypes.array.isRequired,
};

export default Containers;
