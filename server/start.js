// Transpile all code following this line with babel
require("@babel/register") ({
    presets: ["@babel/preset-env"]
});

// Import the rest of the application
module.exports = require('./server.js')