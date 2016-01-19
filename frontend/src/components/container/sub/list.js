import React, { Component } from 'react';
import uuid from 'uuid';

export default class Container extends Component {
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
