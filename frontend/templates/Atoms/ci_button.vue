
<template>
	<div class="button" :data-look="look" >
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "ci-button",
	introduction: "A shitty button",
	description: `
	This \`Button\` is the shit yo.
	`,
	story: "Atoms",
	token: '<ci-button look="secondary">More</ci-button>',
	props: {
		look: {
			type: String,
			note: "One of several available styles.",
			default: function() { return "primary"; },
			validator: function(v) {
				return ["primary", "secondary", "dark", "light"].indexOf(v) !== -1
			}
		}
	}
}
</script>

<style lang="sass" scoped>
	@import "settings"

	.button
		display: inline-block
		padding: 4px 8px
		border: 2px solid currentColor

		font-size: 14px
		transition: color 200ms ease, background 200ms ease, border 200ms ease
		&:hover
			cursor: pointer

		&[data-look="primary"]
			color: get-color(text, inverted)
			background-color: get-color(base, primary)
			border-color: get-color(background, dark)

			&:hover
				color: get-color(base, selection)

		&[data-look="secondary"]
			color: get-color(text, inverted)
			background-color: get-color(blue, light)
			border-color: get-color(background, dark)

			&:hover
				color: get-color(base, selection)
</style>

