var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/<local-db-name/>',
        rootPath: rootPath,
        port: process.env.PORT || 1337
    },
    production: {
        db: 'mongodb://<username/>:<password/>@<server/>:<port/>/<db-name/>',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};

// Don't forget to run heroku config:set NODE_ENV=production when deploying