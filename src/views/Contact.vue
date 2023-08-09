<template>
  <Navbar></Navbar>
  <!-- Start Contact Touch -->
  <div class="contactTouch">
    <!-- <v-container>
      <div class="pa-2" :class="themeColor.bg_main_darken">
        <h1 class="border-double px-4 py-1 text-center" :class="themeColor.white_color">
          Get In <span :class="themeColor.spe_color_alot">Touch</span>
        </h1>
      </div>
      <div class="contentTouch">
        <form class="contactBox d-flex align-start flex-column rounded pa-sm-3 pa-md-10"
          :class="themeColor.bg_main_darken" style="gap: 1rem; max-width: 450px" action="https://formspree.io/f/xwkjpygk"
          method="POST" data-aos="fade-down" data-aos-duration="2000">
          <v-text-field color="cyan-lighten-1" type="text" clearable label="Name" name="name"
            prepend-inner-icon="fas fa-user" required></v-text-field>
          <v-text-field color="cyan-lighten-1" prepend-inner-icon="fas fa-envelope" type="email" clearable label="Email"
            name="email" required></v-text-field>
          <v-text-field color="cyan-lighten-1" prepend-inner-icon="fas fa-phone" type="text" clearable label="Phone"
            name="phone"></v-text-field>
          <v-textarea color="cyan-lighten-1" name="message" rows="6" clearable label="Message"
            prepend-inner-icon="fas fa-message"></v-textarea>
          <v-card-action>
            <v-btn color="primary" class="me-4" type="submit">
              send now
            </v-btn>
          </v-card-action>
        </form>
      </div>
    </v-container> -->
  </div>


  <div class="container">
    <!-- Title of Contact -->
    <div class="pa-2 bg-black">
      <h1 class="border-double px-4 py-1 text-center bg-white">
        Get In <span class="main-text">Touch</span>
      </h1>
    </div>

    <!-- form contact -->
    <form action="https://formspree.io/f/xwkjpygk" method="POST">
      <Inputing type="text" title="Name" name="name" ico="account" require />
      <Inputing type="text" title="Email" name="email" require />
      <Inputing type="password" title="Password" name="pass" require />
      <Inputing type="textarea" title="Message" name="msg" require />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getImageUrl } from '@/models/work.js'
// get components
import Navbar from '@/components/Main/Navbar.vue';
import Inputing from '@/components/Input.vue';

</script>

<style lang="scss" scoped>
/* Start Contact Touch */
.contactTouch {
  background: var(--black);
  // background-size: cover;
  // background-attachment: fixed;
  // background-repeat: no-repeat;
  width: 100%;
  min-height: 400px;
  padding: 1rem;

  .contentTouch {
    padding: 3rem;
    padding-left: 0;
  }
}

.contactTouch h2 {
  background: var(--body);
  border-radius: 5px;
  padding: 10px;
}

.contactTouch .contentTouch {
  form {
    .v-text-field {
      width: 100%;
    }

    .v-textarea-field {
      width: 100%;
    }
  }
}

@media (max-width: 680px) {
  body .contactTouch {
    padding: 0;

    .contentTouch {
      padding: 0;
      margin-top: 10px;

      .contactBox {
        padding: 7px;
      }
    }
  }
}

/* End Contact Touch */
</style>
