var fs, config;

fs = require('fs');
config = fs.readFileSync("./config.json", {encoding: "UTF-8"});
console.log(config);

module.exports = config;