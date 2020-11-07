<template>
	<input
		type="number"
		class="form-control"
		:class="
			(size == 'lg' ? 'form-control-lg' : '')(
				size == 'sm' ? 'form-control-sm' : ''
			)
		"
		:min="min"
		:max="max"
		:step="step"
	/>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	export default defineComponent({
		props: {
			size: String,
			max: Number,
			min: Number,
			step: Number,
		},
	});
</script>
