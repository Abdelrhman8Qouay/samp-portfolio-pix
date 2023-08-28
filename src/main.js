import './assets/main.css';

import { createApp } from 'vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router).use(AOS.init());

app.mount('#app');
