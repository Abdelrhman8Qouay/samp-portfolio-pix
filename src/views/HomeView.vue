
<template>
  <Navbar></Navbar>
  <div class="home">
    <div class="landing w-full min-h-[350px] flex justify-center items-center">
      <div class="imgUser w-4040 h-40 rounded-full">
        <img class="object-cover w-full h-full rounded-full" src="@/assets/me_pixel.jpg" alt="user owner">
      </div>
    </div>

    <!-- Start About Us  -->
    <div class="container my-8">
      <div class="about w-full flex justify-center items-center h-max">
        <div class="content max-w-[500px] main-bg p-3 shadow-[#0000006d] shadow-md rounded-md" data-aos="zoom-in-up">
          <!-- animation image -->
          <div class="imgGl"></div>
          <!-- Title -->
          <h2 class="text-white text-3xl text-center my-2 w-full "><span class="text-green-500 font-bold">☼</span> About
            Us
            <span class="text-green-500 font-bold">☼</span>
          </h2>
          <!-- Written -->
          <p class="text-base text-white"><span class="text-xl font-semibold text-black block">i'am living in Egypt, My
              city is
              Cairo</span>,
            I am a Front-End developer based in Cairo, Egypt.
            I am very passionate about improving my coding skills & developing websites.
            I build WebApps and Websites using MEVN Stack. Working for myself to improve my skills.
            Love to build Design of Page as UI and a little UX.
          </p>
          <div class="flex flex-wrap">
            <p class="w-1/2 text-green-400">Age: <span class="text-white font-bold">20</span></p>
            <p class="w-1/2 text-green-400">Email: <span class="text-white font-bold">mido59478@gmail.com</span></p>
            <p class="w-1/2 text-green-400">Phone: <span class="text-white font-bold">0102 789 3028</span></p>
            <p class="w-1/2 text-green-400">Place: <span class="text-white font-bold">Cairo-Egypt Ain shams</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- End About Us  -->

    <!-- Start Skills  -->
    <div class="main_clear-bg p-3">
      <div class="container mb-4">
        <h2 class="text-white text-3xl text-center my-2 w-full "><span class="text-green-500 font-bold">☼</span> Technol
          Tools
          <span class="text-green-500 font-bold">☼</span>
        </h2>

        <div class="staticSkills flex flex-wrap justify-between py-5 pl-16 pr-40 gap-24">
          <!-- skill -->
          <div v-for="(skill, i) in skillsList" :key="i" data-aos="zoom-in-up"
            class="boxS w-28 h-28 rounded-full flex flex-col items-center justify-center p-2 relative"
            :title="skill.describe">
            <div class="w-9 h-9 block">
              <img class="w-full h-full object-contain" :src="getImageUrl(skill.image)" :alt="skill.name">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Skills  -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getImageUrl } from '@/models/work.js';
// get components
import Navbar from '@/components/Main/Navbar.vue';
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


<style lang="scss" scoped>
/* Landing Start */
// .landing {
//   width: 100%;
//   min-height: 80vh;
//   background: url(../../src/assets/imageKav/backgroundLanding.webp);
//   background-position: bottom;
//   background-size: cover;
//   background-repeat: no-repeat;
//   display: flex;
//   flex-direction: row;
//   position: relative;
//   padding: 200px 0 100px 0;

//   &::before {
//     content: "";
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     width: 100%;
//     height: 70%;
//     background: linear-gradient(0deg, #000 45%, transparent);
//   }

//   .rowLanding {
//     min-height: 250px;

//     .colImg {
//       display: flex;

//       .contentImg {
//         max-width: 290px;
//         height: 100%;
//         clip-path: polygon(15% 1%, 100% 0, 100% 100%, 30% 100%, 0 48%);

//         .imgMain {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
//       }
//     }
//   }
// }

.landing {
  background: var(--main-clear);
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
    background: url(https://i0.wp.com/www.lil-ye.com/wp-content/uploads/2020/10/Fantastic.gif?ssl=1&resize=1280%2C1280);
    background-size: 100%;
    border: 5px solid var(--main);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: url(https://i0.wp.com/www.lil-ye.com/wp-content/uploads/2020/10/Fantastic.gif?ssl=1&resize=1280%2C1280);
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


/* Start Education Box */
.educationBox {
  width: 100%;
  min-height: 300px;
  padding: 2rem;
  box-shadow: inset 0 0 8px #000;

  .restCollege {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .stCard {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      margin: 1rem;
      transition: 0.4s;

      &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
      }
    }

    .imgStudy {
      flex: 1 1;
      border-radius: 7px;

      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        border-radius: 7px;
      }
    }
  }
}

/* End Education Box */

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