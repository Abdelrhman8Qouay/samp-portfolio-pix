

<template>
    <div class="projects my-[100px]">


        <!-- Projects Content -->
        <div class="container">

            <Title txt="Projects List" />
            <div class="w-full mb-[50px]">
                <div class="text-gray-400 text-xl font-semibold">Filter By Tags</div>
                <div class="mb-4 flex flex-wrap gap-2 " v-if="setTags.size && setTechs.size">
                    <Button txt-color="!text-[13px] " txt="all" :is-button="true" :icoSize="20"
                        @click="filteredList = getList, searchName = ''" />
                    <Button v-for="(tag, index) in setTags" :key="index" txt-color="!text-[13px] " :txt="tag"
                        :is-button="true" :icoSize="20" @click="filtering(tag, 'tags'), searchName = ''" />
                </div>
                <div class="text-gray-400 text-xl font-semibold">Filter By Technologies</div>
                <div class="w-full mb-[150px] flex flex-wrap gap-2 " v-if="setTechs.size">
                    <Button v-for="(tech, index) in setTechs" :key="index" txt-color="!text-[13px] " :txt="tech"
                        :is-button="true" :icoSize="20" @click="filtering(tech, 'techs'), searchName = ''" />
                </div>
            </div>

            <div class="text-gray-400 text-xl font-light mb-2"><small>Showing all projects. Use the filter to list them by
                    tag or technology or by name.</small></div>

            <div class="w-full h-max">
                <div class="w-16 h-10 relative">
                    <label for="searchId" class="absolute left-1 top-[40%] -translate-y-1/2 z-10">
                        <Magnify :size="18" fillColor="rgba(255,255,255,0.72)" />
                    </label>
                    <input type="text"
                        class="px-2 py-1 pl-7 outline-none border-none bg-[#1f1f1f] text-[rgba(255,255,255,0.72)] text-sm font-extralight placeholder:text-[rgba(255,255,255,0.38)] placeholder:text-xs"
                        placeholder="Search by name.." v-model="searchName" @input="filteringSearch(searchName)"
                        id="searchId">
                </div>
            </div>

            <div class="w-full flex flex-wrap gap-5 max-lg:gap-2 max-sm:justify-center" v-if="filteredList" v-auto-animate>

                <ProjectBox class="h-[350px] cursor-pointer" style="flex: 0 0 32%;" v-for="(box, i) in filteredList"
                    :list="box" :key="i" @click="showDetails = true, dataDetails = box, makeNoScroll(showDetails)" />

            </div>

            <div class="w-full flex flex-wrap justify-between" v-if="!filteredList">
                <span class="text-blue-400 text-sm font-semibold">Loading...</span>
            </div>
        </div>


        <Footer class="mt-8" v-once></Footer>
    </div>

    <transition name="bounce">
        <div v-if="showDetails" class="fixed left-0 top-0 bg-[rgb(42,42,42,0.95)] w-screen h-screen z-[20000]">
            <div v-if="dataDetails.status" v-show="showDetails" :class="statusColors[dataDetails.status]"
                style="font-family: cursive;"
                class="w-[300px] h-max py-2 flex justify-center items-center text-white font-bold absolute -right-16 top-10 rotate-45 z-20">
                {{ dataDetails.status }}
            </div>
            <div class="container p-3 relative overflow-auto" v-show="showDetails" v-if="dataDetails">
                <Close class="text-gray-300 hover:text-gray-100 text-lg mb-4" :size="38"
                    @click="showDetails = false, makeNoScroll(showDetails)" />

                <div class="w-full flex gap-2">
                    <div class="w-3/4 p-1 flex flex-col gap-4">
                        <div class="w-full aspect-video mx-auto">
                            <img class="w-full h-full object-cover" :src="dataDetails.image == ''
                                ? getImageUrl('assets/projects/undifBack.png')
                                : getImageUrl(dataDetails.image)
                                " loading="lazy" :alt="dataDetails.name">
                        </div>
                        <div class="text-gray-300 text-3xl font-semibold">{{ dataDetails.name }}</div>
                        <div class="w-full px-4">
                            <div class="text-gray-300 text-2xl font-semibold lined w-max mb-4">About this project</div>
                            <div class="text-gray-300 text-sm font-extralight">{{ dataDetails.describe }}</div>
                        </div>
                        <div class="flex justify-end items-center">
                            <Button txt-color="!text-xs !px-8" txt="Close" :is-button="true"
                                @click="showDetails = false, makeNoScroll(showDetails)" />
                        </div>
                    </div>
                    <div class="w-1/4 p-1">
                        <div class="w-full mb-3">
                            <div class="text-gray-300 text-xl font-semibold">Tags</div>
                            <div class="mb-4 flex flex-wrap gap-2 ">
                                <div v-for="(tag, i) in dataDetails.tags" :key="i"
                                    class="bg-slate-500 px-2 py-1 text-white text-[13px] font-medium">{{ tag }}
                                </div>
                            </div>
                        </div>
                        <div class="w-full mb-3">
                            <div class="text-gray-300 text-xl font-semibold">Technologies</div>
                            <div class="mb-4 flex flex-wrap gap-2 ">
                                <div v-for="(lang, i) in dataDetails.langs" :key="i"
                                    class="bg-slate-500 px-2 py-1 text-white text-[13px] font-medium">{{ lang }}
                                </div>
                            </div>
                        </div>
                        <div v-if="dataDetails.viewPage">
                            <Button txt-color="!text-[13px] !w-full py-2 mb-3" txt="View" :is-button="false"
                                :url="dataDetails.viewPage" ico="eye" icoColor="#fff" :icoSize="20" />
                        </div>
                        <div v-if="dataDetails.codePage">
                            <Button txt-color="!text-[13px] !w-full py-2 mb-3" txt="Code" :is-button="false"
                                :url="dataDetails.codePage" ico="code" icoColor="#fff" :icoSize="20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>


