import React, { Component } from 'react';
import uuid from 'uuid';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  redirect(imageId) {
    this.context.history.pushState(null, '/containers/create/' + imageId);
  }

  render() {
    const removeImage = this.props.removeImage;

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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.images.map((image) => {
              return (
                <tr key={uuid.v1()}>
                  <td>{image.Id}</td>
                  <td>{image.RepoTags.join()}</td>
                  <td>
                    <button onClick={this.redirect.bind(this, image.Id)}>Create container</button>
                    <button onClick={removeImage.bind(this, image.Id)}>Remove image</button>
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

Image.contextTypes = {
  location: React.PropTypes.object,
  history: React.PropTypes.object,
};

Image.propTypes = {
  fetchImages: React.PropTypes.func.isRequired,
  removeImage: React.PropTypes.func.isRequired,
  images: React.PropTypes.array.isRequired,
};

export default Image;
