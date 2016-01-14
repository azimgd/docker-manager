import React, { Component } from 'react';
import ImageStore from '../../stores/ImageStore';
import ImageActions from '../../actions/ImageActions';
import uuid from 'uuid';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = ImageStore.getState();
  }

  componentDidMount() {
    ImageStore.listen(this.onChange.bind(this));
    ImageActions.getImages();
  }

  componentWillUnmount() {
    ImageStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  fetchImages() {
    ImageActions.getImages();
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchImages.bind(this)}>Get them</button>

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
            {this.state.images.map((image) => {
              return <tr key={uuid.v1()}>
                <td>{image.Id}</td>
                <td>{image.Image}</td>
                <td>{image.Status}</td>
                <td>{JSON.stringify(image.Ports)}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
