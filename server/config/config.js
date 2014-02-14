var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/ds-local',
        rootPath: rootPath,
        port: process.env.PORT || 1337
    },
    production: {
        db: 'mongodb://keeper:proth3anDev!@ds033629.mongolab.com:33629/ds-dev-aws',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}