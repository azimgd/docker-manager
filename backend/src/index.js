import Express from './api/index';
import Docker from './logic/index';

const getContainers = (req, res) => {
  Docker.listContainers().then(containers => res.json(containers)).catch(err => res.json(err));
};

const inspectContainer = (req, res) => {
  const containerId = req.params.id || null;

  Docker.inspectContainer(containerId)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
};

const startContainer = (req, res) => {
  const containerId = req.params.id || null;

  Docker.startContainer(containerId)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
};

const stopContainer = (req, res) => {
  const containerId = req.params.id || null;

  Docker.stopContainer(containerId)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
};

const getImages = (req, res) => {
  Docker.listImages()
    .then(images => res.json(images))
    .catch(err => res.status(500).json(err));
};

Express.get('/containers', getContainers);
Express.get('/containers/:id', inspectContainer);
Express.get('/containers/:id/start', startContainer);
Express.get('/containers/:id/stop', stopContainer);
Express.get('/images', getImages);

Express.listen(4000);
