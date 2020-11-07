<template>
	<router-link class="btn btn-link" v-if="type == `router`" :to="path">
		<slot></slot>
	</router-link>
	<a class="btn btn-link" :href="path" v-else>
		<slot></slot>
	</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        type: String,
        path: String
    }
})
</script>

