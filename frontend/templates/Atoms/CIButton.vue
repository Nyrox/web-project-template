
<template>
	<div class="button">
		Hello {{ greeting }}
	</div>
</template>

<script>
export default {
	name: "ci-button",
	data: function() {
		return {
			greeting: "World!"
		}
	}
}
</script>

