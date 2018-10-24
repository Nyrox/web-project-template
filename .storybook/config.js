import {configure} from "@storybook/vue";

import Vue from "vue";


import CIButton from "../frontend/templates/Atoms/CIButton.vue";
import BaseStory from "../frontend/stories/BaseStory.vue";

Vue.component("ci-button", CIButton);
Vue.component("base-story", BaseStory);

function loadStories() {
	require("../frontend/stories");
}

configure(loadStories, module);