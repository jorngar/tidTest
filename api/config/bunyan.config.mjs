import bunyan from 'bunyan'
import bformat from 'bunyan-format'

const formatOut = bformat({outputMode: 'bunyan', jsonIndent: 2});
const startFormatOut = bformat({outputMode: 'short'})
const logFile = process.env.LOG_FILE || 'log';
const logLevel = process.env.LOG_LEVEL || 'debug';

const createLogger = bunyan.createLogger({name: 'jugones', stream: formatOut, level: logLevel});

const createStartLogger = bunyan.createLogger({name: 'jugones', stream: startFormatOut, level: logLevel});

function log() {
  return createLogger
}

function startLog() {
  return createStartLogger
}

export {log, startLog};