
<template>
  <Navbar></Navbar>
  <div class="home">
    <div class="landing w-full min-h-[350px]">
      <div class="w-full flex-1 h-full flex justify-center items-center">
        <div class="imgUser w-4040 h-40 rounded-full">
          <img class="object-cover w-full h-full rounded-full" src="@/assets/me_pixel.jpg" alt="user owner">
        </div>
      </div>
    </div>

    <!-- Start About Us  -->
    <div class="containBoxUs">
      <div class="container">
        <div class="aboutContent">
          <div class="myInfo" data-aos="fade-right" data-aos-duration="2000">
            <div class="imgGl"></div>
            <h2 id="le"><ion-icon name="planet"></ion-icon> About Us</h2>
            <p><span>i'am living in Egypt, My city is Cairo</span>,
              I am a Front-End developer based in Cairo, Egypt.
              I am very passionate about improving my coding skills & developing websites.
              I build WebApps and Websites using MEVN Stack. Working for myself to improve my skills.
              Love to build Design of Page as UI and a little UX.
            </p>
            <div class="inf">
              <p>Age: <span>20</span></p>
              <p>Email: <span>mido59478@gmail.com</span></p>
              <p>Phone: <span>0102 789 3028</span></p>
              <p>Place: <span>Cairo-Egypt Ain shams</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End About Us  -->

    <!-- Start Skills  -->
    <div class="contentTeckSkills">
      <div class="container mb-4">
        <h2 class="text-white my-2 font-bold">Skills { tools }</h2>
        <div class="staticSkills flex justify-between items-center overflow-x-auto py-5 px-40 gap-24">
          <div v-for="(skill, i) in skillsList" :key="i" class="boxS" :title="skill.describe">
            <div class="imgBox">
              <img :src="getImageUrl(skill.image)" :alt="skill.name">
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


// anonymous Function Onscroll For progress
// window.onscroll = () => {
//   const teckSkills = document.querySelectorAll(".containerTeckSkill .skills");
//   // for move at down
//   // moving each skill alone with scrolling
//   teckSkills.forEach((skill) => {
//     if (skill.getBoundingClientRect().top < 700) {
//       skill.style.width = skill.dataset.width;
//       skill.textContent = skill.dataset.width;
//     } else if (skill.getBoundingClientRect().top > 700) {
//       skill.style.width = "0";
//       skill.textContent = "0%";
//     }
//   });
// };

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
.home {
  background: #000;
}

