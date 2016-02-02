import ImageService from '../services/ImageService';

const ImageSource = (alt) => {
  const ImageActions = alt.actions.ImageActions;

  return {
    getImages: {
      remote(state) {
        return ImageService.get();
      },
      loading: ImageActions.getImagesLoading,
      success: ImageActions.getImagesSuccess,
      error: ImageActions.getImagesFail,
    },
    removeImage: {
      remote(state, imageId) {
        return ImageService.removeImage(imageId);
      },
      loading: ImageActions.removeImageLoading,
      success: ImageActions.removeImageSuccess,
      error: ImageActions.removeImageFail,
    },
  };
};

export default ImageSource;
