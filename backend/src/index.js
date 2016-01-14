import Express from './api/index';
import Docker from './logic/index';

const getContainers = (req, res) => {
  Docker.listContainers().then(containers => res.json(containers)).catch(err => res.json(err));
};

const getImages = (req, res) => {
  Docker.listImages().then(images => res.json(images)).catch(err => res.json(err));
};

Express.get('/containers', getContainers);
Express.get('/images', getImages);

Express.listen(4000);
