import winston from 'winston';

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: 'all'
    })
  ]
});

export default logger;
