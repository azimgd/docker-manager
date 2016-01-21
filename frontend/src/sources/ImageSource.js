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
  };
};

export default ImageSource;
