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
      remote(state, containerId) {
        return ContainerService.startContainer(containerId);
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
    }
  }
};

export default ContainerSource;
