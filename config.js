var fs, configFile, config;

fs = require('fs');
configFile = fs.readFileSync("config.json");
config = JSON.parse(config);

module.exports = config;