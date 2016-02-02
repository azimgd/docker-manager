import logger from '../logger';

const generateResponse = (req, res) => {
  const success = (data) => {
    return res.json(data);
  };

  const failure = (data) => {
    logger.log('info', data);
    return res.status(500).json(data);
  };

  return {
    success,
    failure,
  };
};

export default {
  generateResponse
};
