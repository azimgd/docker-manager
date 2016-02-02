import axios from 'axios';

const baseUrl = 'http://localhost:4000';

class ImageService {
  get() {
    return axios.get(baseUrl + '/images').then(res => res.data);
  }

  removeImage(imageId) {
    return axios.get(baseUrl + '/images/' + imageId + '/remove').then(res => res.data);
  }
}

export default new ImageService();
