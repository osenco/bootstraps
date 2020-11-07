<template>
	<div
		class="tab-pane fade"
		:class="[{ show: active }, { active: active }]"
		role="tab"
		:aria-labelledby="`${id}`"
	>
		<slot></slot>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	export default defineComponent({
		props: {
			active: Boolean,
			id: String,
		},
	});
</script>
