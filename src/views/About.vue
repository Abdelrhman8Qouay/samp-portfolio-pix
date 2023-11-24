<template>
    <div class="about_page">

        <!-- Start About Us  -->
        <div class="container my-8">
            <Title txt="About Us" where="center" />
            <div class="flex justify-between max-lg:flex-col">
                <p class="max-lg:order-1 text-base font-semibold text-slate-400">
                    Hi, my name is Abdelrhman and I am your expert in Frontend development. <br>
                    <br>
                    💻 Specialization: Vue.js and Nuxt.js <br>
                    🔥 Skills: HTML/CSS, JavaScript/TypeScript, Rest API, MySQL, PHP/Laravel <br>
                    🌟 Experience: 2 years of commercial experience <br>
                    🚀 Goal: Provide high quality products and exceptional customer service <br>
                    🧠 Training: Continually updating my knowledge of the latest technologiesI <br>
                    <br>
                </p>
                <div class="w-[150px] h-[150px] p-1 relative">
                    <div class="w-[114%] h-[114%] z-10 absolute left-[-10px] top-[-10px]">
                        <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/601220/f12e03ad412fa9c27e6d1443b2d1b1028dbf2faa.png"
                            class="w-full h-full object-cover" alt="owner">
                    </div>
                    <div class="w-full h-full z-20">
                        <img src="@/assets/me_pixel.jpg" class="w-full h-full object-cover" alt="owner">
                    </div>
                </div>
            </div>
            <p class="text-base font-semibold text-slate-400">
                I feel comfortable on my ability to turn ideas into well-structured code. My goal is to help you achieve
                your goals by providing innovative solutions and supporting the project after implementation. I enjoy
                working both independently and as part of a team, and I always strive for clean and efficient code. <br>
                <br>
                If you are looking for a professional developer who can turn your ideas into reality, contact me. Let's
                start creating something unique and valuable today! <br>
                <br>
            </p>
        </div>
        <!-- End About Us  -->

        <!-- Start Skills  -->
        <div class="container my-7 p-3">
            <Title txt="Technolog Tools" where="center" />
            <div class="staticSkills flex flex-wrap py-5 gap-10">
                <div v-for="(skill, i) in skillsList" :key="i"
                    class="w-[220px] h-max rounded-md flex flex-col justify-between p-5 border border-slate-400"
                    :title="skill.describe">
                    <div class="w-7 h-7 block">
                        <img class="w-full h-full object-contain" :src="getImageUrl(skill.image)" :alt="skill.name">
                    </div>
                    <div class="text-slate-400 text-base font-medium mb-2">{{ skill.name }}</div>
                    <div class="text-slate-500 text-xs font-extralight">{{ skill.describe }}</div>
                </div>
            </div>
        </div>
        <!-- End Skills  -->

        <Footer class="mt-8" v-once></Footer>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getImageUrl } from '@/models/work.js';
// get components
import Footer from '@/components/Main/Footer.vue';
import Title from '@/components/Title.vue';
import Button from '@/components/Button.vue';
// get icons
import Disc from 'vue-material-design-icons/Disc.vue';
// get data
import skills from "@/data/dataSkills.json";
const skillsList = ref(null);
onMounted(() =>
    skillsList.value = skills
)

const activeLocation = ref(false);
const ownerAge = ref(
    Math.floor(
        (new Date() - new Date("July 8, 2003 01:15:00")) / 1000 / 60 / 60 / 24 / 365
    )
);
</script>

<style lang="scss">
/* left headCont start  */
.headCont.left_head {
    right: 2%;
}

.landing {
    .infTit {
        position: relative;
        border-left: 4px solid var(--main);
        border-top: 4px solid var(--main);
        max-width: 400px;
        padding: 10px;
        border-radius: 5px;
        transition: 0.4s;

        &::before {
            content: "";
            position: absolute;
            right: -9%;
            bottom: 2%;
            width: 50px;
            height: 50px;
            background: inherit;
            clip-path: polygon(23% 54%, 46% 67%, 73% 60%, 100% 37%, 88% 75%, 61% 96%, 36% 96%, 0 100%, 0% 35%, 0 14%);
        }
    }

}

/* Landing End  */

/* Start Location Box  */
.contentLoc {
    background-color: #41464b;
    transform-origin: top;
    transform: scaleY(0);
    position: absolute;
    opacity: 0;
    width: 100%;
    min-height: 350px;
    visibility: hidden;
    padding-top: 1rem;
    padding-bottom: 1rem;
    transition: 0.4s;
    box-shadow: inset 0 0 12px #000;

    &.active {
        transform: scaleY(1);
        visibility: visible;
        opacity: 1;
        position: static;
    }

    .card-body {
        height: 500px;

        .mapBox {
            padding: 1.3rem;
            box-shadow: 0 0 12px black, inset 0 0 12px black;
            border-radius: 5px;
            height: 100%;

            iframe {
                width: 100%;
                height: 100%;
                filter: invert(100%);
            }
        }
    }
}

/* End Location Box  */

/* Start About Us  */
.about {
    .imgGl {
        position: absolute;
        width: 80px;
        height: 80px;
        left: 85%;
        top: -15px;
        border-radius: 50%;
        // background: url(https://i0.wp.com/www.lil-ye.com/wp-content/uploads/2020/10/Fantastic.gif?ssl=1&resize=1280%2C1280);
        background: url(@/assets/gif/char3.gif);
        transform: rotateY(180deg);
        background-size: 100%;
        border: 5px solid var(--roof-color);

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            // background: url(https://i0.wp.com/www.lil-ye.com/wp-content/uploads/2020/10/Fantastic.gif?ssl=1&resize=1280%2C1280);
            background: url(@/assets/gif/char3.gif);
            transform: rotateY(180deg);
            background-size: 100%;
            opacity: 0.5;
            mix-blend-mode: hard-light;
        }

        &:hover::before {
            animation: glitchAnim 0.2s linear infinite;
        }
    }
}

/* End About Us  */

// Start Skills
.staticSkills {
    .boxS {
        background: url(@/assets/gif/goldCoin.gif);
        background-position-x: 47%;
        background-position-y: 47%;
        transition: 0.4s;
    }
}

// End Skills


@media (max-width: 680px) {
    body .landing .rowLanding .colImg:last-child {
        display: none;
    }

    body .containBoxUs {
        padding: 0;
    }

    body .imgGl {
        display: none;
        height: unset;
        max-height: max-content;
    }

    body .containBoxUs .aboutContent .myInfo .inf {
        flex-direction: column;
        margin-top: 7px;
    }
}
</style>