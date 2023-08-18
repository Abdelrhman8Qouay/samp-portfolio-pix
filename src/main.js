import './assets/main.css'

import { createApp } from 'vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App.vue'
import router from './router'

const app = createApp(App).use(AOS.init());

app.use(router);

app.mount('#app');
