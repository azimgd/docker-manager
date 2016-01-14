import ContainerService from '../services/ContainerService';

const ContainerSource = (alt) => {
  const ContainerActions = alt.actions.ContainerActions;

  return {
    getContainers: {
      remote(state) {
        return ContainerService.get();
      },
      loading: ContainerActions.getContainersLoading,
      success: ContainerActions.getContainersSuccess,
      error: ContainerActions.getContainersFail,
    }
  }
};

export default ContainerSource;
