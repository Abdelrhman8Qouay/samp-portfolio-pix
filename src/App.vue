
<template>
  <Navbar />

  <main class="w-full min-h-[calc(100vh-68px)] relative overflow-hidden">

    <router-view v-slot="{ Component }">
      <transition name="paged" appear>
        <component :is="Component" />
      </transition>
    </router-view>

  </main>

  <!-- data-aos="zoom-in-up" <<< if want to use aos transition -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
// get components
import Navbar from '@/components/Main/Navbar.vue';
import Footer from '@/components/Main/Footer.vue';



</script>

<style lang="scss">
.paged-enter-active,
.paged-leave-active {
  transition: all 0.4s ease-out, opacity 0.4s;
}

.paged-enter-to {
  opacity: 1;
}

.paged-enter-from {
  opacity: 0;
}

.paged-leave-to {
  opacity: 0;
}

.paged-leave-from {
  opacity: 1;
}
</style>
