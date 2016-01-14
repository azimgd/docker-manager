import alt from '../utils/alt';
import ContainerActions from '../actions/ContainerActions';
import ContainerSource from '../sources/ContainerSource';

class ContainerStore {
  constructor() {
    this.bindListeners({
      onGetContainersSuccess: ContainerActions.GET_CONTAINERS_SUCCESS,
      onGetContainersLoading: ContainerActions.GET_CONTAINERS_LOADING,
      onGetContainersFail: ContainerActions.GET_CONTAINERS_FAIL,
    });

    this.registerAsync(ContainerSource);

    this.state = {
      containers: []
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
}

module.exports = alt.createStore(ContainerStore, 'ContainerStore');
