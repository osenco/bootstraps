<template>
	<input
		type="file"
		class="form-control"
		:class="
			(size == 'lg' ? 'form-control-lg' : '')(
				size == 'sm' ? 'form-control-sm' : ''
			)
		"
	/>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	export default defineComponent({
		props: {
			size: String,
		},
	});
</script>
