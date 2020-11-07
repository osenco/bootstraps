<template>
	<table class="table table-tranx pmd-table px-3">
		<t-header :columns="columns" />
		<t-body :records="records" :columns="columns" :table="table" />
		<t-footer :columns="columns" class="d-none" />
	</table>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import THeader from "./Header.vue";
	import TBody from "./Body.vue";
	import TFooter from "./Footer.vue";

	export default defineComponent({
		name: "data-table",
		components: {
			THeader,
			TBody,
			TFooter,
		},
		props: {
			records: Array,
			columns: Array,
			table: String
		},
	});
</script>
