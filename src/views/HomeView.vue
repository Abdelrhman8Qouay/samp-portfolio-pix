
<template>
  <div class="home">

    <div class="landing">
      <img class="glitching_img" src="@/assets/gif/glitching.gif" alt="glitch effect image">

      <div class="header">

        <!--Content before waves-->
        <div class="inner-header flex">
          <div class="logo_night_container glitch">
            <img src="@/assets/logo.png" alt="">
            <div class="glitch__layers">
              <div class="glitch__layer"></div>
              <div class="glitch__layer"></div>
              <div class="glitch__layer"></div>
            </div>
          </div>

          <!--Just the logo.. Don't mind this-->
          <div class="theSun">
            <div class="ray_box">
              <div class="ray ray1"></div>
              <div class="ray ray2"></div>
              <div class="ray ray3"></div>
              <div class="ray ray4"></div>
              <div class="ray ray5"></div>
              <div class="ray ray6"></div>
              <div class="ray ray7"></div>
              <div class="ray ray8"></div>
              <div class="ray ray9"></div>
              <div class="ray ray10"></div>
            </div>
          </div>
          <div class="hero-container">
            <h2 class="hero glitch layers" data-text="Welcome Friend, am here to introduce my self"><span>Welcome Friend,
                am here to introduce my self</span></h2>
          </div>
        </div>

        <!--Waves Container-->
        <div>
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
              <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        <!--Waves end-->

      </div>

    </div>


  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { getImageUrl } from '@/models/work.js';
// get components
import Title from '@/components/Title.vue';
import Button from '@/components/Button.vue';
// get icons

onMounted(() => {
  const glitching_img = document.querySelector(".glitching_img");
  const landing = document.querySelector(".landing");
  // const glitching_img = document.querySelector(".glitching_img");
  const timeNight = [8000, 12000, 19000, 23000, 29000, 33000]; // time seconds when enter animate (nightmare)
  let whenEnter = Math.floor(Math.random() * timeNight.length);
  setInterval(() => {
    console.log(whenEnter)
    glitching_img.classList.add("showDisplay");
    landing.classList.add("animate");
    setTimeout(() => {
      glitching_img.classList.remove("showDisplay");
    }, 200)
    setTimeout(() => {
      glitching_img.classList.add("showDisplay");
    }, 1300)
    setTimeout(() => {
      glitching_img.classList.remove("showDisplay");
      landing.classList.remove("animate");
    }, 1500)
    whenEnter = Math.floor(Math.random() * timeNight.length);
  }, timeNight[whenEnter])
})
</script>



<style lang="scss">
.showDisplay {
  display: block !important;
}

