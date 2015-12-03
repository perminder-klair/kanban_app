var ghpages = require('gh-pages');
var config = require('../webpack.config.js');

main();

function main() {
  ghpages.publish(config.output.path, console.error.bind(console));
}
