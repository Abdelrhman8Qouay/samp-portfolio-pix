<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
// get components
import Navbar from '@/components/Main/Navbar.vue';
import Footer from '@/components/Main/Footer.vue';
</script>

<template>
  <Navbar v-once></Navbar>

  <main class="w-full min-h-[calc(100vh-68px)]">

    <router-view v-slot="{ Component }">
      <transition name="fade" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <Footer v-once></Footer>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out, opacity 0.3s;
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
