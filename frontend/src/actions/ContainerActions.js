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
}

module.exports = alt.createActions(ContainerActions);
