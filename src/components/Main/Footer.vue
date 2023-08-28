<script setup>
import { ref } from 'vue';


const madeIn = ref(new Date().getFullYear());
</script>

<template>
    <div class="parent w-full p-3 border-t-2 border-t-black">
        <div class="container h-full">
            <nav class="nav w-full flex justify-between items-center gap-5 h-full max-md:flex-col">
                <div class="flex justify-start items-center gap-5 max-md:order-1">
                    <!-- <a href="https://www.facebook.com/profile.php?id=100090009622327" target="_blank" class="text-white">
                        <img class="w-9 h-9 rounded-full hover:bg-opacity-30" src="@/assets/bussin_logo.png"
                            alt="owner avatar">
                    </a> -->
                    <!-- Copyright -->
                    <div class="text-start p-1 text-white">
                        © {{ madeIn }} Copyright:
                        <a class="main-text hover:text-cyan-300 transition"
                            href="https://www.facebook.com/profile.php?id=100090009622327">Abdelrhman
                            Qouay</a> & madeWith 💖
                    </div>
                    <!-- Copyright -->
                </div>
                <div class="w-[60px] h-[60px]">
                    <img class="w-full h-full" style="transform: rotateY(180deg);" loading="lazy"
                        src="@/assets/gif/char.gif" alt="pixel character">
                </div>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.parent {
    background: var(--back-chars);
}
</style>