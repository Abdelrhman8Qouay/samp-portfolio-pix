<script setup>
import { ref } from 'vue';

</script>

<template>
    <div class="parent w-full p-3 border-b-2 border-b-black">
        <div class="container">
            <nav class="nav w-full flex justify-start items-center gap-5">
                <a href="https://www.facebook.com/profile.php?id=100090009622327" target="_blank" class="text-white">
                    <img class="w-9 h-9 rounded-full hover:bg-opacity-30" src="@/assets/bussin_logo.png" alt="owner avatar">
                </a>
                <RouterLink :class="$route.path === '/' ? 'text-orange-500 font-bold' : 'text-white'" to="/">Home
                </RouterLink>
                <RouterLink :class="$route.path === '/contact' ? 'text-orange-500 font-bold' : 'text-white'" to="/contact">
                    Contact
                </RouterLink>
                <RouterLink :class="$route.path === '/projects' ? 'text-orange-500 font-bold' : 'text-white'"
                    to="/projects">
                    Projects
                </RouterLink>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.parent {
    // background: linear-gradient(45deg, var(--roof-color), var(--ground-color));
    background: var(--back-chars);
}

.nav {
    a {
        font-size: 16px;
        transition: var(--hover-trans);
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