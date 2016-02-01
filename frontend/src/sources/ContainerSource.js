import ContainerService from '../services/ContainerService';

const ContainerSource = (alt) => {
  const ContainerActions = alt.actions.ContainerActions;

  return {
    getContainers: {
      remote(state) {
        return ContainerService.getContainers();
      },
      loading: ContainerActions.getContainersLoading,
      success: ContainerActions.getContainersSuccess,
      error: ContainerActions.getContainersFail,
    },

    getContainer: {
      remote(state, containerId) {
        return ContainerService.getContainer(containerId);
      },
      loading: ContainerActions.getContainerLoading,
      success: ContainerActions.getContainerSuccess,
      error: ContainerActions.getContainerFail,
    },

    startContainer: {
      remote(state, containerId, cfg = {}) {
        console.log(cfg);
        return ContainerService.startContainer(containerId, cfg);
      },
      loading: ContainerActions.startContainerLoading,
      success: ContainerActions.startContainerSuccess,
      error: ContainerActions.startContainerFail,
    },

    stopContainer: {
      remote(state, containerId) {
        return ContainerService.stopContainer(containerId);
      },
      loading: ContainerActions.stopContainerLoading,
      success: ContainerActions.stopContainerSuccess,
      error: ContainerActions.stopContainerFail,
    },

    restartContainer: {
      remote(state, containerId) {
        return ContainerService.restartContainer(containerId);
      },
      loading: ContainerActions.restartContainerLoading,
      success: ContainerActions.restartContainerSuccess,
      error: ContainerActions.restartContainerFail,
    },

    createContainer: {
      remote(state, cfg) {
        return ContainerService.createContainer(cfg);
      },
      loading: ContainerActions.createContainerLoading,
      success: ContainerActions.createContainerSuccess,
      error: ContainerActions.createContainerFail,
    },

    removeContainer: {
      remote(state, containerId) {
        return ContainerService.removeContainer(containerId);
      },
      loading: ContainerActions.removeContainerLoading,
      success: ContainerActions.removeContainerSuccess,
      error: ContainerActions.removeContainerFail,
    },
  };
};

export default ContainerSource;
