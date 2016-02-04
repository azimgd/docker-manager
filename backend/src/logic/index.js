import Docker from 'dockerode';
const docker = new Docker({
  socketPath: '/var/run/docker.sock'
});

const listContainers = (all = 'true') => {
  return new Promise((resolve, reject) => {
    docker.listContainers({ all }, (err, containers) => {
      if(err) {
        return reject(err);
      }

      return resolve({
        json: "",
        reason: "",
        statusCode: 200,
        data: containers
      });
    });
  });
}

const inspectContainer = (containerId) => {
  return new Promise((resolve, reject) => {
    const container = docker.getContainer(containerId);

    container.inspect((err, data) => {
      if(err) {
        return reject(err);
      }

      return resolve({
        json: "",
        reason: "",
        statusCode: 200,
        data
      });
    })
  });
}

const startContainer = (containerId, cfg = {}) => {
  return new Promise((resolve, reject) => {
    const container = docker.getContainer(containerId);

    container.start(cfg, (err, data) => {
      if(err) {
        return reject(err);
      }

      return resolve({ Id: containerId });
    })
  }).then((containerId) => {
    return listContainers().then((containers) => {
      const { data } = containers;

      return Object.assign({}, containerId, { Containers: data });
    });
  }).then((data) => {
    return {
      json: "",
      reason: "container started",
      statusCode: 200,
      data
    }
  });
}

const restartContainer = (containerId) => {
  return new Promise((resolve, reject) => {
    const container = docker.getContainer(containerId);

    container.restart((err, data) => {
      if(err) {
        return reject(err);
      }

      return resolve({ Id: containerId });
    })
  }).then((containerId) => {
    return listContainers().then((containers) => {
      const { data } = containers;

      return Object.assign({}, containerId, { Containers: data });
    });
  }).then((data) => {
    return {
      json: "",
      reason: "container restarted",
      statusCode: 200,
      data
    }
  });
}

const stopContainer = (containerId) => {
  return new Promise((resolve, reject) => {
    const container = docker.getContainer(containerId);

    container.stop((err, data) => {
      if(err) {
        return reject(err);
      }

      return resolve({ Id: containerId });
    })
  }).then((containerId) => {
    return listContainers().then((containers) => {
      const { data } = containers;

      return Object.assign({}, containerId, { Containers: data });
    });
  }).then((data) => {
    return {
      json: "",
      reason: "container stopped",
      statusCode: 200,
      data
    }
  });
}

const removeContainer = (containerId) => {
  return new Promise((resolve, reject) => {
    const container = docker.getContainer(containerId);

    container.remove((err, data) => {
      if(err) {
        return reject(err);
      }

      return resolve({ Id: containerId });
    })
  }).then((containerId) => {
    return listContainers().then((containers) => {
      const { data } = containers;

      return Object.assign({}, containerId, { Containers: data });
    });
  }).then((data) => {
    return {
      json: "",
      reason: "container removed",
      statusCode: 200,
      data
    }
  });
}

const listImages = () => {
  return new Promise((resolve, reject) => {
    docker.listImages((err, images) => {
      if(err) {
        return reject(err);
      }

      return resolve({
        json: "",
        reason: "",
        statusCode: 200,
        data: images
      });
    });
  });
}

const removeImage = (imageId) => {
  return new Promise((resolve, reject) => {
    const image = docker.getImage(imageId);

    image.remove((err, data) => {
      if(err) {
        return reject(err);
      }

      return resolve({ Id: imageId });
    })
  }).then((imageId) => {
    return listImages().then((images) => {
      const { data } = images;

      return Object.assign({}, imageId, { Images: data });
    });
  }).then((data) => {
    return {
      json: "",
      reason: "image removed",
      statusCode: 200,
      data
    }
  });
}

const createContainer = (cfg) => {
  const config = Object.assign({}, cfg);

  return new Promise((resolve, reject) => {
    docker.createContainer(config, (err, container) => {
      if(err) {
        return reject(err);
      }

      resolve({ Id: container.id });
    })
  })
  .then(container => {
    return startContainer(container.Id, {
      Binds: config.Binds,
    });
  })
  .then((data) => {
    return {
      json: "",
      reason: "container created",
      statusCode: 200,
      data
    }
  });
}


export default {
  createContainer,
  listContainers,
  inspectContainer,
  startContainer,
  restartContainer,
  stopContainer,
  removeContainer,
  listImages,
  removeImage,
};
