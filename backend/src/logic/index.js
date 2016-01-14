import Docker from 'dockerode';
const docker = new Docker({socketPath: '/var/run/docker.sock'});

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

const listImages = () => {
  return new Promise((resolve, reject) => {
    docker.listImages((err, containers) => {
      if(err) {
        return reject(err);
      }

      return resolve(containers);
    });
  });
}


export default {
  listContainers,
  listImages
};
