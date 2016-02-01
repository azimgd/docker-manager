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

      onStartContainerSuccess: ContainerActions.START_CONTAINER_SUCCESS,
      onStartContainerLoading: ContainerActions.START_CONTAINER_LOADING,
      onStartContainerFail: ContainerActions.START_CONTAINER_FAIL,

      onStopContainerSuccess: ContainerActions.STOP_CONTAINER_SUCCESS,
      onStopContainerLoading: ContainerActions.STOP_CONTAINER_LOADING,
      onStopContainerFail: ContainerActions.STOP_CONTAINER_FAIL,

      onRestartContainerSuccess: ContainerActions.RESTART_CONTAINER_SUCCESS,
      onRestartContainerLoading: ContainerActions.RESTART_CONTAINER_LOADING,
      onRestartContainerFail: ContainerActions.RESTART_CONTAINER_FAIL,

      onCreateContainerSuccess: ContainerActions.CREATE_CONTAINER_SUCCESS,
      onCreateContainerLoading: ContainerActions.CREATE_CONTAINER_LOADING,
      onCreateContainerFail: ContainerActions.CREATE_CONTAINER_FAIL,

      onRemoveContainerSuccess: ContainerActions.REMOVE_CONTAINER_SUCCESS,
      onRemoveContainerLoading: ContainerActions.REMOVE_CONTAINER_LOADING,
      onRemoveContainerFail: ContainerActions.REMOVE_CONTAINER_FAIL,

      onSetDefaultStatus: ContainerActions.SET_DEFAULT_STATUS,
    });

    this.registerAsync(ContainerSource);

    this.state = {
      containers: [],
      container: {},
      errors: [],
      msgs: [],
      isLoading: {
        getContainers: false,
        getContainer: false,
        startContainer: false,
        stopContainer: false,
        restartContainer: false,
        removeContainer: false,
      },
    };
  }

  onGetContainersFail(err) {
    this.state.isLoading.getContainers = false;
    this.state.errors = [err.data.reason];
  }

  onGetContainersLoading() {
    this.state.isLoading.getContainers = true;
  }

  onGetContainersSuccess(res) {
    this.state.isLoading.getContainers = false;
    this.state.msgs = [res.reason];
    this.state.containers = res.data;
  }

  onGetContainerFail(err) {
    this.state.isLoading.getContainer = false;
    this.state.errors = [err.data.reason];
  }

  onGetContainerLoading() {
    this.state.isLoading.getContainer = true;
  }

  onGetContainerSuccess(res) {
    this.state.isLoading.getContainer = false;
    this.state.msgs = [res.reason];
    this.state.container = res.data;
  }

  onStartContainerFail(err) {
    this.state.isLoading.startContainer = false;
    this.state.errors = [err.data.reason];
  }

  onStartContainerLoading() {
    this.state.isLoading.startContainer = true;
  }

  onStartContainerSuccess(res) {
    this.state.isLoading.startContainer = false;
    this.state.msgs = [res.reason];
    this.state.containers = res.data.Containers;
  }

  onStopContainerFail(err) {
    this.state.isLoading.stopContainer = false;
    this.state.errors = [err.data.reason];
  }

  onStopContainerLoading() {
    this.state.isLoading.stopContainer = true;
  }

  onStopContainerSuccess(res) {
    this.state.isLoading.stopContainer = false;
    this.state.msgs = [res.reason];
    this.state.containers = res.data.Containers;
  }

  onRestartContainerFail(err) {
    this.state.isLoading.restartContainer = false;
    this.state.errors = [err.data.reason];
  }

  onRestartContainerLoading() {
    this.state.isLoading.restartContainer = true;
  }

  onRestartContainerSuccess(res) {
    this.state.isLoading.restartContainer = false;
    this.state.msgs = [res.reason];
    this.state.containers = res.data.Containers;
  }

  onCreateContainerFail(err) {
    this.state.isLoading.createContainer = false;
    this.state.errors = [err.data.reason];
  }

  onCreateContainerLoading() {
    this.state.isLoading.createContainer = true;
  }

  onCreateContainerSuccess(res) {
    this.state.isLoading.createContainer = false;
    this.state.msgs = [res.reason];
    this.state.containers = res.data.Containers;
  }

  onRemoveContainerFail(err) {
    this.state.isLoading.removeContainer = false;
    this.state.errors = [err.data.reason];
  }

  onRemoveContainerLoading() {
    this.state.isLoading.removeContainer = true;
  }

  onRemoveContainerSuccess(res) {
    this.state.isLoading.removeContainer = false;
    this.state.msgs = [res.reason];
    this.state.containers = res.data.Containers;
  }

  /**
   *
   */
  onSetDefaultStatus() {
    this.state.msgs = [];
    this.state.errors = [];
  }
}

module.exports = alt.createStore(ContainerStore, 'ContainerStore');
