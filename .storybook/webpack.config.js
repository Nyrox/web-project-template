
let common = require("../webpack-common.config");

module.exports = (d, c) => {

	d.module.rules.push(common.javascript_config);
	d.module.rules.push(common.vue_config);
	
	return d;
}