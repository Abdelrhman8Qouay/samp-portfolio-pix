import { createApp } from 'vue'
import App from './App.vue'


import './assets/main.css'

const app = createApp(App)

import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { plugin, defaultConfig } from '@formkit/vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

app.use(plugin, defaultConfig())
app.use(autoAnimatePlugin)
app.use(AOS.init())
app.use(router)

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

const appEle = document.getElementById("app");
setTimeout( async()=> {
    appEle.classList.add('animate');
    await sleep(700);
    app.mount('#app');
    appEle.classList.remove('animate');
}, 4500);