
<template>
	<div class="button">
		Hello {{ greeting }}
	</div>
</template>

<script>
module.exports = {
	data: function() {
		return {
			greeting: "World!"
		}
	}
}
</script>
