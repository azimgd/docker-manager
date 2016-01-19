import axios from 'axios';

const baseUrl = 'http://localhost:4000';

class ContainerService {
  get() {
    return axios.get(baseUrl + '/containers').then(res => res.data);
  }
}

export default new ContainerService();
