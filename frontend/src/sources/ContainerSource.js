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
    }
  }
};

export default ContainerSource;