.landing {
  background: url(https://wallpapercave.com/wp/wp1933963.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  mask-image: linear-gradient(white, transparent);
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
.containBoxUs {
  background: url(@/assets/gif/rog-wallpaper-design-on-behance.gif);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  background-position: center;
  padding: 5rem;

  .aboutContent {
    max-height: 400px;

    .imgInfo {
      height: 340px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .myInfo {
      max-width: 550px;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.4);
      padding: 1rem;

      h3 {
        font-weight: 600;
      }

      .imgGl {
        position: absolute;
        width: 80px;
        height: 80px;
        right: 5%;
        top: -15px;
        border-radius: 50%;
        background: url(https://i0.wp.com/www.lil-ye.com/wp-content/uploads/2020/10/Fantastic.gif?ssl=1&resize=1280%2C1280);
        background-size: 100%;
        border: 5px solid #011f74;

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

      p span {
        font-weight: 600;
        font-size: 1.3em;
        color: var(--for-spesh);
      }

      .inf {
        p {
          flex: 1 0 50%;
        }

        span {
          color: var(--spe-color);
          font-size: 13px;
        }
      }
    }
  }
}

@keyframes glitchAnim {
  0% {
    background-position: 0 0;
    filter: hue-rotate(0deg);
  }

  10% {
    background-position: 5px 0;
  }

  20% {
    background-position: -5px 0;
  }

  30% {
    background-position: 15px 0;
  }

  40% {
    background-position: 5px 0;
  }

  50% {
    background-position: -25px 0;
  }

  60% {
    background-position: -50px 0;
  }

  70% {
    background-position: 0 -20px;
  }

  80% {
    background-position: -60px -20px;
  }

  81% {
    background-position: 0 0;
  }

  100% {
    background-position: 0 0;
    filter: hue-rotate(360deg);
  }
}

/* End About Us  */

// Start Skills
.contentTeckSkills {

  .staticSkills {
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKqlslRUtDgxfCeyY-WFTXAPOWoMNCQI-IzQ&usqp=CAU);

    .boxS {
      background: url(https://studio.code.org/v3/assets/BPlVtb4JtsQ8ctmYwj7FNleFFG7JTeldTQmsHt7pz68/goldCoin.gif);
      background-position-x: 47%;
      background-position-y: 47%;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      // box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px;
      transition: 0.4s;
      animation: FloatingBS 1s ease-in-out infinite alternate;
      position: relative;

      &:nth-child(even) {
        animation: FloatingRevBS 1s ease-in-out infinite alternate;
      }

      &:hover {
        animation-play-state: paused;
        box-shadow: 0 0 30px var(--for-addition);
      }

      .imgBox {
        display: block;
        width: 35px;
        height: 35px;

        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }
      }

      p {
        color: #dc3535;
        font-weight: 600;
        font-size: 13px;
      }
    }
  }

  .movingSkills {
    position: relative;
    transition: 1s;

    .teckSkill {
      transform-style: preserve-3d;
      padding: 1.5rem;

      p {
        padding-left: 6rem;
        margin: 0;
        color: var(--for-word);
      }

      .containerTeckSkill {
        width: 100%;
        background-color: #e1e1e1;
        height: auto;
        padding: 10px;

        .skills {
          text-align: center;
          padding-bottom: 10px;
          color: var(--for-addition);
          font-size: 0.9em;
          background-image: linear-gradient(45deg, #6d6fd5, #0d6efd);
          height: 20px;
          transition: 1.2s;
          transition-timing-function: ease-in;
        }
      }
    }

    .proSkills {
      transform-style: preserve-3d;
      padding: 1.5rem;

      h3 {
        text-align: center;
        color: var(--for-spesh);
        font-weight: 600;
        font-family: var(--font-bold);
      }
    }
  }
}

// End Skills

@keyframes FloatingRevBS {
  100% {
    transform: translateY(-10px);
  }
}

@keyframes FloatingBS {
  100% {
    transform: translateY(10px);
  }
}

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

$pixel: 1em;

$blue1: #292d52;
$blue2: #3b508c;
$blue3: #5b70b3;
$blue4: #5a7fc6;

$lips2: #762b2d;
$lips4: #c77d7e;
$lips5: #b47272;

$skin3: #a26759;
$skin4: #b38575;
$skin5: #c39c8b;
$skin6: #cfb1a7;
$skin7: #e4ccca;

$grey1: #726b73;

$black1: #212123;
$black2: #2e2d32;
$black3: #424246;

$brown1: #352d2d;

$tongue1: #da8489;
$tongue2: #feacab;
$tongue3: #ba7577;

$fur1: #e29654;
$fur2: #8d3d15;
$fur3: #ebba97;
$fur4: #f8c084;
$fur5: #df9053;
$fur6: #c47443;
$fur7: #804a2c;
$fur8: #fddabc;
$fur9: #cdc6b3;

.catcher {
  image-rendering: pixelated;
  position: relative;
  background: $black2;
  font-size: 10px;
  width: $pixel;
  height: $pixel;
  box-shadow:
    /* start pants*/
    ($pixel * 7) ($pixel * 0) 0 0 $skin7,
    ($pixel * 6) ($pixel * 0) 0 0 $skin6,
    ($pixel * 5) ($pixel * 0) 0 0 $skin5,
    ($pixel * 1) 0 0 0 $black3,
    ($pixel * -1) 0 0 0 darken($black2, 2%),
    ($pixel * -2) 0 0 0 $black1,
    ($pixel * -3) 0 0 0 $black1,
    ($pixel * -7) 0 0 0 $skin4,
    ($pixel * -8) 0 0 0 $skin5,
    ($pixel * -9) 0 0 0 $skin6,

    ($pixel * 7) ($pixel * 1) 0 0 $skin7,
    ($pixel * 6) ($pixel * 1) 0 0 $skin6,
    ($pixel * 5) ($pixel * 1) 0 0 $skin5,
    ($pixel * 2) ($pixel * 1) 0 0 $black3,
    ($pixel * 1) ($pixel * 1) 0 0 $black2,
    ($pixel * 0) ($pixel * 1) 0 0 $black2,
    ($pixel * -1) ($pixel * 1) 0 0 $black2,
    ($pixel * -2) ($pixel * 1) 0 0 darken($black2, 2%),
    ($pixel * -3) ($pixel * 1) 0 0 $black1,
    ($pixel * -6) ($pixel * 1) 0 0 $skin4,
    ($pixel * -7) ($pixel * 1) 0 0 $skin5,
    ($pixel * -8) ($pixel * 1) 0 0 $skin6,

    ($pixel * 8) ($pixel * 2) 0 0 $skin7,
    ($pixel * 7) ($pixel * 2) 0 0 $skin6,
    ($pixel * 6) ($pixel * 2) 0 0 $skin5,
    ($pixel * 2) ($pixel * 2) 0 0 $black3,
    ($pixel * 1) ($pixel * 2) 0 0 $black2,
    ($pixel * 0) ($pixel * 2) 0 0 $black2,
    ($pixel * -1) ($pixel * 2) 0 0 $black2,
    ($pixel * -2) ($pixel * 2) 0 0 $black2,
    ($pixel * -3) ($pixel * 2) 0 0 darken($black2, 2%),
    ($pixel * -4) ($pixel * 2) 0 0 $black1,
    ($pixel * -5) ($pixel * 2) 0 0 $skin4,
    ($pixel * -6) ($pixel * 2) 0 0 $skin5,
    ($pixel * -7) ($pixel * 2) 0 0 $skin5,

    ($pixel * 9) ($pixel * 3) 0 0 $skin7,
    ($pixel * 8) ($pixel * 3) 0 0 $skin6,
    ($pixel * 7) ($pixel * 3) 0 0 $skin6,
    ($pixel * 6) ($pixel * 3) 0 0 $skin5,
    ($pixel * 3) ($pixel * 3) 0 0 $black3,
    ($pixel * 2) ($pixel * 3) 0 0 $black2,
    ($pixel * 1) ($pixel * 3) 0 0 $black2,
    ($pixel * 0) ($pixel * 3) 0 0 $black2,
    ($pixel * -1) ($pixel * 3) 0 0 $black2,
    ($pixel * -2) ($pixel * 3) 0 0 $black2,
    ($pixel * -3) ($pixel * 3) 0 0 $black2,
    ($pixel * -4) ($pixel * 3) 0 0 darken($black2, 2%),
    ($pixel * -5) ($pixel * 3) 0 0 $black1,
    ($pixel * -6) ($pixel * 3) 0 0 $skin5,
    ($pixel * -7) ($pixel * 3) 0 0 $skin6,

    ($pixel * 9) ($pixel * 4) 0 0 $skin7,
    ($pixel * 8) ($pixel * 4) 0 0 $skin6,
    ($pixel * 7) ($pixel * 4) 0 0 $skin5,
    ($pixel * 6) ($pixel * 4) 0 0 $skin5,
    ($pixel * 5) ($pixel * 4) 0 0 $skin5,
    ($pixel * 3) ($pixel * 4) 0 0 $black3,
    ($pixel * 2) ($pixel * 4) 0 0 $black2,
    ($pixel * 1) ($pixel * 4) 0 0 $black2,
    ($pixel * 0) ($pixel * 4) 0 0 $black2,
    ($pixel * -1) ($pixel * 4) 0 0 $black2,
    ($pixel * -2) ($pixel * 4) 0 0 $black2,
    ($pixel * -3) ($pixel * 4) 0 0 $black2,
    ($pixel * -4) ($pixel * 4) 0 0 darken($black2, 2%),
    ($pixel * -5) ($pixel * 4) 0 0 $black1,
    ($pixel * -6) ($pixel * 4) 0 0 $skin4,
    ($pixel * -7) ($pixel * 4) 0 0 $skin5,
    ($pixel * -8) ($pixel * 4) 0 0 $skin6,

    ($pixel * 8) ($pixel * 5) 0 0 $skin6,
    ($pixel * 7) ($pixel * 5) 0 0 $skin5,
    ($pixel * 3) ($pixel * 5) 0 0 $black3,
    ($pixel * 2) ($pixel * 5) 0 0 $black2,
    ($pixel * 1) ($pixel * 5) 0 0 $black1,
    ($pixel * 0) ($pixel * 5) 0 0 $black2,
    ($pixel * -1) ($pixel * 5) 0 0 $black1,
    ($pixel * -2) ($pixel * 5) 0 0 $black3,
    ($pixel * -3) ($pixel * 5) 0 0 $black2,
    ($pixel * -4) ($pixel * 5) 0 0 $black2,
    ($pixel * -5) ($pixel * 5) 0 0 darken($black2, 2%),
    ($pixel * -6) ($pixel * 5) 0 0 $black1,
    ($pixel * -7) ($pixel * 5) 0 0 $skin4,
    ($pixel * -8) ($pixel * 5) 0 0 $skin5,

    ($pixel * 3) ($pixel * 6) 0 0 $black3,
    ($pixel * 2) ($pixel * 6) 0 0 $black2,
    ($pixel * 1) ($pixel * 6) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 6) 0 0 $black1,
    ($pixel * -1) ($pixel * 6) 0 0 $black3,
    ($pixel * -2) ($pixel * 6) 0 0 $black3,
    ($pixel * -3) ($pixel * 6) 0 0 $black2,
    ($pixel * -4) ($pixel * 6) 0 0 $black2,
    ($pixel * -5) ($pixel * 6) 0 0 darken($black2, 2%),
    ($pixel * -6) ($pixel * 6) 0 0 $black1,

    ($pixel * 3) ($pixel * 7) 0 0 $black3,
    ($pixel * 2) ($pixel * 7) 0 0 $black2,
    ($pixel * 1) ($pixel * 7) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 7) 0 0 $black1,
    ($pixel * -1) ($pixel * 7) 0 0 $black3,
    ($pixel * -2) ($pixel * 7) 0 0 $black2,
    ($pixel * -3) ($pixel * 7) 0 0 $black2,
    ($pixel * -4) ($pixel * 7) 0 0 $black2,
    ($pixel * -5) ($pixel * 7) 0 0 darken($black2, 2%),
    ($pixel * -6) ($pixel * 7) 0 0 $black1,

    ($pixel * 3) ($pixel * 8) 0 0 $black3,
    ($pixel * 2) ($pixel * 8) 0 0 $black2,
    ($pixel * 1) ($pixel * 8) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 8) 0 0 $black1,
    ($pixel * -1) ($pixel * 8) 0 0 $black3,
    ($pixel * -2) ($pixel * 8) 0 0 $black2,
    ($pixel * -3) ($pixel * 8) 0 0 $black2,
    ($pixel * -4) ($pixel * 8) 0 0 darken($black2, 2%),
    ($pixel * -5) ($pixel * 8) 0 0 $black1,

    ($pixel * 3) ($pixel * 9) 0 0 $black3,
    ($pixel * 2) ($pixel * 9) 0 0 $black2,
    ($pixel * 1) ($pixel * 9) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 9) 0 0 $black1,
    ($pixel * -1) ($pixel * 9) 0 0 $black3,
    ($pixel * -2) ($pixel * 9) 0 0 $black2,
    ($pixel * -3) ($pixel * 9) 0 0 $black2,
    ($pixel * -4) ($pixel * 9) 0 0 darken($black2, 2%),
    ($pixel * -5) ($pixel * 9) 0 0 $black1,

    ($pixel * 2) ($pixel * 10) 0 0 lighten($black2, 5.5%),
    ($pixel * 1) ($pixel * 10) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 10) 0 0 $black1,
    ($pixel * -1) ($pixel * 10) 0 0 $black3,
    ($pixel * -2) ($pixel * 10) 0 0 $black2,
    ($pixel * -3) ($pixel * 10) 0 0 $black2,
    ($pixel * -4) ($pixel * 10) 0 0 darken($black2, 2%),
    ($pixel * -5) ($pixel * 10) 0 0 $black1,

    ($pixel * 2) ($pixel * 11) 0 0 lighten($black2, 5.5%),
    ($pixel * 1) ($pixel * 11) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 11) 0 0 $black1,
    ($pixel * -1) ($pixel * 11) 0 0 $black3,
    ($pixel * -2) ($pixel * 11) 0 0 $black2,
    ($pixel * -3) ($pixel * 11) 0 0 darken($black2, 2%),
    ($pixel * -4) ($pixel * 11) 0 0 $black1,

    ($pixel * 2) ($pixel * 12) 0 0 lighten($black2, 5.5%),
    ($pixel * 1) ($pixel * 12) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 12) 0 0 $black1,
    ($pixel * -1) ($pixel * 12) 0 0 $black3,
    ($pixel * -2) ($pixel * 12) 0 0 $black2,
    ($pixel * -3) ($pixel * 12) 0 0 darken($black2, 2%),
    ($pixel * -4) ($pixel * 12) 0 0 $black1,

    ($pixel * 2) ($pixel * 13) 0 0 lighten($black2, 5.5%),
    ($pixel * 1) ($pixel * 13) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 13) 0 0 $black1,
    ($pixel * -1) ($pixel * 13) 0 0 $black3,
    ($pixel * -2) ($pixel * 13) 0 0 $black2,
    ($pixel * -3) ($pixel * 13) 0 0 darken($black2, 2%),
    ($pixel * -4) ($pixel * 13) 0 0 $black1,

    ($pixel * 2) ($pixel * 14) 0 0 lighten($black2, 5.5%),
    ($pixel * 1) ($pixel * 14) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 14) 0 0 $black1,
    ($pixel * -1) ($pixel * 14) 0 0 $black3,
    ($pixel * -2) ($pixel * 14) 0 0 $black2,
    ($pixel * -3) ($pixel * 14) 0 0 $black1,

    ($pixel * 2) ($pixel * 15) 0 0 lighten($black2, 5.5%),
    ($pixel * 1) ($pixel * 15) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 15) 0 0 $black1,
    ($pixel * -1) ($pixel * 15) 0 0 $black3,
    ($pixel * -2) ($pixel * 15) 0 0 $black2,
    ($pixel * -3) ($pixel * 15) 0 0 $black1,

    ($pixel * 2) ($pixel * 16) 0 0 lighten($black2, 5.5%),
    ($pixel * 1) ($pixel * 16) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 16) 0 0 $black1,
    ($pixel * -1) ($pixel * 16) 0 0 $black3,
    ($pixel * -2) ($pixel * 16) 0 0 $black2,
    ($pixel * -3) ($pixel * 16) 0 0 $black1,

    ($pixel * 2) ($pixel * 17) 0 0 lighten($black2, 5.5%),
    ($pixel * 1) ($pixel * 17) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 17) 0 0 $black1,
    ($pixel * -1) ($pixel * 17) 0 0 $black3,
    ($pixel * -2) ($pixel * 17) 0 0 $black1,

    ($pixel * 2) ($pixel * 18) 0 0 lighten($black2, 5.5%),
    ($pixel * 1) ($pixel * 18) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 18) 0 0 $black1,
    ($pixel * -1) ($pixel * 18) 0 0 $black3,
    ($pixel * -2) ($pixel * 18) 0 0 $black2,
    ($pixel * -3) ($pixel * 18) 0 0 $black1,

    ($pixel * 2) ($pixel * 19) 0 0 lighten($black2, 5.5%),
    ($pixel * 1) ($pixel * 19) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 19) 0 0 $black1,
    ($pixel * -1) ($pixel * 19) 0 0 $black3,
    ($pixel * -2) ($pixel * 19) 0 0 $black2,
    ($pixel * -3) ($pixel * 19) 0 0 $black1,

    ($pixel * 2) ($pixel * 20) 0 0 lighten($black2, 5.5%),
    ($pixel * 1) ($pixel * 20) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 20) 0 0 $black1,
    ($pixel * -1) ($pixel * 20) 0 0 $black3,
    ($pixel * -2) ($pixel * 20) 0 0 $black2,
    ($pixel * -3) ($pixel * 20) 0 0 $black1,

    ($pixel * 2) ($pixel * 21) 0 0 lighten($black2, 5.5%),
    ($pixel * 1) ($pixel * 21) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 21) 0 0 $black1,
    ($pixel * -1) ($pixel * 21) 0 0 $black2,
    ($pixel * -2) ($pixel * 21) 0 0 $black1,

    ($pixel * 2) ($pixel * 22) 0 0 lighten($black2, 5.5%),
    ($pixel * 1) ($pixel * 22) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 22) 0 0 $black1,
    ($pixel * -1) ($pixel * 22) 0 0 $black2,
    ($pixel * -2) ($pixel * 22) 0 0 $black1,

    ($pixel * 1) ($pixel * 23) 0 0 darken($black2, 2%),
    ($pixel * 0) ($pixel * 23) 0 0 $black1,
    ($pixel * -1) ($pixel * 23) 0 0 $black2,
    ($pixel * -2) ($pixel * 23) 0 0 $black1,

    ($pixel * 1) ($pixel * 24) 0 0 $black1,
    ($pixel * 0) ($pixel * 24) 0 0 $black1,
    ($pixel * -1) ($pixel * 24) 0 0 $black1,
    /* end pants*/

    /* start shoes*/
    ($pixel * 1) ($pixel * 25) 0 0 $skin4,
    ($pixel * 0) ($pixel * 25) 0 0 $skin4,
    ($pixel * -1) ($pixel * 25) 0 0 darken($lips2, 5%),

    ($pixel * 2) ($pixel * 26) 0 0 $skin4,
    ($pixel * 1) ($pixel * 26) 0 0 darken($lips2, 5%),
    ($pixel * 0) ($pixel * 26) 0 0 $skin4,
    ($pixel * -1) ($pixel * 26) 0 0 $lips2,
    ($pixel * -2) ($pixel * 26) 0 0 $lips2,

    ($pixel * 3) ($pixel * 27) 0 0 $skin4,
    ($pixel * 2) ($pixel * 27) 0 0 darken($lips2, 5%),
    ($pixel * 1) ($pixel * 27) 0 0 $skin4,
    ($pixel * 0) ($pixel * 27) 0 0 $lips2,
    ($pixel * -1) ($pixel * 27) 0 0 darken($lips2, 5%),
    ($pixel * -2) ($pixel * 27) 0 0 $lips2,

    ($pixel * 3) ($pixel * 28) 0 0 darken($lips2, 5%),
    ($pixel * 2) ($pixel * 28) 0 0 $lips2,
    ($pixel * 1) ($pixel * 28) 0 0 $lips2,
    ($pixel * 0) ($pixel * 28) 0 0 darken($lips2, 5%),
    ($pixel * -2) ($pixel * 28) 0 0 $lips2,

    ($pixel * 2) ($pixel * 29) 0 0 darken($lips2, 5%),
    ($pixel * 1) ($pixel * 29) 0 0 darken($lips2, 5%),
    ($pixel * -2) ($pixel * 29) 0 0 darken($lips2, 5%),
    /* end shoes*/

    /* start shadow*/
    ($pixel * 5) ($pixel * 27) 0 0 $grey1,
    ($pixel * 4) ($pixel * 27) 0 0 $grey1,
    ($pixel * -1) ($pixel * 27) 0 0 $grey1,
    ($pixel * -3) ($pixel * 27) 0 0 $grey1,
    ($pixel * -4) ($pixel * 27) 0 0 $grey1,


    ($pixel * 7) ($pixel * 28) 0 0 $grey1,
    ($pixel * 6) ($pixel * 28) 0 0 $grey1,
    ($pixel * 5) ($pixel * 28) 0 0 $grey1,
    ($pixel * 4) ($pixel * 28) 0 0 $grey1,
    ($pixel * -1) ($pixel * 28) 0 0 $grey1,
    ($pixel * -3) ($pixel * 28) 0 0 $grey1,
    ($pixel * -4) ($pixel * 28) 0 0 $grey1,
    ($pixel * -5) ($pixel * 28) 0 0 $grey1,
    ($pixel * -6) ($pixel * 28) 0 0 $grey1,

    ($pixel * 9) ($pixel * 29) 0 0 $grey1,
    ($pixel * 8) ($pixel * 29) 0 0 $grey1,
    ($pixel * 7) ($pixel * 29) 0 0 $grey1,
    ($pixel * 6) ($pixel * 29) 0 0 $grey1,
    ($pixel * 5) ($pixel * 29) 0 0 $grey1,
    ($pixel * 4) ($pixel * 29) 0 0 $grey1,
    ($pixel * 3) ($pixel * 29) 0 0 $grey1,
    ($pixel * -1) ($pixel * 29) 0 0 $grey1,
    ($pixel * 0) ($pixel * 29) 0 0 $grey1,
    ($pixel * -3) ($pixel * 29) 0 0 $grey1,
    ($pixel * -4) ($pixel * 29) 0 0 $grey1,
    ($pixel * -5) ($pixel * 29) 0 0 $grey1,
    ($pixel * -6) ($pixel * 29) 0 0 $grey1,
    ($pixel * -7) ($pixel * 29) 0 0 $grey1,
    ($pixel * -8) ($pixel * 29) 0 0 $grey1,

    ($pixel * 11) ($pixel * 30) 0 0 $grey1,
    ($pixel * 10) ($pixel * 30) 0 0 $grey1,
    ($pixel * 9) ($pixel * 30) 0 0 $grey1,
    ($pixel * 8) ($pixel * 30) 0 0 $grey1,
    ($pixel * 7) ($pixel * 30) 0 0 $grey1,
    ($pixel * 6) ($pixel * 30) 0 0 $grey1,
    ($pixel * 5) ($pixel * 30) 0 0 $grey1,
    ($pixel * 4) ($pixel * 30) 0 0 $grey1,
    ($pixel * 3) ($pixel * 30) 0 0 $grey1,
    ($pixel * 2) ($pixel * 30) 0 0 $grey1,
    ($pixel * 1) ($pixel * 30) 0 0 $grey1,
    ($pixel * 0) ($pixel * 30) 0 0 $grey1,
    ($pixel * -1) ($pixel * 30) 0 0 $grey1,
    ($pixel * -2) ($pixel * 30) 0 0 $grey1,
    ($pixel * -3) ($pixel * 30) 0 0 $grey1,
    ($pixel * -4) ($pixel * 30) 0 0 $grey1,
    ($pixel * -5) ($pixel * 30) 0 0 $grey1,
    ($pixel * -6) ($pixel * 30) 0 0 $grey1,
    ($pixel * -7) ($pixel * 30) 0 0 $grey1,
    ($pixel * -8) ($pixel * 30) 0 0 $grey1,

    ($pixel * 7) ($pixel * 31) 0 0 $grey1,
    ($pixel * 6) ($pixel * 31) 0 0 $grey1,
    ($pixel * 5) ($pixel * 31) 0 0 $grey1,
    ($pixel * 4) ($pixel * 31) 0 0 $grey1,
    ($pixel * 3) ($pixel * 31) 0 0 $grey1,
    ($pixel * 2) ($pixel * 31) 0 0 $grey1,
    ($pixel * 1) ($pixel * 31) 0 0 $grey1,
    ($pixel * 0) ($pixel * 31) 0 0 $grey1,
    ($pixel * -1) ($pixel * 31) 0 0 $grey1,
    ($pixel * -2) ($pixel * 31) 0 0 $grey1,
    ($pixel * -3) ($pixel * 31) 0 0 $grey1,
    ($pixel * -4) ($pixel * 31) 0 0 $grey1,
    ($pixel * -5) ($pixel * 31) 0 0 $grey1,
    ($pixel * -6) ($pixel * 31) 0 0 $grey1,

    ($pixel * 5) ($pixel * 32) 0 0 $grey1,
    ($pixel * 4) ($pixel * 32) 0 0 $grey1,
    ($pixel * 3) ($pixel * 32) 0 0 $grey1,
    ($pixel * 2) ($pixel * 32) 0 0 $grey1,
    ($pixel * 1) ($pixel * 32) 0 0 $grey1,
    ($pixel * 0) ($pixel * 32) 0 0 $grey1,
    ($pixel * -1) ($pixel * 32) 0 0 $grey1,
    ($pixel * -2) ($pixel * 32) 0 0 $grey1,
    ($pixel * -3) ($pixel * 32) 0 0 $grey1,
    ($pixel * -4) ($pixel * 32) 0 0 $grey1,
    /* end shadow*/

    /* start shirt*/
    ($pixel * 6) ($pixel * -1) 0 0 $skin7,
    ($pixel * 5) ($pixel * -1) 0 0 $skin6,
    ($pixel * 4) ($pixel * -1) 0 0 $skin5,
    ($pixel * 1) ($pixel * -1) 0 0 $blue4,
    ($pixel * 0) ($pixel * -1) 0 0 $blue3,
    ($pixel * -1) ($pixel * -1) 0 0 $blue2,
    ($pixel * -2) ($pixel * -1) 0 0 $blue1,
    ($pixel * -3) ($pixel * -1) 0 0 $blue1,
    ($pixel * -8) ($pixel * -1) 0 0 $skin4,
    ($pixel * -9) ($pixel * -1) 0 0 $skin5,
    ($pixel * -10) ($pixel * -1) 0 0 $skin6,

    ($pixel * 6) ($pixel * -2) 0 0 $skin7,
    ($pixel * 5) ($pixel * -2) 0 0 $skin6,
    ($pixel * 4) ($pixel * -2) 0 0 $skin5,
    ($pixel * 2) ($pixel * -2) 0 0 $blue4,
    ($pixel * 1) ($pixel * -2) 0 0 $blue4,
    ($pixel * 0) ($pixel * -2) 0 0 $blue3,
    ($pixel * -1) ($pixel * -2) 0 0 $blue2,
    ($pixel * -2) ($pixel * -2) 0 0 $blue2,
    ($pixel * -3) ($pixel * -2) 0 0 $blue1,
    ($pixel * -8) ($pixel * -2) 0 0 $skin5,
    ($pixel * -9) ($pixel * -2) 0 0 $skin6,

    ($pixel * 5) ($pixel * -3) 0 0 $skin7,
    ($pixel * 4) ($pixel * -3) 0 0 $skin6,
    ($pixel * 2) ($pixel * -3) 0 0 $blue4,
    ($pixel * 1) ($pixel * -3) 0 0 $blue3,
    ($pixel * 0) ($pixel * -3) 0 0 $blue3,
    ($pixel * -1) ($pixel * -3) 0 0 $blue3,
    ($pixel * -2) ($pixel * -3) 0 0 $blue2,
    ($pixel * -3) ($pixel * -3) 0 0 $blue1,
    ($pixel * -4) ($pixel * -3) 0 0 $blue1,
    ($pixel * -7) ($pixel * -3) 0 0 $skin4,
    ($pixel * -8) ($pixel * -3) 0 0 $skin5,
    ($pixel * -9) ($pixel * -3) 0 0 $skin6,

    ($pixel * 5) ($pixel * -4) 0 0 $skin7,
    ($pixel * 4) ($pixel * -4) 0 0 $skin6,
    ($pixel * 3) ($pixel * -4) 0 0 $blue3,
    ($pixel * 2) ($pixel * -4) 0 0 $blue3,
    ($pixel * 1) ($pixel * -4) 0 0 $blue2,
    ($pixel * 0) ($pixel * -4) 0 0 $blue2,
    ($pixel * -1) ($pixel * -4) 0 0 $blue2,
    ($pixel * -2) ($pixel * -4) 0 0 $blue1,
    ($pixel * -3) ($pixel * -4) 0 0 $blue1,
    ($pixel * -4) ($pixel * -4) 0 0 $blue1,
    ($pixel * -6) ($pixel * -4) 0 0 $skin4,
    ($pixel * -7) ($pixel * -4) 0 0 $skin5,
    ($pixel * -8) ($pixel * -4) 0 0 $skin6,

    ($pixel * 5) ($pixel * -5) 0 0 $skin7,
    ($pixel * 4) ($pixel * -5) 0 0 $skin6,
    ($pixel * 3) ($pixel * -5) 0 0 $blue4,
    ($pixel * 2) ($pixel * -5) 0 0 $blue3,
    ($pixel * 1) ($pixel * -5) 0 0 $blue3,
    ($pixel * 0) ($pixel * -5) 0 0 $blue2,
    ($pixel * -1) ($pixel * -5) 0 0 $blue4,
    ($pixel * -2) ($pixel * -5) 0 0 $blue3,
    ($pixel * -3) ($pixel * -5) 0 0 $blue2,
    ($pixel * -4) ($pixel * -5) 0 0 $blue1,
    ($pixel * -6) ($pixel * -5) 0 0 $skin4,
    ($pixel * -7) ($pixel * -5) 0 0 $skin5,
    ($pixel * -8) ($pixel * -5) 0 0 $skin6,

    ($pixel * 5) ($pixel * -6) 0 0 $skin7,
    ($pixel * 4) ($pixel * -6) 0 0 $skin6,
    ($pixel * 3) ($pixel * -6) 0 0 $blue4,
    ($pixel * 2) ($pixel * -6) 0 0 $blue3,
    ($pixel * 1) ($pixel * -6) 0 0 $blue3,
    ($pixel * 0) ($pixel * -6) 0 0 $blue4,
    ($pixel * -1) ($pixel * -6) 0 0 $blue3,
    ($pixel * -2) ($pixel * -6) 0 0 $blue3,
    ($pixel * -3) ($pixel * -6) 0 0 $blue2,
    ($pixel * -4) ($pixel * -6) 0 0 $blue1,
    ($pixel * -5) ($pixel * -6) 0 0 $skin4,
    ($pixel * -6) ($pixel * -6) 0 0 $skin5,
    ($pixel * -7) ($pixel * -6) 0 0 $skin6,

    ($pixel * 5) ($pixel * -7) 0 0 $skin7,
    ($pixel * 4) ($pixel * -7) 0 0 $skin6,
    ($pixel * 3) ($pixel * -7) 0 0 $skin5,
    ($pixel * 2) ($pixel * -7) 0 0 $blue4,
    ($pixel * 1) ($pixel * -7) 0 0 $blue3,
    ($pixel * 0) ($pixel * -7) 0 0 $skin5,
    ($pixel * -1) ($pixel * -7) 0 0 $blue2,
    ($pixel * -2) ($pixel * -7) 0 0 $blue3,
    ($pixel * -3) ($pixel * -7) 0 0 $blue1,
    ($pixel * -4) ($pixel * -7) 0 0 $skin4,
    ($pixel * -5) ($pixel * -7) 0 0 $skin5,
    ($pixel * -6) ($pixel * -7) 0 0 $skin5,
    ($pixel * -7) ($pixel * -7) 0 0 $skin6,

    ($pixel * 4) ($pixel * -8) 0 0 $skin6,
    ($pixel * 3) ($pixel * -8) 0 0 lighten($skin5, 3%),
    ($pixel * 2) ($pixel * -8) 0 0 $blue4,
    ($pixel * 1) ($pixel * -8) 0 0 $skin6,
    ($pixel * 0) ($pixel * -8) 0 0 lighten($skin5, 3%),
    ($pixel * -1) ($pixel * -8) 0 0 $skin6,
    ($pixel * -2) ($pixel * -8) 0 0 $blue2,
    ($pixel * -3) ($pixel * -8) 0 0 $blue1,
    ($pixel * -4) ($pixel * -8) 0 0 lighten($skin4, 5%),
    ($pixel * -5) ($pixel * -8) 0 0 $skin5,
    ($pixel * -6) ($pixel * -8) 0 0 $skin6,

    ($pixel * 4) ($pixel * -9) 0 0 $skin7,
    ($pixel * 3) ($pixel * -9) 0 0 $skin6,
    ($pixel * 2) ($pixel * -9) 0 0 $blue3,
    ($pixel * 1) ($pixel * -9) 0 0 $skin6,
    ($pixel * 0) ($pixel * -9) 0 0 $skin6,
    ($pixel * -1) ($pixel * -9) 0 0 $skin6,
    ($pixel * -2) ($pixel * -9) 0 0 $blue2,
    ($pixel * -3) ($pixel * -9) 0 0 $blue1,
    ($pixel * -4) ($pixel * -9) 0 0 $skin5,
    ($pixel * -5) ($pixel * -9) 0 0 $skin6,
    /* end shirt*/

    /* start head*/
    ($pixel * 0) ($pixel * -10) 0 0 lighten($skin6, 5%),
    ($pixel * -1) ($pixel * -10) 0 0 $skin6,
    ($pixel * -2) ($pixel * -10) 0 0 $skin5,

    ($pixel * 3) ($pixel * -11) 0 0 lighten($brown1, 5%),
    ($pixel * 2) ($pixel * -11) 0 0 $brown1,
    ($pixel * 1) ($pixel * -11) 0 0 darken($brown1, 5%),
    ($pixel * 0) ($pixel * -11) 0 0 lighten($skin6, 5%),
    ($pixel * -1) ($pixel * -11) 0 0 $skin5,
    ($pixel * -2) ($pixel * -11) 0 0 $skin4,
    ($pixel * -3) ($pixel * -11) 0 0 darken($brown1, 5%),
    ($pixel * -4) ($pixel * -11) 0 0 $brown1,
    ($pixel * -5) ($pixel * -11) 0 0 $brown1,
    ($pixel * -6) ($pixel * -11) 0 0 $brown1,

    ($pixel * 4) ($pixel * -12) 0 0 lighten($brown1, 5%),
    ($pixel * 3) ($pixel * -12) 0 0 $brown1,
    ($pixel * 2) ($pixel * -12) 0 0 darken($brown1, 5%),
    ($pixel * 1) ($pixel * -12) 0 0 lighten($skin6, 5%),
    ($pixel * 0) ($pixel * -12) 0 0 $skin6,
    ($pixel * -1) ($pixel * -12) 0 0 $skin6,
    ($pixel * -2) ($pixel * -12) 0 0 $skin5,
    ($pixel * -3) ($pixel * -12) 0 0 $skin4,
    ($pixel * -4) ($pixel * -12) 0 0 darken($brown1, 5%),
    ($pixel * -5) ($pixel * -12) 0 0 lighten($brown1, 5%),
    ($pixel * -6) ($pixel * -12) 0 0 $brown1,
    ($pixel * -7) ($pixel * -12) 0 0 $brown1,

    ($pixel * 5) ($pixel * -13) 0 0 lighten($brown1, 5%),
    ($pixel * 4) ($pixel * -13) 0 0 $brown1,
    ($pixel * 3) ($pixel * -13) 0 0 darken($brown1, 5%),
    ($pixel * 2) ($pixel * -13) 0 0 $skin7,
    ($pixel * 1) ($pixel * -13) 0 0 lighten($skin6, 5%),
    ($pixel * 0) ($pixel * -13) 0 0 lighten($skin6, 5%),
    ($pixel * -1) ($pixel * -13) 0 0 lighten($skin6, 5%),
    ($pixel * -2) ($pixel * -13) 0 0 $skin6,
    ($pixel * -3) ($pixel * -13) 0 0 $skin5,
    ($pixel * -4) ($pixel * -13) 0 0 $brown1,
    ($pixel * -5) ($pixel * -13) 0 0 darken($brown1, 5%),
    ($pixel * -6) ($pixel * -13) 0 0 lighten($brown1, 5%),
    ($pixel * -7) ($pixel * -13) 0 0 $brown1,
    ($pixel * -8) ($pixel * -13) 0 0 $brown1,

    ($pixel * 5) ($pixel * -14) 0 0 lighten($brown1, 5%),
    ($pixel * 4) ($pixel * -14) 0 0 $brown1,
    ($pixel * 3) ($pixel * -14) 0 0 darken($brown1, 5%),
    ($pixel * 2) ($pixel * -14) 0 0 $skin7,
    ($pixel * 1) ($pixel * -14) 0 0 lighten($skin6, 5%),
    ($pixel * 0) ($pixel * -14) 0 0 $lips4,
    ($pixel * -1) ($pixel * -14) 0 0 $lips5,
    ($pixel * -2) ($pixel * -14) 0 0 $skin6,
    ($pixel * -3) ($pixel * -14) 0 0 $skin6,
    ($pixel * -4) ($pixel * -14) 0 0 $skin5,
    ($pixel * -5) ($pixel * -14) 0 0 darken($brown1, 5%),
    ($pixel * -6) ($pixel * -14) 0 0 lighten($brown1, 5%),
    ($pixel * -7) ($pixel * -14) 0 0 $brown1,
    ($pixel * -8) ($pixel * -14) 0 0 $brown1,

    ($pixel * 5) ($pixel * -15) 0 0 lighten($brown1, 5%),
    ($pixel * 4) ($pixel * -15) 0 0 $brown1,
    ($pixel * 3) ($pixel * -15) 0 0 darken($brown1, 5%),
    ($pixel * 2) ($pixel * -15) 0 0 $skin7,
    ($pixel * 1) ($pixel * -15) 0 0 lighten($skin6, 5%),
    ($pixel * 0) ($pixel * -15) 0 0 lighten($skin6, 5%),
    ($pixel * -1) ($pixel * -15) 0 0 $skin6,
    ($pixel * -2) ($pixel * -15) 0 0 $skin6,
    ($pixel * -3) ($pixel * -15) 0 0 $skin6,
    ($pixel * -4) ($pixel * -15) 0 0 $skin5,
    ($pixel * -5) ($pixel * -15) 0 0 darken($brown1, 5%),
    ($pixel * -6) ($pixel * -15) 0 0 lighten($brown1, 5%),
    ($pixel * -7) ($pixel * -15) 0 0 $brown1,
    ($pixel * -8) ($pixel * -15) 0 0 $brown1,

    ($pixel * 5) ($pixel * -16) 0 0 lighten($brown1, 5%),
    ($pixel * 4) ($pixel * -16) 0 0 $brown1,
    ($pixel * 3) ($pixel * -16) 0 0 darken($brown1, 5%),
    ($pixel * 2) ($pixel * -16) 0 0 lighten($skin6, 5%),
    ($pixel * 1) ($pixel * -16) 0 0 $skin6,
    ($pixel * 0) ($pixel * -16) 0 0 $skin7,
    ($pixel * -1) ($pixel * -16) 0 0 lighten($skin6, 5%),
    ($pixel * -2) ($pixel * -16) 0 0 $skin6,
    ($pixel * -3) ($pixel * -16) 0 0 $skin6,
    ($pixel * -4) ($pixel * -16) 0 0 lighten($skin4, 5%),
    ($pixel * -5) ($pixel * -16) 0 0 darken($brown1, 5%),
    ($pixel * -6) ($pixel * -16) 0 0 lighten($brown1, 5%),
    ($pixel * -7) ($pixel * -16) 0 0 $brown1,
    ($pixel * -8) ($pixel * -16) 0 0 lighten($brown1, 5%),

    ($pixel * 5) ($pixel * -17) 0 0 lighten($brown1, 5%),
    ($pixel * 4) ($pixel * -17) 0 0 $brown1,
    ($pixel * 3) ($pixel * -17) 0 0 $brown1,
    ($pixel * 3) ($pixel * -17) 0 0 $brown1,
    ($pixel * 2) ($pixel * -17) 0 0 $skin4,
    ($pixel * 1) ($pixel * -17) 0 0 darken($skin4, 10%),
    ($pixel * 0) ($pixel * -17) 0 0 $skin7,
    ($pixel * -1) ($pixel * -17) 0 0 $skin6,
    ($pixel * -2) ($pixel * -17) 0 0 $skin3,
    ($pixel * -3) ($pixel * -17) 0 0 lighten($skin4, 5%),
    ($pixel * -4) ($pixel * -17) 0 0 lighten($brown1, 5%),
    ($pixel * -5) ($pixel * -17) 0 0 $brown1,
    ($pixel * -6) ($pixel * -17) 0 0 $brown1,
    ($pixel * -7) ($pixel * -17) 0 0 lighten($brown1, 5%),

    ($pixel * 5) ($pixel * -18) 0 0 lighten($brown1, 5%),
    ($pixel * 4) ($pixel * -18) 0 0 lighten($brown1, 5%),
    ($pixel * 3) ($pixel * -18) 0 0 $brown1,
    ($pixel * 3) ($pixel * -18) 0 0 $brown1,
    ($pixel * 2) ($pixel * -18) 0 0 $brown1,
    ($pixel * 1) ($pixel * -18) 0 0 lighten($skin4, 5%),
    ($pixel * 0) ($pixel * -18) 0 0 lighten($skin6, 5%),
    ($pixel * -1) ($pixel * -18) 0 0 $skin6,
    ($pixel * -2) ($pixel * -18) 0 0 $skin4,
    ($pixel * -3) ($pixel * -18) 0 0 lighten($brown1, 5%),
    ($pixel * -4) ($pixel * -18) 0 0 $brown1,
    ($pixel * -5) ($pixel * -18) 0 0 $brown1,
    ($pixel * -6) ($pixel * -18) 0 0 $brown1,
    ($pixel * -7) ($pixel * -18) 0 0 lighten($brown1, 5%),

    ($pixel * 4) ($pixel * -19) 0 0 lighten($brown1, 5%),
    ($pixel * 3) ($pixel * -19) 0 0 lighten($brown1, 5%),
    ($pixel * 3) ($pixel * -19) 0 0 $brown1,
    ($pixel * 2) ($pixel * -19) 0 0 $brown1,
    ($pixel * 1) ($pixel * -19) 0 0 $brown1,
    ($pixel * 0) ($pixel * -19) 0 0 darken($brown1, 5%),
    ($pixel * -1) ($pixel * -19) 0 0 lighten($skin4, 5%),
    ($pixel * -2) ($pixel * -19) 0 0 darken($brown1, 5%),
    ($pixel * -3) ($pixel * -19) 0 0 $brown1,
    ($pixel * -4) ($pixel * -19) 0 0 $brown1,
    ($pixel * -5) ($pixel * -19) 0 0 $brown1,
    ($pixel * -6) ($pixel * -19) 0 0 lighten($brown1, 5%),

    ($pixel * 3) ($pixel * -20) 0 0 lighten($brown1, 5%),
    ($pixel * 2) ($pixel * -20) 0 0 lighten($brown1, 5%),
    ($pixel * 1) ($pixel * -20) 0 0 $brown1,
    ($pixel * 0) ($pixel * -20) 0 0 $brown1,
    ($pixel * -1) ($pixel * -20) 0 0 darken($brown1, 5%),
    ($pixel * -2) ($pixel * -20) 0 0 $brown1,
    ($pixel * -3) ($pixel * -20) 0 0 $brown1,
    ($pixel * -4) ($pixel * -20) 0 0 $brown1,
    ($pixel * -5) ($pixel * -20) 0 0 lighten($brown1, 5%),

    ($pixel * 2) ($pixel * -21) 0 0 lighten($brown1, 5%),
    ($pixel * 1) ($pixel * -21) 0 0 lighten($brown1, 5%),
    ($pixel * 0) ($pixel * -21) 0 0 $brown1,
    ($pixel * -1) ($pixel * -21) 0 0 $brown1,
    ($pixel * -2) ($pixel * -21) 0 0 $brown1,
    ($pixel * -3) ($pixel * -21) 0 0 $brown1,
    ($pixel * -4) ($pixel * -21) 0 0 lighten($brown1, 5%),

    ($pixel * 1) ($pixel * -22) 0 0 lighten($brown1, 5%),
    ($pixel * 0) ($pixel * -22) 0 0 lighten($brown1, 5%),
    ($pixel * -2) ($pixel * -22) 0 0 $brown1,
    ($pixel * -3) ($pixel * -22) 0 0 lighten($brown1, 5%),
    /* end head*/
  ;
}
</style>