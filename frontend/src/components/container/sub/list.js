import React, { Component } from 'react';
import { Link } from 'react-router';

class Containers extends Component {
  constructor(props) {
    super(props);
  }

  redirect(containerId) {
    this.context.history.pushState(null, '/containers/' + containerId)
  }

  render() {
    return (
      <div>
        <button onClick={this.props.fetchContainers}>Get them</button>

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
              return <tr onClick={this.redirect.bind(this, container.Id)} key={container.Id}>
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

Containers.contextTypes = {
  location: React.PropTypes.object,
  history: React.PropTypes.object,
};

export default Containers;
