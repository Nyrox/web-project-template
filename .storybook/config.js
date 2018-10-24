import {configure} from "@storybook/vue";

import Vue from "vue";


import CIButton from "../frontend/templates/Atoms/CIButton.vue";

Vue.component("ci-button", CIButton);

function loadStories() {
	require("../frontend/stories");
}

configure(loadStories, module);