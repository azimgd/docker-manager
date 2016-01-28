import React, { Component } from 'react';
import uuid from 'uuid';

class Image extends Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <button onClick={this.props.fetchImages}>Refresh images</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {this.props.images.map((image) => {
              return (
                <tr key={uuid.v1()}>
                  <td>{image.Id}</td>
                  <td>{image.RepoTags.join()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

Image.propTypes = {
  fetchImages: React.PropTypes.func.isRequired,
  images: React.PropTypes.array.isRequired,
};

export default Image;
