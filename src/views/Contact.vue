<template>
  <div class="contact relative">

    <!-- Start Contact Here -->

    <div class="w-full h-full flex max-lg:flex-col">
      <!-- First part -->
      <div class="flex-1 min-h-[calc(100vh-68px)] p-14 md:border-r-2 md:border-r-black max-lg:order-1">
        <div class="container">
          <!-- Title of Contact -->
          <div class="w-full z-10">
            <Title txt="Get In Touch" where="start" />
          </div>
          <!-- form contact -->
          <div class="ground-bg py-3 w-full h-full rounded-lg" data-aos="zoom-in-up">
            <form action="https://formspree.io/f/xwkjpygk" method="POST">
              <div class="mb-4">
                <Inputing type="text" title="Name" name="name" ico="account" require />
              </div>
              <div class="mb-4">
                <Inputing type="text" title="Email" name="email" require />
              </div>
              <div class="mb-4">
                <Inputing type="text" title="Phone" name="phone" require />
              </div>
              <div class="mb-4">
                <Inputing type="textarea" title="Message" name="msg" require />
              </div>
              <div class="mt-9">
                <button
                  class="px-4 py-1 border-none main-bg hover:bg-white transition flex justify-center items-center text-base font-mono">
                  Sending now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Second part -->
      <div class="flex-1 bg-white p-14 max-lg:border-b-2 max-lg:border-b-black">
        <h2 class="text-3xl max-lg:text-lg text-black font-semibold font-mono">You can <br> contact me here</h2>
        <div class="w-full p-[1rem] mt-4 rounded-md border border-[#656565] bg-[#8a8a8ab7] text-[#141619]">
          <li class="m-0 leading-relaxed font-normal text-sm font-serif">You can send it directly to my e-mail with
            (get in touch)</li>
        </div>
        <h5 class="text-base text-slate-900 font-medium mt-4">You can also access social networking or my location here
        </h5>
        <!-- buttons social -->
        <div class="flex items-center gap-4 flex-wrap">
          <a href="https://www.facebook.com/profile.php?id=100090009622327" target="_blank"
            class="clicked no-underline rounded-full p-2 bg-white flex items-center justify-center">
            <Facebook fillColor="#000" :size="24" />
          </a>
          <a href="https://www.linkedin.com/in/abdelrhman-ashraf-taoc-015b86265/" target="_blank"
            class="clicked no-underline rounded-full p-2 bg-white flex items-center justify-center">
            <Linkedin fillColor="#000" :size="24" />
          </a>
          <a href="https://twitter.com/AbdelrhmanQouay" target="_blank"
            class="clicked no-underline rounded-full p-2 bg-white flex items-center justify-center">
            <Twitter fillColor="#000" :size="24" />
          </a>
          <a href="https://github.com/Abdelrhman8Qouay" target="_blank"
            class="clicked no-underline rounded-full p-2 bg-white flex items-center justify-center">
            <Github fillColor="#000" :size="24" />
          </a>
          <a href="#" class="clicked no-underline rounded-full p-2 bg-white flex items-center justify-center">
            <Disc fillColor="#000" :size="24" />
          </a>
          <button @click="showMap = !showMap" class="clicked rounded-full p-2 bg-white flex items-center justify-center">
            <MapMarkerRadius fillColor="#000" :size="24" />
          </button>
        </div>
      </div>
    </div>

    <!-- End Contact Here -->
  </div>


  <!-- Map Modal -->
  <div v-if="showMap" @click.self="showMap = false"
    class="fixed top-0 left-0 w-screen min-h-screen bg-[#00000061] flex justify-center items-center">
    <!-- Location Box  -->
    <div
      class="contentLoc roof-bg rounded-md origin-top container !min-h-[400px] py-[1rem] transition-all scale-0 opacity-0"
      :class="showMap ? '!scale-100 !opacity-100' : ''" style="box-shadow: inset 0 0 10px 5px;">
      <div class="card-body h-[500px]">
        <div class="mapBox px-[1.3rem] h-full">
          <iframe class="w-full h-full invert border-4 border-black"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6901.504977575526!2d31.330718724027676!3d30.1298952274049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815b411eed097%3A0x9f783c0b943765e6!2z2LnZitmGINi02YXYsyDYp9mE2LTYsdmC2YrYqdiMINmC2LPZhSDYudmK2YYg2LTZhdiz2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCs!5e0!3m2!1sar!2seg!4v1663429237646!5m2!1sar!2seg"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>

    <!-- End Location Box -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getImageUrl } from '@/models/work.js'
// get components
import Inputing from '@/components/Input.vue';
import Title from '@/components/Title.vue';
// get icons
import MapMarkerRadius from 'vue-material-design-icons/MapMarkerRadius.vue';
import Facebook from 'vue-material-design-icons/Facebook.vue';
import Twitter from 'vue-material-design-icons/Twitter.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';
import Github from 'vue-material-design-icons/Github.vue';
import Disc from 'vue-material-design-icons/Disc.vue';


// handle the map show
const showMap = ref(false);
</script>

<style lang="scss" scoped>
/* Start Location Box  */
// .contentLoc {
//   background-color: #41464b;
//   transform-origin: top;
//   transform: scaleY(0);
//   position: absolute;
//   opacity: 0;
//   width: 100%;
//   min-height: 350px;
//   visibility: hidden;
//   padding-top: 1rem;
//   padding-bottom: 1rem;
//   transition: 0.4s;
//   box-shadow: inset 0 0 10px 5px;
// }

// .contentLoc.active {
//   transform: scaleY(1);
//   visibility: visible;
//   opacity: 1;
//   position: static;
// }
// .contentLoc .card-body {
//   height: 500px;
// }

// .contentLoc .card-body .mapBox {
//   padding: 1.3rem;
//   box-shadow: 0 0 12px black, inset 0 0 12px black;
//   border-radius: 5px;
//   height: 100%;
// }

// .contentLoc .card-body .mapBox iframe {
//   width: 100%;
//   height: 100%;
//   filter: invert(100%);
// }

/* End Location Box  */
</style>
