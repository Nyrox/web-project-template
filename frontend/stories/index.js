import Vue from "vue";

import { storiesOf } from "@storybook/vue";

import CIButton from "../templates/Atoms/CIButton.vue";

storiesOf("CIButton", module)
	.add("story as a template", () => ({
		components: { "ci-button": CIButton },
		template: "<ci-button>story as a function template</ci-button>"
	}));
	