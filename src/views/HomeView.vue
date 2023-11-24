
<template>
  <div class="home bg-black w-full">

    <div class="landing w-full h-screen relative">
      <div class="backgroundPage w-full h-full">
        <video class="w-full h-full object-cover" autoplay loop muted>
          <source
            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/601220/efb2dbf151980f659cc108ce5b323be81df631c6.webm"
            type="video/webm">
          <source
            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/601220/fae4e5773a77785a872f5e578de289fa4cb165e7.mp4"
            type="video/mp4">
          sorry this browser can't support this tag
        </video>
      </div>


      <div
        class="console absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-1 border border-[#4f7391] bg-[#525252a2]">
        <div class="border-4 border-[#4f7391] rounded-md p-2 max-w-lg">
          <p class="para_console then text-[#84accd] text-base font-semibold" style="font-family: none;">Welcome dear, my
            name is Abdelrhman and I am
            your expert in Frontend development.</p>
        </div>
      </div>

    </div>

  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { getImageUrl, sleep } from '@/models/work.js';
// get components
import Footer from '@/components/Main/Footer.vue';
import Title from '@/components/Title.vue';
import Button from '@/components/Button.vue';
// get data
import allSkills from "@/data/dataSkills.json";
const all_skills = ref(null)

onMounted(() => {
  all_skills.value = allSkills;

  const glitching_img = document.querySelector(".glitching_img");
  const landing = document.querySelector(".landing");

})

// console animate
onMounted(() => {
  const para_console = document.querySelector(".para_console");
  const content_console = para_console.innerText;
  para_console.innerHTML = ''; // make console empty when start
  setTimeout(async () => {
    for (let i = 0; i < content_console.length; i++) {
      para_console.innerHTML += content_console[i];
      if (content_console[i]) {
        await sleep(35);
      } else await sleep(100);
    }
  }, 700);
})
</script>



<style lang="scss">
.showDisplay {
  display: block !important;
}

/* Landing Start */
.console {
  animation: showConsole 0.7s 0.5s ease-in-out;
  transform-origin: left;
}

.then {
  &::after {
    color: #b6bec5;
    content: '|';
    animation: showLine 1s infinite;
  }
}

@keyframes showLine {
  0% {
    content: '.';
  }

  100% {
    content: '|';
  }
}

@keyframes showConsole {
  0% {
    transform: scaleX(0.03) scaleY(0.03) translate(-50%, -50%);
  }

  50% {
    transform: scaleX(1) scaleY(0.03) translate(-50%, -50%);
  }

  100% {
    transform: scaleX(1) scaleY(1) translate(-50%, -50%);
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
</style>


