import Docker from 'dockerode';
const docker = new Docker({socketPath: '/var/run/docker.sock'});

docker.listContainers(function (err, containers) {
  console.log(containers);
});
