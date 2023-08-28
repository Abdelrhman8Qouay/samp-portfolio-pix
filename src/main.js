import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'


app.use(AOS.init())
app.use(router)
app.mount('#app')
