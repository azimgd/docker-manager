import fs from 'fs';
import Docker from 'dockerode';
const docker = new Docker({
  protocol: 'https',
  host: '192.168.99.100',
  port: process.env.DOCKER_PORT || 2376,
  ca: fs.readFileSync(process.env.DOCKER_CERT_PATH + '/ca.pem'),
  cert: fs.readFileSync(process.env.DOCKER_CERT_PATH + '/cert.pem'),
  key: fs.readFileSync(process.env.DOCKER_CERT_PATH + '/key.pem')
});

const listContainers = () => {
  return new Promise((resolve, reject) => {
    docker.listContainers((err, containers) => {
      if(err) {
        return reject(err);
      }

      return resolve(containers);
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

      return resolve(data);
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

      return resolve(data);
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

      return resolve(data);
    })
  });
}

const listImages = () => {
  return new Promise((resolve, reject) => {
    docker.listImages((err, images) => {
      if(err) {
        return reject(err);
      }

      return resolve(images);
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

        return resolve(images);
      });
    });
  });
}


export default {
  listContainers,
  inspectContainer,
  startContainer,
  stopContainer,
  listImages
};
