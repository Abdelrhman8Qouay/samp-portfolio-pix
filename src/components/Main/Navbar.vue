
<template>
    <nav class="NavbarComp">

        <!-- Top Navbar -->
        <div class="w-full h-max p-3 absolute left-0 top-0 mb-4 z-[30000] flex flex-col items-center justify-end gap-3">
            <div class="topLab">
                <div class="nav-above max-lg:hidden w-full flex items-center gap-2 p-2">
                    <RouterLink :class="{ 'active': $route.path === '/' }" to="/" @click="openTab = false">Home
                    </RouterLink>
                    <RouterLink :class="{ 'active': $route.path === '/about' }" to="/about" @click="openTab = false">
                        About
                    </RouterLink>
                    <RouterLink :class="{ 'active': $route.path === '/contact' }" to="/contact" @click="openTab = false">
                        Contact
                    </RouterLink>
                    <RouterLink :class="{ 'active': $route.path === '/projects' }" to="/projects" @click="openTab = false">
                        Projects
                    </RouterLink>
                    <!-- <RouterLink :class="$route.path === '/projects/wordpress' ? 'active' : ''" to="/projects/wordpress"
                        @click="openTab = false">
                        WP Projects
                    </RouterLink> -->
                </div>
                <Menu fillColor="#fff" :size="40" @click="openTab = !openTab"
                    class="lg:hidden transition-transform ease-in duration-200" :class="{ 'rotate-180': openTab }" />
            </div>
        </div>

        <!-- Menu Tab -->
        <transition name="tab">
            <div v-if="openTab"
                class="w-full h-full fixed flex justify-center items-center top-0 left-0 bg-[rgba(72,72,72,1)] z-[28000]">
                <div class="nav w-full mx-auto flex flex-col items-center gap-5 pt-5 p-7">
                    <RouterLink :class="{ 'active': $route.path === '/' }" to="/" @click="openTab = false">Home
                    </RouterLink>
                    <RouterLink :class="{ 'active': $route.path === '/about' }" to="/about" @click="openTab = false">
                        About
                    </RouterLink>
                    <RouterLink :class="{ 'active': $route.path === '/contact' }" to="/contact" @click="openTab = false">
                        Contact
                    </RouterLink>
                    <RouterLink :class="{ 'active': $route.path === '/projects' }" to="/projects" @click="openTab = false">
                        Projects
                    </RouterLink>
                    <!-- <RouterLink :class="{ 'active': $route.path === '/projects/wordpress' }" to="/projects/wordpress"
                        @click="openTab = false">
                        WordPress Projects
                    </RouterLink> -->
                </div>
            </div>
        </transition>

        <!-- Settings Navbar -->
        <div v-if="all_links"
            class="settings max-lg:hidden w-[50px] p-5 pt-[30px] border-r border-r-black backdrop-blur-sm h-full fixed top-0 left-0 flex flex-col items-center gap-2 z-[28000]">

            <div class="image p-2 w-[40px] aspect-square mb-10">
                <img src="@/assets/logo.png" class="w-full h-full object-cover" alt="">
            </div>

            <SettingButton ico="facebook" :ico-size="20" shadow-color="white" :url="all_links[0]['facebook']" />
            <SettingButton ico="twitter" :ico-size="20" shadow-color="white" :url="all_links[0]['twitter']" />
            <SettingButton ico="linkedin" :ico-size="20" shadow-color="white" :url="all_links[0]['linkedin']" />
            <SettingButton ico="github" :ico-size="20" shadow-color="white" :url="all_links[0]['github']" />

            <div class="w-full h-[1px] bg-black my-5"></div>

            <div class="relative" @mousemove="cursorSetting = true" @mouseleave="cursorSetting = false">
                <div class="tooltip">
                    <SettingButton ico="cursor" :ico-size="20" shadow-color="white" :active="cursor_magic_work"
                        @click="cursor_magic_work = !cursor_magic_work" />
                    <span class="tooltip_text !text-[11px] w-max !top-[-80%]">cursor magic effect</span>
                </div>

                <div :class="{ '!opacity-100 !visible delay-500': cursorSetting }"
                    class="absolute left-full top-0 p-3 opacity-0 invisible transition-all [background:var(--ground-color)] rounded z-[20000]">
                    <div class="flex justify-between gap-2 mb-1">
                        <div class="w-6 aspect-square rounded-full bg-white" @click="cursor_magic_color = '#fff'"></div>
                        <div class="w-6 aspect-square rounded-full bg-blue-500" @click="cursor_magic_color = '#3b82f6'">
                        </div>
                        <div class="w-6 aspect-square rounded-full bg-[#475ac1]" @click="cursor_magic_color = '#475ac1'">
                        </div>
                        <div class="w-6 aspect-square rounded-full bg-[#ff0000]" @click="cursor_magic_color = '#ff0000'">
                        </div>
                    </div>
                    <input type="color" class="cursorColor h-[20px]" v-model="cursor_magic_color" name="cursorColor">
                </div>
            </div>
        </div>
    </nav>

    <CursorMagic v-if="cursor_magic_work" :work="cursor_magic_work" :color="cursor_magic_color" />
