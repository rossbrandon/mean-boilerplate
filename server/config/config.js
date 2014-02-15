var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/<your-local-db/>',
        rootPath: rootPath,
        port: process.env.PORT || 1337
    },
    production: {
        db: 'mongodb://<username/>:<password/>@<server/>:<port/>/<db-name/>',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};