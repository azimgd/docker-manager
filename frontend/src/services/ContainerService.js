import axios from 'axios';

const baseUrl = 'http://localhost:4000';

class ContainerService {
  getContainers() {
    return axios.get(baseUrl + '/containers').then(res => res.data);
  }

  getContainer(containerId) {
    return axios.get(baseUrl + '/containers/' + containerId).then(res => res.data);
  }

  startContainer(containerId) {
    return axios.get(baseUrl + '/containers/' + containerId + '/start').then(res => res.data);
  }

  stopContainer(containerId) {
    return axios.get(baseUrl + '/containers/' + containerId + '/stop').then(res => res.data);
  }

  restartContainer(containerId) {
    return axios.get(baseUrl + '/containers/' + containerId + '/restart').then(res => res.data);
  }

  createContainer(cfg) {
    return axios.post(baseUrl + '/containers/create', cfg).then(res => res.data);
  }
}

export default new ContainerService();
