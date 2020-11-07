<template>
    <div :class="[type == 'normal' ? 'container' : 'container-fluid']">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        type: String
    }
})
</script>