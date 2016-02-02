import React, { Component } from 'react';
import ImageStore from '../../stores/ImageStore';

import Alerts from '../shared/alerts';
import List from './sub/list';

import cssmodules from 'react-css-modules';
import styles from './image.styl';

class Image extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.fetchImages = this.fetchImages.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.state = ImageStore.getState();
  }

  componentDidMount() {
    ImageStore.listen(this.onChange);
    ImageStore.getImages();
  }

  componentWillUnmount() {
    ImageStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  fetchImages() {
    ImageStore.getImages();
  }

  removeImage(imageId) {
    ImageStore.removeImage(imageId);
  }

  render() {
    return (
      <div>
        <Alerts
          errors={this.state.errors}
          msgs={this.state.msgs}
        />

        <List
          images={this.state.images}
          fetchImages={this.fetchImages}
          removeImage={this.removeImage}
        />
      </div>
    );
  }
}

export default cssmodules(Image, styles);