<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { getImageUrl, makeNoScroll } from '@/models/work.js';
import { useRouter } from "vue-router";

// get components
import Footer from '@/components/Main/Footer.vue';
import Title from '@/components/Title.vue';
import ProjectBox from '@/components/ProjectBox.vue';
import Button from '@/components/Button.vue';
// get icons
import Star from 'vue-material-design-icons/Star.vue';
import Magnify from 'vue-material-design-icons/Magnify.vue';
import Close from 'vue-material-design-icons/Close.vue';

// get data
import all_json_projects from "@/data/dataProjectsFront.json";
// import projects_full from "@/data/dataProjectsFull.json";

const getList = ref(null);
const filteredList = ref(null);
// ========================= get all tags & technologies =========================
const arrTags = ref([]);
const setTags = ref(new Set());
const arrTechs = ref([]);
const setTechs = ref(new Set());
onMounted(() => {
    getList.value = all_json_projects;
    filteredList.value = all_json_projects;
    getList.value.forEach((box) => {
        arrTags.value.push(...box.tags);
        arrTechs.value.push(...box.langs);
    })
    setTags.value = new Set(arrTags.value);
    setTechs.value = new Set(arrTechs.value);

    console.log(setTechs.value);
})


const searchName = ref('');
function filteringSearch(toFilterBy) {
    let tempArr = [...getList.value];
    let filtered = tempArr.filter((item) => {
        return item.name.includes(toFilterBy);
    })
    filteredList.value = filtered;
}

// ========================= box project details =========================
const showDetails = ref(false);
const dataDetails = ref(null);
// Projects Status Colors
const statusColors = ref({
    pending: "bg-yellow-500 hover:bg-yellow-600", // orange yellow
    done: "bg-red-500 hover:bg-red-600", // red
    updated: "bg-blue-500 hover:bg-blue-600", // blue
});

// ========================= Filter Projects =========================
function filtering(toFilterBy, what) {
    let tempArr = [...getList.value];
    let filtered = tempArr.filter((item) => {
        if (what == 'tags') {
            return item.tags.some(it => it == toFilterBy);
        } else if (what == 'techs') {
            return item.langs.some(it => it == toFilterBy);
        }
    })
    filteredList.value = filtered;
}

</script>



<style lang="scss" scoped>
// Animate Details Screen
.bounce-enter-active {
    animation: bounce-in 0.5s;
    transform-origin: center;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
    transform-origin: center;
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


/* max line text */
.lined {
    position: relative;

    &::after {
        content: '';
        width: 100%;
        height: 1px;
        background: rgb(209 213 219 / 1);
        position: absolute;
        left: 0;
        top: 100%;
    }
}

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