/* Landing Start */
.landing {

  .glitching_img {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 25000;
    display: none;
  }

  &.animate {
    .header {
      // transition: all 0.22s;
      background: linear-gradient(192deg, rgb(0 0 0) 0%, rgb(51 51 51) 100%);

      .inner-header {
        .theSun {
          // transition: all 0.22s;
          box-shadow: 0px 0px 15px 3px rgb(108, 108, 108);
          width: 210px;
          height: 210px;
          top: 30vh;
          left: 75vw;
          animation: unset;
          background-image: radial-gradient(circle, #f9f9f9 95%, #e1e1e1);
        }

        .glitch.logo_night_container {
          display: block;
        }

        .hero-container {
          .glitch span {
            animation: paths 5s step-end infinite;
          }

          .glitch::before {
            animation: paths 5s step-end infinite, opacity 5s step-end infinite,
              font 8s step-end infinite, movement 10s step-end infinite;
            display: block;
          }

          .glitch::after {
            animation: paths 5s step-end infinite, opacity 5s step-end infinite,
              font 7s step-end infinite, movement 8s step-end infinite;
            display: block;
          }
        }
      }

      .parallax>use:nth-child(1) {
        fill: #2e2e2ebb;
      }

      .parallax>use:nth-child(2) {
        fill: #434343bb;
      }

      .parallax>use:nth-child(3) {
        fill: #6c6c6cbb;
      }

      .parallax>use:nth-child(4) {
        fill: #2e2e2ebb;
      }
    }

  }

  .header {
    position: relative;
    text-align: center;
    background: linear-gradient(180deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
    color: white;

    .inner-header {
      height: 65vh;
      width: 100%;
      margin: 0;
      padding: 0;

      .flex {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      // Strat Logo Animate
      .glitch.logo_night_container {
        display: none;
        position: absolute;
        left: -18vw;
        top: 10vh;
        width: 255px;
        overflow: hidden;
        filter: blur(1px);

        .glitch img {
          position: relative;
          z-index: 1;
          display: block;
        }

        .glitch__layers {
          position: absolute;
          z-index: 2;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }

        .glitch__layer {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-image: url(./src/assets/logo.png);
          background-repeat: no-repeat;
          background-position: 0 0;
        }

        .glitch__layer:nth-child(1) {
          transform: translateX(-5%);
          animation: glitch-anim-1 2s infinite linear alternate;
        }

        .glitch__layer:nth-child(2) {
          transform: translateX(3%) translateY(3%);
          animation: glitch-anim-2 2.3s -.8s infinite linear alternate;
        }

        .glitch__layer:nth-child(3) {
          transform: translateX(5%);
          animation: glitch-anim-flash 1s infinite linear;
        }
      }

      // End Logo Animate

      // Start Animate Sun
      .theSun {
        opacity: 1;
        box-shadow: 0px 0px 15px 3px yellow;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 15vh;
        left: 30vw;
        animation: sunpulse 2s alternate infinite;
        border-radius: 50%;
        background-image: radial-gradient(circle, #ffd200 95%, #f7971e);
      }

      // End Animate Sun

      // To Animate Text Glitch Animation
      // Start Text Glitch
      .hero-container {
        position: absolute;
        left: 50%;
        top: 350px;
        transform: translateX(-50%);
        text-align: center;

        .hero {
          font-size: 27px;
          font-weight: 700;
          line-height: 1;
          display: inline-block;
          color: #fff;
          z-index: 2;
          letter-spacing: 10px;


          /* Bright things in dark environments usually cast that light, giving off a glow */
          filter: drop-shadow(0 1px 3px);
        }

        .layers {
          position: relative;
        }

        .layers::before,
        .layers::after {
          content: attr(data-text);
          position: absolute;
          width: 110%;
          z-index: -1;
        }

        .layers::before {
          top: 10px;
          left: 15px;
          color: #e0287d;
        }

        .layers::after {
          top: 5px;
          left: -10px;
          color: #1bc7fb;
        }

        .single-path {
          clip-path: polygon(0% 12%,
              53% 12%,
              53% 26%,
              25% 26%,
              25% 86%,
              31% 86%,
              31% 0%,
              53% 0%,
              53% 84%,
              92% 84%,
              92% 82%,
              70% 82%,
              70% 29%,
              78% 29%,
              78% 65%,
              69% 65%,
              69% 66%,
              77% 66%,
              77% 45%,
              85% 45%,
              85% 26%,
              97% 26%,
              97% 28%,
              84% 28%,
              84% 34%,
              54% 34%,
              54% 89%,
              30% 89%,
              30% 58%,
              83% 58%,
              83% 5%,
              68% 5%,
              68% 36%,
              62% 36%,
              62% 1%,
              12% 1%,
              12% 34%,
              60% 34%,
              60% 57%,
              98% 57%,
              98% 83%,
              1% 83%,
              1% 53%,
              91% 53%,
              91% 84%,
              8% 84%,
              8% 83%,
              4% 83%);
        }

        .paths {
          animation: paths 5s step-end infinite;
        }

        .movement {
          /* Normally this position would be absolute & on the layers, set to relative here so we can see it on the div */
          position: relative;
          animation: movement 8s step-end infinite;
        }

        .opacity {
          animation: opacity 5s step-end infinite;
        }

        .font {
          animation: font 7s step-end infinite;
        }

        .glitch::before,
        .glitch::after,
        .glitch span {
          animation: unset;
        }

        .glitch::before,
        .glitch::after {
          display: none;
        }
      }

      // End Text Glitch -------------------------------

    }
  }


  .waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
  }

  .content {
    position: relative;
    height: 20vh;
    text-align: center;
    background-color: white;
  }

  /* Animation */

  .parallax>use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
  }

  .parallax>use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
    fill: #1be1fbbb;
  }

  .parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
    fill: #1bfbf3bb;
  }

  .parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
    fill: #1be1fbbb;
  }

  .parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
    fill: #e7fcffbb;
  }

  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }

    100% {
      transform: translate3d(85px, 0, 0);
    }
  }

  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }

    .content {
      height: 30vh;
    }

    h1 {
      font-size: 24px;
    }
  }
}


