<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
// get components
import Navbar from '@/components/Main/Navbar.vue';
import Footer from '@/components/Main/Footer.vue';
</script>

<template>
  <Navbar v-once></Navbar>

  <main class="w-full min-h-[calc(100vh-68px)] relative">

    <router-view v-slot="{ Component }">
      <transition name="fade" appear>
        <component :is="Component" />
      </transition>
    </router-view>

  </main>

  <!-- data-aos="zoom-in-up" <<< if want to use aos transition -->
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s ease-out, opacity 0.6s;
}

.slide-enter-to {
  opacity: 1;
  transform: scale(1);
}

.slide-enter-from {
  opacity: 0;
  transform: scale(1);
}

.slide-leave-to {
  opacity: 0;
  transform: scale(0);
}

.slide-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
