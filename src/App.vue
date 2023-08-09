<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
// get components
</script>

<template>
  <Navbar></Navbar>

  <main class="w-full min-h-screen bg-white">
    <RouterView />
  </main>
</template>

<style scoped></style>