// Sun Animate
@keyframes sunpulse {
  from {
    box-shadow: 0 0 100px #ff0, 0 0 100px #ff0;
  }

  to {
    box-shadow: 0 0 25px #ff0, 0 0 75px #ff0;
  }
}


// Font Animate
@keyframes movement {
  0% {
    top: 0px;
    left: -20px;
  }

  15% {
    top: 10px;
    left: 10px;
  }

  60% {
    top: 5px;
    left: -10px;
  }

  75% {
    top: -5px;
    left: 20px;
  }

  100% {
    top: 10px;
    left: 5px;
  }
}

@keyframes font {
  0% {
    font-weight: 100;
    color: #e0287d;
    filter: blur(3px);
  }

  20% {
    font-weight: 500;
    color: #fff;
    filter: blur(0);
  }

  50% {
    font-weight: 300;
    color: #1bc7fb;
    filter: blur(2px);
  }

  60% {
    font-weight: 700;
    color: #fff;
    filter: blur(0);
  }

  90% {
    font-weight: 500;
    color: #e0287d;
    filter: blur(6px);
  }
}

@keyframes glitch-anim-1 {
  0% {
    clip-path: polygon(0 0%, 100% 0%, 100% 5%, 0 5%);
  }

  10% {
    clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
  }

  20% {
    clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
  }

  30% {
    clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
  }

  40% {
    clip-path: polygon(0 35%, 100% 35%, 100% 35%, 0 35%);
  }

  50% {
    clip-path: polygon(0 45%, 100% 45%, 100% 46%, 0 46%);
  }

  60% {
    clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%);
  }

  70% {
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
  }

  80% {
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
  }

  90% {
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }

  100% {
    clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%);
  }
}

@keyframes glitch-anim-2 {
  0% {
    clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%);
  }

  15% {
    clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
  }

  25% {
    clip-path: polygon(0 8%, 100% 8%, 100% 20%, 0 20%);
  }

  30% {
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
  }

  45% {
    clip-path: polygon(0 45%, 100% 45%, 100% 45%, 0 45%);
  }

  50% {
    clip-path: polygon(0 50%, 100% 50%, 100% 57%, 0 57%);
  }

  65% {
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
  }

  75% {
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
  }

  80% {
    clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%);
  }

  95% {
    clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
  }

  100% {
    clip-path: polygon(0 11%, 100% 11%, 100% 15%, 0 15%);
  }
}

@keyframes glitch-anim-flash {
  0% {
    opacity: .2;
  }

  30%,
  100% {
    opacity: 0;
  }
}


@keyframes opacity {
  0% {
    opacity: 0.1;
  }

  5% {
    opacity: 0.7;
  }

  30% {
    opacity: 0.4;
  }

  45% {
    opacity: 0.6;
  }

  76% {
    opacity: 0.4;
  }

  90% {
    opacity: 0.8;
  }

  1%,
  7%,
  33%,
  47%,
  78%,
  93% {
    opacity: 0;
  }
}

