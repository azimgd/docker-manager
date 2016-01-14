import alt from '../utils/alt';
import ContainerActions from '../actions/ContainerActions';

class ContainerStore {
  constructor() {
    this.containers = [];

    this.bindListeners({
      handleGetContainers: ContainerActions.GET_CONTAINERS,
      handleUpdateContainers: ContainerActions.UPDATE_CONTAINERS,
    });
  }

  handleGetContainers(containers) {
  }

  handleUpdateContainers(containers) {
    this.containers = containers;
  }
}

module.exports = alt.createStore(ContainerStore, 'ContainerStore');
