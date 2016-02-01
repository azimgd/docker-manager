import Express from './api/index';
import Docker from './logic/index';
import Validator from './logic/validator';

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
  const cfg = req.body || {};

  Docker.startContainer(containerId, cfg)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
};

const restartContainer = (req, res) => {
  const containerId = req.params.id || null;

  Docker.restartContainer(containerId)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
};

const stopContainer = (req, res) => {
  const containerId = req.params.id || null;

  Docker.stopContainer(containerId)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
};

const removeContainer = (req, res) => {
  const containerId = req.params.id || null;

  Docker.removeContainer(containerId)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
};

const createContainer = (req, res) => {
  const cfg = Validator.createContainerCfg(req.body || {});

  Docker.createContainer(cfg)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
};

const getImages = (req, res) => {
  Docker.listImages()
    .then(images => res.json(images))
    .catch(err => res.status(500).json(err));
};

Express.get('/containers', getContainers);
Express.post('/containers/create', createContainer);
Express.get('/containers/:id', inspectContainer);
Express.post('/containers/:id/start', startContainer);
Express.get('/containers/:id/restart', restartContainer);
Express.get('/containers/:id/stop', stopContainer);
Express.get('/containers/:id/remove', removeContainer);
Express.get('/images', getImages);

Express.listen(4000);
