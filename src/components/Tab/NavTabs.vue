<template>
	<ul class="nav nav-tabs" :id="id" role="tablist">
		<slot></slot>
	</ul>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	export default defineComponent({
		props: {
			id: String,
		},
	});
</script>
