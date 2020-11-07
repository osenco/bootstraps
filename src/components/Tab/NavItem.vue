<template>
	<li class="nav-item" :class="{ active: active }">
		<a class="nav-link" :id="id" data-toggle="tab" :href="`#${id}`" role="tab" :aria-controls="id" :aria-selected="active">
            <slot></slot>
        </a>
	</li>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	export default defineComponent({
		props: {
            active: Boolean,
            id: String
		},
	});
</script>
