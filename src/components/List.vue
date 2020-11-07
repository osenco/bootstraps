<template>
    <ul :class="listClass">
        <li :class="itemClass" v-for="(o, i) in items" :key="i">
            {{ o }}
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "list",
    props: {
        items: Array,
        listClass: String,
        itemClass: String
    }
})
</script>