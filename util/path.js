const path = require('path');

// this exports the folder location of main file i.e. app.js
module.exports = path.dirname(require.main.filename);