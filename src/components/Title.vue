<template>
    <div class="text-gray-300 text-5xl max-md:text-2xl font-semibold mb-4">{{ txt }}</div>
</template>

<script setup>
import { ref, defineProps, toRefs } from 'vue';

// get props values
const props = defineProps({
    txt: String,
    where: String,
})
const { txt, where } = toRefs(props);
</script>

<style scoped></style>