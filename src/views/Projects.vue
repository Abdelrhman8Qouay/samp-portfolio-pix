
<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { getImageUrl } from '@/models/work.js';
// get components
import Title from '@/components/Title.vue';
import Button from '@/components/Button.vue';
// get icons
import Star from 'vue-material-design-icons/Star.vue';
import CameraIris from 'vue-material-design-icons/CameraIris.vue';
import Close from 'vue-material-design-icons/Close.vue';

// get data
import projects_front from "@/data/dataProjectsFront.json";
import projects_full from "@/data/dataProjectsFull.json";
const frontList = ref(null);
const fullList = ref(null);
onMounted(() => {
    frontList.value = projects_front;
    fullList.value = projects_full;
})

// Variables Option
const badgeBackgroundColors = ref({
    pending: "#f8a14b", // orange yellow
    completed: "#ee4654", // red
    updated: "#4668ee", // blue
});

const contentProjects = ref([
    { content: frontList, title: "Front End" },
    { content: fullList, title: "Full Stack" },
]);

const showImg = ref(false);
const tvImg = ref(null);
const showingImg = (imgSrc) => {
    tvImg.value = imgSrc;
    document.body.classList.add('noscroll');
}
watchEffect(() => showImg.value ? document.body.classList.add('noscroll') : document.body.classList.remove('noscroll'));

// More Advanced Options
const contentRecommended = ref([
    frontList[2],
    frontList[3],
    frontList[4],
]);
</script>

<template>
    <div class="projects">
        <!-- Start Projects  -->
        <div class="projectsCap w-full min-h-screen p-5">
            <!-- Title Row -->
            <div class="container">
                <div class="flex flex-row max-md:flex-col justify-between p-4">
                    <!-- <Button class="uppercase font-serif" txt="Show All Repos" :is-button="false"
                        url="https://github.com/Abdelrhman8Qouay?tab=repositories">
                        <img src="../../src/assets/Icons/githupPixelArtPng.png" loading="lazy" class="w-8 h-8" />
                    </Button> -->
                    <!-- Repo Button -->
                    <a href="https://github.com/Abdelrhman8Qouay?tab=repositories"
                        class="repo-btn max-md:text-sm max-md:order-1">
                        <img src="../../src/assets/Icons/githupPixelArtPng.png" loading="lazy" class="w-8 h-8 mx-2" /> Show
                        All Repos
                    </a>
                    <Title class="flex-1 text-right" txt="Projects Made" />
                </div>
            </div>
            <!-- Title Row -->

            <!-- Main Content Row -->
            <div class="container">
                <div class="testGrill flex flex-col gap-3">
                    <!-- Content All Types Of Projects -->
                    <div :key="i" v-for="(content, i) in contentProjects" class="contentTable p-2 my-4">
                        <!-- Main Title Project Content -->
                        <div class="font-bold text-3xl chars-text text-center relative [letter-spacing:0.3rem]">
                            {{ content.title }}
                        </div>

                        <!-- Project Content -->
                        <div class="pros flex flex-wrap text-center justify-between gap-3">
                            <div class="parent group max-w-[400px] max-h-[200px] [perspective:1000px]"
                                v-for="(project, k) in content.content" :key="k" data-aos="zoom-in-up">
                                <div
                                    class="proBox relative w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-700 text-white">
                                    <div class="imgProB inset-0 [backface-visibility:hidden] left-0 top-0 w-full h-full">
                                        <!-- Project: Star & Info -->
                                        <div v-if="project.info != ''"
                                            class="z-20 py-2 absolute top-[3px] left-[3px] rounded-xl">
                                            <Star class="inline-block mx-1 stroke-white [transform:rotate(55deg)]"
                                                :fillColor="badgeBackgroundColors[project.info]" :size="40" />
                                            <span
                                                class="text-white [font-size:7px] absolute left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2">{{
                                                    project.info }}</span>
                                        </div>
                                        <!-- Project Name -->
                                        <div
                                            class="absolute left-0 top-[calc(100%-45px)] h-[45px] uppercase w-full p-2 overflow-y-auto chars-bg text-start main_clear-text text-sm">
                                            {{ project.name }}
                                        </div>
                                        <!-- Project Image -->
                                        <img :src="project.image == ''
                                            ? getImageUrl('assets/projects/undifBack.png')
                                            : getImageUrl(project.image)
                                            " class="w-full h-full object-cover" :alt="'project ' + k"
                                            loading="lazy" />
                                    </div>
                                    <div
                                        class="bodyCard absolute left-0 top-0 w-full h-full z-30 transition [backface-visibility:hidden] [transform:rotateY(180deg)] chars-bg">
                                        <div class="relative flex flex-col w-full h-full justify-between overflow-auto">
                                            <p class="flex-1 text-white">
                                                {{ project.describe }}
                                            </p>
                                            <!-- Open Image -->
                                            <button @click="showImg = !showImg, showingImg(project.image == ''
                                                ? getImageUrl('assets/projects/undifBack.png')
                                                : getImageUrl(project.image))"
                                                class="h-[40px] w-[40px] p-3 bg-[#0000008f] hover:bg-[#3939398f] transition rounded-full hidden group-hover:flex justify-center items-center absolute left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2">
                                                <CameraIris class="infinite-rotate" fillColor="#fff" :size="27" />
                                            </button>
                                            <div class="h-[45px] flex justify-between gap-2 p-2">
                                                <!-- <a :href="project.viewPage" class="flex justify-center items-center">
                                                    <Eye class="inline-block mx-1" fillColor="#fff" :size="20" /> View
                                                </a>
                                                <a :href="project.codePage" class="flex justify-center items-center"><Code
                                                        class="inline-block mx-1" fillColor="#fff" :size="20" /> Code</a> -->
                                                <Button v-if="project.viewPage" txt="View" :is-button="false"
                                                    :url="project.viewPage" ico="eye" ico-color="#fff"
                                                    txt-color="text-white">
                                                </Button>
                                                <Button v-if="project.codePage" txt="Code" :is-button="false"
                                                    :url="project.codePage" ico="code" ico-color="#fff"
                                                    txt-color="text-white">
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="dividing mt-3"></div>
                    </div>
                    <!-- Content All Types Of Projects -->
                </div>
            </div>
            <!-- Main Content Row -->
        </div>
        <!-- End Projects  -->

        <!-- Show Projects Images Modal -->
        <div v-if="showImg" @click.self="showImg = false"
            class="fixed left-0 top-0 bg-[#000000a1] w-full h-full flex justify-center items-center z-50">
            <div class="w-full relative">
                <button @click="showImg = false"
                    class="h-[50px] w-[50px] p-3 bg-[#0000008f] hover:bg-[#3939398f] transition rounded-full flex justify-center items-center absolute left-3 top-3">
                    <Close fillColor="#fff" :size="32" />
                </button>
                <img class="w-full h-full object-cover" :src="tvImg" alt="shower images">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* Start Projects  */

.repo-btn {
    text-transform: uppercase;
    border: 8px double black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    padding: 10px;
    transition: var(--hover-trans);
}

.projectsCap {
    background: url(@/assets/gif/back_projects.jpg) fixed no-repeat;
    background-size: cover;

    .proBox {
        border: 8px solid var(--back-chars);
        flex: 1 0 400px;
        // transform-style: preserve-3d;
    }
}

.infinite-rotate {
    transition: var(--hover-trans);
    animation: unset;

    &:hover {
        animation: infin 0.4s infinite ease-in-out forwards;
    }
}

@keyframes infin {
    100% {
        transform: rotate(360deg);
    }
}

/* End Projects  */
</style>