import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)

import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'


app.use(AOS.init())
app.use(router)
app.mount('#app')
