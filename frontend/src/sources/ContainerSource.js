import ContainerService from '../services/ContainerService';
import ContainerActions from '../actions/ContainerActions';

const ContainerSource = {
  get() {
    return ContainerService.get();
  }
};

export default ContainerSource;
