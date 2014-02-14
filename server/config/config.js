var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/degreesight',
        rootPath: rootPath,
        port: process.env.PORT || 1337
    },
    production: {
        db: 'mongodb://keeper:multivision@ds061518.mongolab.com:61518/degreesight',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}