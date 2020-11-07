<template>
	<div class="tab-content" :id="id">
		<slot></slot>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	export default defineComponent({
		props: {
			id: String,
		},
	});
</script>
