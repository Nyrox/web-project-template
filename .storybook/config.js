import Vue from "vue";

import {configure} from "@storybook/vue";
import { storiesOf, addDecorator } from "@storybook/vue";

const components = require.context("../frontend/templates/", true, /\.vue$/);

function loadStories() {
	components.keys().forEach((key) => {
		let component = components(key);
		let c_exports = component.default;

		Vue.component(c_exports.name, c_exports);

		storiesOf(c_exports.story, component)
			.add(c_exports.name, () => c_exports.token)
	});
}

configure(loadStories, module);