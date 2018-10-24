

<template>
	<div class="variation">
		<h3>{{ title }}</h3>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		title: String
	}
}
</script>

<style lang="sass" scoped>

.variation
	h3
		border-bottom: 1px solid grey
		margin-bottom: 12px

</style>

