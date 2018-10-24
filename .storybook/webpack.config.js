const path = require("path");
let common = require("../webpack-common.config");

module.exports = (d, c) => {

	d.module.rules.push(common.javascript_config);
	d.module.rules.push(common.vue_config);
	d.module.rules.push(common.sass_config);
	d.resolve.alias["vue$"] = "vue/dist/vue.esm.js";
	d.resolve.alias["settings$"] = path.resolve(__dirname, '../frontend/styles/_settings.scss');
	return d;
}