
import Vue from "vue";

import App from "../templates/App.vue";
import CIButton from '../templates/Atoms/CIButton.vue';

new Vue({
	el: "#app",
	template: "<App />",
	components: {
		App,
		CIButton
	}
})
