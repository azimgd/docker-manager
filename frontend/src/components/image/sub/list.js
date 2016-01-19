import React, { Component } from 'react';
import uuid from 'uuid';

export default class Image extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fetchImages}>Get them</button>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {this.props.images.map((image) => {
              return <tr key={uuid.v1()}>
                <td>{image.Id}</td>
                <td>{image.RepoTags.join()}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}