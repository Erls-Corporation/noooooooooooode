var path = require('path');

module.exports = {
    host: '0.0.0.0',
    port: 3000,
    skriptsPath: path.join(path.dirname(module.filename), 'skripts')
};