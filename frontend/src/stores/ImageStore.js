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
      images: [],
      errors: [],
      msgs: [],
      isLoading: {
        getImages: false,
      },
    };
  }

  onGetImagesFail(err) {
    this.state.isLoading.getImages = false;
    this.state.errors = err.reason;
  }

  onGetImagesLoading() {
    this.state.isLoading.getImages = true;
  }

  onGetImagesSuccess(res) {
    this.state.isLoading.getImages = false;
    this.state.msgs = res.reason;
    this.state.images = res.data;
  }
}

module.exports = alt.createStore(ImageStore, 'ImageStore');
