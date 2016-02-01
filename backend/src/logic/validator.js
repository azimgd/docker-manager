const createContainerCfg = (cfg) => {
  let config = {};

  if(cfg.hasOwnProperty('Mounts') && cfg.Mounts) {
    config.Mounts = cfg.Mounts.map(volume => JSON.parse(volume));
  }

  return Object.assign(cfg, config);
};

export default {
  createContainerCfg
};
