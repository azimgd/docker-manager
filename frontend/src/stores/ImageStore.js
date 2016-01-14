import alt from '../utils/alt';
import ImageActions from '../actions/ImageActions';
import ImageSource from '../sources/ImageSource';

class ImageStore {
  constructor() {
    this.bindListeners({
      onGetImagesSuccess: ImageActions.GET_IMAGES_SUCCESS,
      onGetImagesLoading: ImageActions.GET_IMAGES_LOADING,
      onGetImagesFail: ImageActions.GET_IMAGES_FAIL,
    });

    this.registerAsync(ImageSource);

    this.state = {
      images: []
    };
  }

  onGetImagesFail(images) {
    console.log('failed')
  }

  onGetImagesLoading(images) {
    console.log('loading')
  }

  onGetImagesSuccess(images) {
    this.setState({ images });
  }
}

module.exports = alt.createStore(ImageStore, 'ImageStore');
