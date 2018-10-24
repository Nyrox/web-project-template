import Vue from "vue";

import { storiesOf, addDecorator } from "@storybook/vue";

import BaseStory from "./BaseStory.vue";
import Variation from "./Variation.vue";
import CIButton from "../templates/Atoms/CIButton.vue";

Vue.component("base-story", BaseStory);
Vue.component("variation", Variation);
Vue.component("ci-button", CIButton);

storiesOf("Atoms/CIButton", module)
	.add("Simple Button", () => ({
		template: `
			<base-story>
				<variation title="Primary">
					<ci-button>Read</ci-button>
				</variation>
				<variation title="Secondary">
					<ci-button look="secondary">More</ci-button>
				</variation>
			</base-story>
		`
	}))
;
	