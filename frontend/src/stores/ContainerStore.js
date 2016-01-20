import alt from '../utils/alt';
import ContainerActions from '../actions/ContainerActions';
import ContainerSource from '../sources/ContainerSource';

class ContainerStore {
  constructor() {
    this.bindListeners({
      onGetContainersSuccess: ContainerActions.GET_CONTAINERS_SUCCESS,
      onGetContainersLoading: ContainerActions.GET_CONTAINERS_LOADING,
      onGetContainersFail: ContainerActions.GET_CONTAINERS_FAIL,

      onGetContainerSuccess: ContainerActions.GET_CONTAINER_SUCCESS,
      onGetContainerLoading: ContainerActions.GET_CONTAINER_LOADING,
      onGetContainerFail: ContainerActions.GET_CONTAINER_FAIL,
    });

    this.registerAsync(ContainerSource);

    this.state = {
      containers: [],
      container: {}
    };
  }

  onGetContainersFail(containers) {
    console.log('failed')
  }

  onGetContainersLoading(containers) {
    console.log('loading')
  }

  onGetContainersSuccess(containers) {
    this.setState({ containers });
  }

  onGetContainerFail(container) {
    console.log('failed')
  }

  onGetContainerLoading(container) {
    console.log('loading')
  }

  onGetContainerSuccess(container) {
    this.setState({ container });
  }
}

module.exports = alt.createStore(ContainerStore, 'ContainerStore');
