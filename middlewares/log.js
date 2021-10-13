const log4js = require('log4js');
const path = require('path');
log4js.configure({
    appenders: {
        production: {
            type: 'dateFile',
            filename: path.join('log/debug', 'nodesql.log'),
            daysToKeep: 7,
            layout: {
                type: 'pattern',
                pattern: '[%d] [%p] %m'
            }
        },
        console: {
            type: 'console',
        },
        error: {
            type: 'dateFile',
            filename: path.join('log/error/', 'nodesql.log'),
            daysToKeep: 7,
            layout: {
                type: 'pattern',
                pattern: '[%d] [%p] %m'
            }
        },
    },
    categories: {
        default: { appenders: [ 'production' ], level: 'debug' },
        error: { appenders: [ 'error', 'console' ], level: 'error' },
    },
});

const defaultLogger = log4js.getLogger();
const errorLogger = log4js.getLogger('error');

const loggerProxy = {};
const levels = log4js.levels.levels;
levels.forEach(level => {
    const curLevel = level.levelStr.toLocaleLowerCase();
    loggerProxy[curLevel] = (...params) => {
        defaultLogger[curLevel](...params);
        errorLogger[curLevel](...params);
    }
})

exports.logger = loggerProxy;