import Vue from "vue";
import propDoc from "propdoc";

import {configure} from "@storybook/vue";
import { storiesOf, addDecorator } from "@storybook/vue";
import VRuntimeTemplate from "v-runtime-template";

const components = require.context("../frontend/templates/", true, /\.vue$/);

function loadStories() {
	components.keys().forEach((key) => {
		let component = components(key);
		let c_exports = component.default;

		Vue.component(c_exports.name, c_exports);

		storiesOf(c_exports.story, component)
			.add(c_exports.name, () => ({
				template: `
					<div class="container component-doc">
						<prop-doc :component="self"></prop-doc>
						<v-runtime-template :template="token"></v-runtime-template>
					</div>
				`,
				data: () => ({
					self: c_exports,
					token: c_exports.token
				}),
				components: {
					VRuntimeTemplate,
					propDoc
				}
			}));
	});
}

configure(loadStories, module);