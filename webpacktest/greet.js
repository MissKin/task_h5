/**
 * @author Auroral on 2017/10/30 0030.
 */
const config = require('../config.json');
module.exports = function(){
  var greet = document.createElement('div');
	greet.textContent = config.greetText;
	return greet;
}