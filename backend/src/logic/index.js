import fs from 'fs';
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

const startContainer = (containerId) => {
  return new Promise((resolve, reject) => {
    const container = docker.getContainer(containerId);

    container.start((err, data) => {
      if(err) {
        return reject(err);
      }

      return resolve({
        json: "",
        reason: "container started",
        statusCode: 200,
        data: { Id: containerId }
      });
    })
  });
}

const restartContainer = (containerId) => {
  return new Promise((resolve, reject) => {
    const container = docker.getContainer(containerId);

    container.restart((err, data) => {
      if(err) {
        return reject(err);
      }

      return resolve({
        json: "",
        reason: "container restarted",
        statusCode: 200,
        data: { Id: containerId }
      });
    })
  });
}

const stopContainer = (containerId) => {
  return new Promise((resolve, reject) => {
    const container = docker.getContainer(containerId);

    container.stop((err, data) => {
      if(err) {
        return reject(err);
      }

      return resolve({
        json: "",
        reason: "container stopped",
        statusCode: 200,
        data: { Id: containerId }
      });
    })
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

const createContainer = (cfg) => {
  const config = Object.assign({
    Image: 'ubuntu',
    Cmd: ['/bin/bash'],
    name: 'ubuntu-test'
  }, cfg);

  return new Promise((resolve, reject) => {
    docker.createContainer(config, (err, container) => {
      container.start((err, data) => {
        if(err) {
          return reject(err);
        }

        return resolve({
          json: "",
          reason: "container created",
          statusCode: 200,
          data
        });
      });
    });
  });
}


export default {
  listContainers,
  inspectContainer,
  startContainer,
  restartContainer,
  stopContainer,
  listImages
};
