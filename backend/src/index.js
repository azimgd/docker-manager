import Express from './api/index';
import Docker from './logic/index';
import Validator from './logic/validator';
import Helpers from './logic/helpers';

const getContainers = (req, res) => {
  Docker.listContainers().then(containers => res.json(containers)).catch(err => res.json(err));
};

const inspectContainer = (req, res) => {
  const response = Helpers.generateResponse(req, res);
  const containerId = req.params.id || null;

  Docker.inspectContainer(containerId)
    .then(data => response.success(data))
    .catch(err => response.failure(err));
};

const startContainer = (req, res) => {
  const response = Helpers.generateResponse(req, res);
  const containerId = req.params.id || null;
  const cfg = req.body || {};

  Docker.startContainer(containerId, cfg)
    .then(data => response.success(data))
    .catch(err => response.failure(err));
};

const restartContainer = (req, res) => {
  const response = Helpers.generateResponse(req, res);
  const containerId = req.params.id || null;

  Docker.restartContainer(containerId)
    .then(data => response.success(data))
    .catch(err => response.failure(err));
};

const stopContainer = (req, res) => {
  const response = Helpers.generateResponse(req, res);
  const containerId = req.params.id || null;

  Docker.stopContainer(containerId)
    .then(data => response.success(data))
    .catch(err => response.failure(err));
};

const removeContainer = (req, res) => {
  const response = Helpers.generateResponse(req, res);
  const containerId = req.params.id || null;

  Docker.removeContainer(containerId)
    .then(data => response.success(data))
    .catch(err => response.failure(err));
};

const createContainer = (req, res) => {
  const response = Helpers.generateResponse(req, res);
  const cfg = Validator.createContainerCfg(req.body || {});

  Docker.createContainer(cfg)
    .then(data => response.success(data))
    .catch(err => response.failure(err));
};

const getImages = (req, res) => {
  const response = Helpers.generateResponse(req, res);
  Docker.listImages()
    .then(images => res.json(images))
    .catch(err => response.failure(err));
};

const removeImage = (req, res) => {
  const response = Helpers.generateResponse(req, res);
  const imageId = req.params.id || null;

  Docker.removeImage(imageId)
    .then(data => response.success(data))
    .catch(err => response.failure(err));
};

Express.get('/containers', getContainers);
Express.post('/containers/create', createContainer);
Express.get('/containers/:id', inspectContainer);
Express.post('/containers/:id/start', startContainer);
Express.get('/containers/:id/restart', restartContainer);
Express.get('/containers/:id/stop', stopContainer);
Express.get('/containers/:id/remove', removeContainer);
Express.get('/images', getImages);
Express.get('/images/:id/remove', removeImage);

Express.listen(4000);
