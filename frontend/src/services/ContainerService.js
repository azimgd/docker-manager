import axios from 'axios';

const baseUrl = 'http://172.16.13.170:4000';

class ContainerService {
  get() {
    return axios.get(baseUrl + '/containers').then(res => res.data);
  }
}

export default new ContainerService();
