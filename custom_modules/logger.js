const logger = require('winston');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + './../configs/config.json')[env];

let infoLogger = new logger.Logger({
    levels: {
        info: 0
    },
    transports: [
        new (logger.transports.File)({
            filename: `${config.logsDir}info.log`,
            level: 'info',
            json: false,
            formatter: formatter
        }),
        new (logger.transports.Console)({
            level: 'info'
        })
    ]
});

let errorLogger = new logger.Logger({
    levels: {
        error: 2
    },
    transports: [
        new (logger.transports.File)({
            filename: `${config.logsDir}error.log`,
            level: 'error',
            json: false,
            formatter: formatter
        }),
        new (logger.transports.Console)({
            level: 'error'
        })
    ]
});

let warningLogger = new logger.Logger({
    levels: {
        warning: 2
    },
    transports: [
        new (logger.transports.File)({
            filename: `${config.logsDir}warning.log`,
            level: 'warning',
            json: false,
            formatter: formatter
        }),
        new (logger.transports.Console)({
            level: 'warning'
        })
    ]
});

let debugLogger = new logger.Logger({
    levels: {
        debug: 0
    },
    transports: [
        new (logger.transports.File)({
            filename: `${config.logsDir}debug.log`,
            level: 'debug',
            json: false,
            formatter: formatter
        }),
        new (logger.transports.Console)({
            level: 'debug'
        })
    ]
});

function formatter(options) {
    return new Date().toString() + ' '+ options.level.toUpperCase() +' >>> '+ (undefined !== options.message ? options.message : '') +
        (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta, null, 2) : '' );
}

module.exports = {
    error: function () {
        errorLogger.error.apply(this, arguments);
    },
    warning: function() {
        warningLogger.warning.apply(this, arguments);
    },
    info: function () {
        infoLogger.info.apply(this, arguments);
    },
    debug: function() {
        debugLogger.debug.apply(this, arguments);
    }
};