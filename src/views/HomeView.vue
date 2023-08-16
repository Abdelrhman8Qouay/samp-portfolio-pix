
<script setup>
import { ref, onMounted } from "vue";
import { getImageUrl } from '@/models/work.js';
// get components
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

<template>
  <div class="home">
    <!-- Start Landing -->
    <div class="landing w-full roof-bg flex flex-row relative overflow-hidden">
      <!-- Start Titling  -->
      <!-- <div class="midLand flex-grow">
        <div class="content z-10 p-[3rem] bg-[#212529] h-full">
          <div
            class="mainImg w-[350px] h-[265px] absolute bg-[#41464b] rounded-3xl flex right-[8%] top-[20%] justify-center items-center">
            <img class="max-w-[95%] max-h-[95%] rounded-3xl object-cover" src="@/assets/me_pixel.jpg" alt="owner">
          </div>
          <div class="infTit ground-bg">
            <h3 class="main-text font-bold block">Hello there, I'am Abdelrhman Ashraf</h3>
            <p>i'am Software Engineer more accurate Full Stack,
              you can hire me and also can download CV
            </p>
            <div class="flex">
              <button
                class="px-4 py-1 border-none rounded-lg main-bg hover:bg-white transition flex justify-center items-center">
                <a href="#">Download CV</a>
                <Disc fillColor="#fff" :size="24" />
              </button>
            </div>
          </div>
          <div class="star star1"></div>
          <div class="star star2"></div>
          <div class="star star3"></div>
          <div class="star star4"></div>
          <div class="star star5"></div>
          <div class="star star6"></div>
          <div class="star star7"></div>
          <div class="star star8"></div>
        </div>
      </div> -->
      <!-- End Titling  -->

      <!-- New -->
      <div class="back w-full h-full bg-[url(@/assets/gif/landing.png)] bg-center bg-cover bg-no-repeat">
        <div class="mid flex flex-col justify-center items-center my-12">
          <div class="w-[130px] h-[130px]">
            <img class="w-full h-full rounded-xl object-cover" src="@/assets/me_pixel.jpg" alt="owner">
          </div>
          <div class="infTit ground-bg">
            <h3 class="main-text font-bold block">Hello there, I'am Abdelrhman Ashraf</h3>
            <p>i'am Software Engineer more accurate Full Stack,
              you can hire me and also can download CV
            </p>
            <div class="flex">
              <Button txt="Download CV" :is-button="false" url="#" ico="disc" icoColor="#000" :icoSize="24" />
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- End Landing -->

    <div class="dividing"></div>

    <!-- Start About Us  -->
    <div class="container my-8">
      <div class="about w-full flex justify-center items-center h-max">
        <div class="content roof-bg p-3 shadow-[#0000006d] shadow-md rounded-md" data-aos="zoom-in-up">
          <!-- animation image -->
          <div class="imgGl"></div>
          <!-- Title -->
          <Title txt="About Us" where="center" />
          <!-- Written -->
          <p class="text-base text-white"><span class="text-xl font-semibold text-black block">i'am Software
              Engineer</span>,
            i'am Software Engineer more accurate Full Stack with ServerSide >> php(laravel framework) & ClientSide >>
            vue(vue2 || vue (composition api)) & anyTool css Designing.
            I am very passionate about improving my coding skills & developing websites. Working for myself to improve my
            skills.
          </p>
          <div class="flex flex-wrap">
            <p class="w-1/2 text-green-400">Age: <span class="text-white font-bold">{{ ownerAge }}</span></p>
            <p class="w-1/2 text-green-400">Email: <span class="text-white font-bold">qouay555@gmail.com</span></p>
            <p class="w-1/2 text-green-400">Phone: <span class="text-white font-bold">0102 789 3028</span></p>
            <p class="w-1/2 text-green-400">Place: <span class="text-white font-bold">Cairo-Egypt</span></p>
          </div>
        </div>
      </div>
    </div>
    <!-- End About Us  -->

    <div class="dividing"></div>

    <!-- Start Skills  -->
    <div class=" p-3">
      <div class="container mb-4">
        <Title txt="Technolog Tools" where="center" />

        <div class="staticSkills flex flex-wrap justify-between py-5 gap-14">
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

    <div class="dividing"></div>

    <!-- Start Education Box -->
    <div class="container">
      <div class="block w-full">
        <Title txt="Education" where="center" />
        <p class="text-center text-white">Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
        </p>
      </div>
      <div class="card w-full h-max block shadow-md shadow-black my-2" data-aos="fade-right">
        <div class="card_body w-full flex">
          <div class="img_card m-2 h-full w-1/4">
            <img class="w-full h-full object-cover"
              src="https://www.elwekalanews.net/UploadCache/libfiles/13/5/600x338o/737.jpg" alt="the institute">
          </div>
          <div class="info_card flex-1 m-3">
            <h5 class="main-text font-bold">Bachelor of Business Administration</h5>
            <p class="main_clear-text font-semibold">College of engineering, computer science and management</p>
            <span class="text-red-400 font-medium">2021-2025 | Pursuing</span>
          </div>
        </div>
        <!-- <div class="imgStudy">
            <img src="https://i.pinimg.com/originals/fb/af/44/fbaf443c014bf40b95cfa35121572b25.gif" alt="girl study">
          </div> -->
      </div>
    </div>
    <!-- End Education Box -->
  </div>
</template>


<style lang="scss" scoped>
/* Landing Start */


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