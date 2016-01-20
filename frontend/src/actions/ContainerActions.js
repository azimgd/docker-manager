import alt from '../utils/alt';
import ContainerSource from '../sources/ContainerSource';

class ContainerActions {
  getContainersSuccess(data) {
    return data;
  }

  getContainersFail(data) {
    return data;
  }

  getContainersLoading(data) {
    return data;
  }

  getContainerSuccess(data) {
    return data;
  }

  getContainerFail(data) {
    return data;
  }

  getContainerLoading(data) {
    return data;
  }

  startContainerSuccess(data) {
    return data;
  }

  startContainerFail(data) {
    return data;
  }

  startContainerLoading(data) {
    return data;
  }

  stopContainerSuccess(data) {
    return data;
  }

  stopContainerFail(data) {
    return data;
  }

  stopContainerLoading(data) {
    return data;
  }

}

module.exports = alt.createActions(ContainerActions);
