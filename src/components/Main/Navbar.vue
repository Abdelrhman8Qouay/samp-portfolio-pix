<script setup>
import { ref } from 'vue';

</script>

<template>
    <div class="parent max-w-[1024px] mx-auto w-full">

        <nav class="nav w-full flex justify-start items-center gap-5">
            <a href="https://www.facebook.com/profile.php?id=100090009622327" target="_blank" class="text-white">
                <img class="w-9 h-9 rounded-full hover:bg-opacity-30" src="@/assets/bussin_logo.png" alt="owner avatar">
            </a>
            <RouterLink :class="$route.path === '/' ? 'text-orange-500 font-bold' : 'text-black'" to="/">Home
            </RouterLink>
            <RouterLink :class="$route.path === '/contact' ? 'text-orange-500 font-bold' : 'text-black'" to="/contact">
                Contact Us
            </RouterLink>
            <RouterLink :class="$route.path === '/projects' ? 'text-orange-500 font-bold' : 'text-black'" to="/projects">
                Projects
            </RouterLink>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
// .parent {}

.nav {
    a {
        font-size: 16px;
        // transition: var(--hover-trans);
        position: relative;
        text-decoration: none;
        font-family: 'Courier New', Courier, monospace;

        &:hover {
            transform: translateY(-5px) scale(1.10);
            color: chocolate;
        }
    }
}
</style>