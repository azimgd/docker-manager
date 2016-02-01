import alt from '../utils/alt';

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

  restartContainerSuccess(data) {
    return data;
  }

  restartContainerFail(err) {
    return err;
  }

  restartContainerLoading(data) {
    return data;
  }

  createContainerSuccess(data) {
    return data;
  }

  createContainerFail(err) {
    return err;
  }

  createContainerLoading(data) {
    return data;
  }

  removeContainerSuccess(data) {
    return data;
  }

  removeContainerFail(err) {
    return err;
  }

  removeContainerLoading(data) {
    return data;
  }

  /**
   * Common
   */
  setDefaultStatus(err = '') {
    return err;
  }
}

module.exports = alt.createActions(ContainerActions);
