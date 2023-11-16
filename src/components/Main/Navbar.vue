<script setup>
import { ref } from 'vue';
import Menu from 'vue-material-design-icons/Menu.vue';

const opened = ref(false);
</script>

<template>
    <nav>
        <div class="w-full h-max p-3 absolute top-0 left-0 z-[30000] flex items-center justify-end">
            <Menu fillColor="#fff" :size="50" @click="opened = !opened" class="transition-transform ease-in duration-200"
                :class="{ 'rotate-180': opened }" />
        </div>

        <transition name="fade">
            <div v-if="opened" class="w-full h-full fixed top-0 left-0 bg-[rgba(72,72,72,0.85)] z-[28000]">
                <div class="nav w-full h-full mx-auto flex flex-col items-center gap-5 pt-20 p-7">
                    <RouterLink :class="$route.path === '/' ? 'active' : ''" to="/" @click="opened = false">Home
                    </RouterLink>
                    <RouterLink :class="$route.path === '/contact' ? 'active' : ''" to="/contact" @click="opened = false">
                        Contact
                    </RouterLink>
                    <RouterLink :class="$route.path === '/projects' ? 'active' : ''" to="/projects" @click="opened = false">
                        Projects
                    </RouterLink>
                </div>
            </div>
        </transition>
    </nav>
</template>

<style lang="scss" scoped>
.parent {
    // background: linear-gradient(45deg, var(--roof-color), var(--ground-color));
    background: var(--roof-color);
}

.active-nav {
    width: 100%;
    height: 100%;
    transition: all 0.4s ease-out;
}

.nav {
    a {
        font-size: 30px;
        transition: var(--hover-trans);
        position: relative;
        text-decoration: none;
        background: transparent;
        border-radius: 7px;
        width: 100%;
        height: max-content;
        padding: 5px 15px;
        z-index: 10;
        color: #fff;

        &::before {
            content: '';
            width: 100%;
            height: 100%;
            transform-origin: center;
            transform: scaleY(0);
            transition: transform 0.3s ease-out;
            background: #323539d5;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
        }

        &:hover {
            // transform: translateY(-5px) scale(1.10);
            color: #fff;

            &::before {
                transform: scaleY(1);
            }
        }

        &.active {
            color: #538fef;
            font-weight: 600;
        }
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