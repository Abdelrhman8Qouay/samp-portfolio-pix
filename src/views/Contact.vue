

<template>
  <div class="contact">
    <div class="container my-[100px] min-h-screen">
      <div class="seding w-full mb-20">
        <Title txt="Get In Touch" />
        <div class="max-w-[700px] px-4">
          <FormKit type="form" id="form-contact" submit-label="&nbsp;" action="https://formspree.io/f/xwkjpygk"
            method="POST">
            <div class="mb-3 relative">
              <AccountCircle fillColor="#fff" :size="25" class="absolute right-1 top-1" />
              <FormKit type="text" name="name" placeholder="Your Name" validation="required" :classes="textInp" />
            </div>
            <div class="mb-3 relative">
              <Email fillColor="#fff" :size="25" class="absolute right-1 top-1" />
              <FormKit type="text" name="email" placeholder="Your Email" validation="required|email" :classes="textInp" />
            </div>
            <div class="mb-3 relative">
              <MessageFast fillColor="#fff" :size="25" class="absolute right-1 top-1" />
              <FormKit type="textarea" name="message" placeholder="Your Message &nldr;" validation="required|length:2,300"
                :classes="textInp" />
            </div>

            <FormKit title="send to formspree service" :classes="{
              input: 'bg-blue-500 hover:bg-blue-600 border-none text-white text-lg px-3 py-1'
            }" type="submit" label="Submit your message" />
          </FormKit>
        </div>
      </div>


      <div class="sochi">
        <Title class="mb-1" txt="Let's Get Social" />
        <h4 class="text-gray-500 text-sm font-light">Follow my online fan page on Facebook and profiles on Twitter, GitHub
          and Linkedin.</h4>
        <h4 class="text-gray-500 text-sm font-light">You can see map with this (show map)</h4>

        <div class="flex flex-wrap gap-2 mt-4">
          <Button txt-color="!text-[13px] !bg-blue-500 !text-white !font-bold" txt="facebook" :is-button="false"
            :icoSize="20" ico="facebook" url="https://www.facebook.com/profile.php?id=100090009622327" />
          <Button txt-color="!text-[13px] !bg-black-500 !text-white !font-bold" txt="X twitter" :is-button="false"
            :icoSize="20" ico="twitter" url="https://twitter.com/AbdelrhmanQouay" />
          <Button txt-color="!text-[13px] !bg-blue-500 !text-white !font-bold" txt="linkedin" :is-button="false"
            :icoSize="20" ico="linkedin" url="https://www.linkedin.com/in/abdelrhman-ashraf-015b86265/" />
          <Button txt-color="!text-[13px] !bg-gray-700 !text-white !font-bold" txt="github" :is-button="false"
            :icoSize="20" ico="github" url="https://github.com/Abdelrhman8Qouay" />
          <Button txt-color="!text-[13px] !text-white !font-bold !lowercase" txt="show map" :is-button="true"
            @click="showMap = true" :icoSize="20" ico="map" />
        </div>
      </div>
    </div>

    <Footer class="mt-8" v-once></Footer>
  </div>


  <!-- Map Modal -->
  <div v-show="showMap" @click.self="showMap = false"
    class="fixed top-0 left-0 w-screen min-h-screen bg-[#00000061] flex justify-center items-center">
    <!-- Location Box  -->
    <div
      class="contentLoc roof-bg rounded-md origin-top container !min-h-[400px] py-[1rem] transition-all scale-0 opacity-0"
      :class="showMap ? '!scale-100 !opacity-100' : ''" style="box-shadow: inset 0 0 10px 5px;">
      <div class="card-body h-[500px]">
        <div class="mapBox px-[1.3rem] h-full">
          <iframe class="w-full h-full invert border-2"
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
import Footer from '@/components/Main/Footer.vue';
// import Inputing from '@/components/Input.vue';
import Title from '@/components/Title.vue';
import Button from '@/components/Button.vue';
// get icons
import AccountCircle from 'vue-material-design-icons/AccountCircle.vue';
import Email from 'vue-material-design-icons/Email.vue';
import MessageFast from 'vue-material-design-icons/MessageFast.vue';

// Input Style
const textInp = {
  input: 'bg-transparent px-3 py-1 text-gray-400 border-b border-b-gray-400 text-lg font-bold placeholder:text-gray-500 placeholder:font-light outline-none w-full',
  outer: 'bg-none',
  inner: 'bg-none',
  label: 'text-gray-500 text-xl font-bold',
  help: 'text-gray-400 text-xs',
  message: 'text-red-500 text-sm',
  messages: 'text-red-500 text-sm',
  prefixIcon:
    'w-4 inline-block flex self-stretch',
  suffixIcon:
    'w-4 inline-block pr-3 p-3 flex self-stretch grow-0 shrink-0',
};


// handle the map show
const showMap = ref(false);
</script>

<style lang="scss" scoped></style>
