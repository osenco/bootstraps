<template>
	<thead>
		<tr class="tb-tnx-head">
			<th class="tb-tnx-id">
				<span>#</span>
			</th>
			<th v-for="(c, i) in columns" :key="i" :class="`tb-tnx-${c.id}`">
				{{ c.label }}
			</th>
			<th class="tb-tnx-action">
				<span>&nbsp;</span>
			</th>
		</tr>
	</thead>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	export default defineComponent({
		props: {
			columns: Array,
		},
	});
</script>
