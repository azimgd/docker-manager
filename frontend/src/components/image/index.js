import React, { Component } from 'react';
import ImageStore from '../../stores/ImageStore';

import List from './sub/list';

import cssmodules from 'react-css-modules';
import styles from './image.css';

class Image extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
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

  render() {
    return (
      <List
        images={this.state.images}
        fetchImages={this.fetchImages.bind(this)}
      />
    );
  }
}

export default cssmodules(Image, styles);
