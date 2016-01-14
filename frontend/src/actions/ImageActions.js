import alt from '../utils/alt';
import ImageSource from '../sources/ImageSource';

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
}

module.exports = alt.createActions(ImageActions);