</template>

<script setup>
import { ref, onMounted } from 'vue';


import data_links from '@/data/links.json'
const all_links = ref(null)
onMounted(() => all_links.value = data_links);

// ========================== get icons ==========================
import Menu from 'vue-material-design-icons/Menu.vue';
import Cog from 'vue-material-design-icons/Cog.vue';

// ========================== get components ==========================
import CursorMagic from '@/components/Used/CursorMagic.vue';
import SettingButton from '@/components/Used/SettingButton.vue';

// ========================== Main Options ==========================
const openTab = ref(false);

// ========================== setting options ==========================
const cursor_magic_work = ref(true);
const cursor_magic_color = ref('#fff');
const cursorSetting = ref(false);

</script>

<style lang="scss" scoped>
// =============== Animated ===============
.tab-enter-active {
    transform-origin: top;
    animation: openNav 2.5s cubic-bezier(.5, .20, .20, -0.10);
    z-index: 28000;
}

.tab-leave-active {
    transform-origin: top;
    transform: scaleY(0);
    transition: transform 0.38s ease-in;
    z-index: 28000;
}

.tab-enter-from {
    transform-origin: top;
    transform: scaleY(0);
}

// .tab-leave-to {
// }

.setting-enter-active {
    transform-origin: top;
    animation: openNav 2.5s cubic-bezier(.5, .20, .20, -0.10);
    z-index: 28000;
}

.setting-leave-active {
    transform-origin: top;
    transform: scaleY(0);
    transition: transform 0.38s ease-in;
    z-index: 28000;
}

.setting-enter-from {
    transform-origin: top;
    transform: scaleY(0);
}


// =============== Styles ===============
.active-nav {
    width: 100%;
    height: 100%;
    transition: all 0.4s ease-out;
}

.nav {
    $color: #6e6e6e;
    $active_color: #fff;

    a {
        font-size: 30px;
        transition: var(--hover-trans);
        position: relative;
        text-decoration: none;
        background: transparent;
        border-radius: 7px;
        margin: 0 auto 0 auto;
        height: max-content;
        padding: 5px 15px;
        z-index: 10;
        color: $color;

        &::before {
            content: '';
            width: 100%;
            height: 2px;
            background: $color;
            position: absolute;
            left: 0;
            top: 100%;
            z-index: 0;
        }

        &:hover {
            // transform: translateY(-5px) scale(1.10);
            color: $active_color;

            &::before {
                transform: scaleY(1);
            }
        }

        &.active {
            color: $active_color;
            font-weight: 600;

            &::before {
                content: '';
                width: 100%;
                height: 4px;
                background: $active_color;
            }
        }
    }
}

.nav-above {
    $color: #c1c1c1;
    $active_color: #fff;

    a {
        font-size: 15px;
        font-weight: 200;
        position: relative;
        text-decoration: none;
        background: transparent;
        border-radius: 7px;
        margin: 0 auto 0 auto;
        height: max-content;
        padding: 5px 15px;
        z-index: 10;
        color: $color;

        transition: all var(--hover-trans);

        &::before {
            content: '';
            width: 100%;
            transform: scaleX(0);
            transition: transform 0.34s ease-in-out;
            transform-origin: left;
            height: 2px;
            background: $color;
            position: absolute;
            left: 0;
            top: 100%;
            z-index: 0;
        }

        &:hover {
            color: $active_color;
            font-weight: 500;

            &::before {
                transform: scaleY(1);
            }
        }

        &.active {
            color: $active_color;
            font-weight: 500;

            &::before {
                transform: scaleX(1);
                content: '';
                width: 100%;
                height: 4px;
                background: $active_color;
            }
        }
    }
}

// =============== All Key Frames ===============
@keyframes openNav {
    0% {
        transform: scaleY(0);
    }

    10% {
        transform: scaleY(1);
    }

    20% {
        transform: scaleY(0.89);
    }

    30% {
        transform: scaleY(1);
    }

    40% {
        transform: scaleY(0.99);
    }

    50% {
        transform: scaleY(1);
    }

    70% {
        transform: scaleY(1);
    }

    100% {
        transform: scaleY(1);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes bounce-in {
    0% {
        transform: scaleX(0) scaleY(0);
    }

    50% {
        transform: scaleX(1) scaleY(0);
    }

    100% {
        transform: scaleX(1) scaleY(1);
    }
}


.cursorColor {
    width: 100%;
    border: none;
    outline: none;
    -webkit-appearance: none;

    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    &::-webkit-color-swatch {
        border: none;
    }
}
</style>