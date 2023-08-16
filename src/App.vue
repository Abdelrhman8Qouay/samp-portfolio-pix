<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
// get components
import Navbar from '@/components/Main/Navbar.vue';
import Footer from '@/components/Main/Footer.vue';
</script>

<template>
  <Navbar></Navbar>

  <main class="w-full min-h-[calc(100vh-68px)]">
    <RouterView />
  </main>

  <Footer></Footer>
</template>

<style scoped></style>
