import axios from 'axios';

const baseUrl = 'http://localhost:4000';

class ContainerService {
  getContainers() {
    return axios.get(baseUrl + '/containers').then(res => res.data);
  }

  getContainer(containerId) {
    return axios.get(baseUrl + '/containers/' + containerId).then(res => res.data);
  }
}

export default new ContainerService();
