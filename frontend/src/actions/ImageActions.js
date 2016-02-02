import alt from '../utils/alt';

class ImageActions {
  getImagesSuccess(data) {
    return data;
  }

  getImagesFail(data) {
    return data;
  }

  getImagesLoading(data) {
    return data;
  }

  removeImageSuccess(data) {
    return data;
  }

  removeImageFail(data) {
    return data;
  }

  removeImageLoading(data) {
    return data;
  }
}

module.exports = alt.createActions(ImageActions);
