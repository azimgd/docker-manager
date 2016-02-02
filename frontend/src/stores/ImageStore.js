import alt from '../utils/alt';
import ImageActions from '../actions/ImageActions';
import ImageSource from '../sources/ImageSource';

class ImageStore {
  constructor() {
    this.bindListeners({
      onGetImagesSuccess: ImageActions.GET_IMAGES_SUCCESS,
      onGetImagesLoading: ImageActions.GET_IMAGES_LOADING,
      onGetImagesFail: ImageActions.GET_IMAGES_FAIL,

      onRemoveImageSuccess: ImageActions.REMOVE_IMAGE_SUCCESS,
      onRemoveImageLoading: ImageActions.REMOVE_IMAGE_LOADING,
      onRemoveImageFail: ImageActions.REMOVE_IMAGE_FAIL,
    });

    this.registerAsync(ImageSource);

    this.state = {
      images: [],
      errors: [],
      msgs: [],
      isLoading: {
        getImages: false,
        removeImage: false,
      },
    };
  }

  onGetImagesFail(err) {
    this.state.isLoading.getImages = false;
    this.state.errors = [err.data.reason];
  }

  onGetImagesLoading() {
    this.state.isLoading.getImages = true;
  }

  onGetImagesSuccess(res) {
    this.state.isLoading.getImages = false;
    this.state.msgs = [res.reason];
    this.state.images = res.data;
  }

  onRemoveImageFail(err) {
    this.state.isLoading.removeImage = false;
    this.state.errors = [err.data.reason];
  }

  onRemoveImageLoading() {
    this.state.isLoading.removeImage = true;
  }

  onRemoveImageSuccess(res) {
    this.state.isLoading.removeImage = false;
    this.state.msgs = [res.reason];
    this.state.images = res.data.Images;
  }
}

module.exports = alt.createStore(ImageStore, 'ImageStore');
