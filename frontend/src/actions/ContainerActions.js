import alt from '../utils/alt';
import ContainerSource from '../sources/ContainerSource';

class ContainerActions {
  getContainersSuccess(data) {
    return data;
  }

  getContainersFail(err) {
    return err;
  }

  getContainersLoading(data) {
    return data;
  }

  getContainerSuccess(data) {
    return data;
  }

  getContainerFail(err) {
    return err;
  }

  getContainerLoading(data) {
    return data;
  }

  startContainerSuccess(data) {
    return data;
  }

  startContainerFail(err) {
    return err;
  }

  startContainerLoading(data) {
    return data;
  }

  stopContainerSuccess(data) {
    return data;
  }

  stopContainerFail(err) {
    return err;
  }

  stopContainerLoading(data) {
    return data;
  }

  /**
   * 
   */
  clearErrors(err = '') {
    return err;
  }
}

module.exports = alt.createActions(ContainerActions);