@keyframes paths {
  0% {
    clip-path: polygon(0% 43%,
        83% 43%,
        83% 22%,
        23% 22%,
        23% 24%,
        91% 24%,
        91% 26%,
        18% 26%,
        18% 83%,
        29% 83%,
        29% 17%,
        41% 17%,
        41% 39%,
        18% 39%,
        18% 82%,
        54% 82%,
        54% 88%,
        19% 88%,
        19% 4%,
        39% 4%,
        39% 14%,
        76% 14%,
        76% 52%,
        23% 52%,
        23% 35%,
        19% 35%,
        19% 8%,
        36% 8%,
        36% 31%,
        73% 31%,
        73% 16%,
        1% 16%,
        1% 56%,
        50% 56%,
        50% 8%);
  }

  5% {
    clip-path: polygon(0% 29%,
        44% 29%,
        44% 83%,
        94% 83%,
        94% 56%,
        11% 56%,
        11% 64%,
        94% 64%,
        94% 70%,
        88% 70%,
        88% 32%,
        18% 32%,
        18% 96%,
        10% 96%,
        10% 62%,
        9% 62%,
        9% 84%,
        68% 84%,
        68% 50%,
        52% 50%,
        52% 55%,
        35% 55%,
        35% 87%,
        25% 87%,
        25% 39%,
        15% 39%,
        15% 88%,
        52% 88%);
  }

  30% {
    clip-path: polygon(0% 53%,
        93% 53%,
        93% 62%,
        68% 62%,
        68% 37%,
        97% 37%,
        97% 89%,
        13% 89%,
        13% 45%,
        51% 45%,
        51% 88%,
        17% 88%,
        17% 54%,
        81% 54%,
        81% 75%,
        79% 75%,
        79% 76%,
        38% 76%,
        38% 28%,
        61% 28%,
        61% 12%,
        55% 12%,
        55% 62%,
        68% 62%,
        68% 51%,
        0% 51%,
        0% 92%,
        63% 92%,
        63% 4%,
        65% 4%);
  }

  45% {
    clip-path: polygon(0% 33%,
        2% 33%,
        2% 69%,
        58% 69%,
        58% 94%,
        55% 94%,
        55% 25%,
        33% 25%,
        33% 85%,
        16% 85%,
        16% 19%,
        5% 19%,
        5% 20%,
        79% 20%,
        79% 96%,
        93% 96%,
        93% 50%,
        5% 50%,
        5% 74%,
        55% 74%,
        55% 57%,
        96% 57%,
        96% 59%,
        87% 59%,
        87% 65%,
        82% 65%,
        82% 39%,
        63% 39%,
        63% 92%,
        4% 92%,
        4% 36%,
        24% 36%,
        24% 70%,
        1% 70%,
        1% 43%,
        15% 43%,
        15% 28%,
        23% 28%,
        23% 71%,
        90% 71%,
        90% 86%,
        97% 86%,
        97% 1%,
        60% 1%,
        60% 67%,
        71% 67%,
        71% 91%,
        17% 91%,
        17% 14%,
        39% 14%,
        39% 30%,
        58% 30%,
        58% 11%,
        52% 11%,
        52% 83%,
        68% 83%);
  }

  76% {
    clip-path: polygon(0% 26%,
        15% 26%,
        15% 73%,
        72% 73%,
        72% 70%,
        77% 70%,
        77% 75%,
        8% 75%,
        8% 42%,
        4% 42%,
        4% 61%,
        17% 61%,
        17% 12%,
        26% 12%,
        26% 63%,
        73% 63%,
        73% 43%,
        90% 43%,
        90% 67%,
        50% 67%,
        50% 41%,
        42% 41%,
        42% 46%,
        50% 46%,
        50% 84%,
        96% 84%,
        96% 78%,
        49% 78%,
        49% 25%,
        63% 25%,
        63% 14%);
  }

  90% {
    clip-path: polygon(0% 41%,
        13% 41%,
        13% 6%,
        87% 6%,
        87% 93%,
        10% 93%,
        10% 13%,
        89% 13%,
        89% 6%,
        3% 6%,
        3% 8%,
        16% 8%,
        16% 79%,
        0% 79%,
        0% 99%,
        92% 99%,
        92% 90%,
        5% 90%,
        5% 60%,
        0% 60%,
        0% 48%,
        89% 48%,
        89% 13%,
        80% 13%,
        80% 43%,
        95% 43%,
        95% 19%,
        80% 19%,
        80% 85%,
        38% 85%,
        38% 62%);
  }

  1%,
  7%,
  33%,
  47%,
  78%,
  93% {
    clip-path: none;
  }
}
</style>


