import alt from '../utils/alt';
import ContainerSource from '../sources/ContainerSource';

class ContainerActions {
  getContainers() {
    return (dispatch) => {
      dispatch();

      ContainerSource.get()
        .then((containers) => {
          this.updateContainers(containers);
        })
        .catch((errorMessage) => {
          this.containersFailed(errorMessage);
        });
      }
  }

  updateContainers(containers) {
    return containers;
  }

  containersFailed(errorMessage) {
    return errorMessage;
  }
}

module.exports = alt.createActions(ContainerActions);
