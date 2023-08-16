<template>
    <h2 class="text-white text-3xl max-md:text-xl max-sm:text-lg my-2 w-full font-semibold font-mono"
        :class="'text-' + where"><span class="text-green-500 font-bold">|☼|</span>
        {{
            txt }}
        <span class="text-green-500 font-bold">|☼|</span>
    </h2>
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