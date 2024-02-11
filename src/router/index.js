import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Home | Abdelrhman's Portfolio"
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
      meta: {
        title: "Contact Page | Abdelrhman's Portfolio"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: {
        title: "About Page | Abdelrhman's Portfolio"
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue'),
      meta: {
        title: "Projects Page | Abdelrhman's Portfolio"
      }
    },
    {
      path: '/projects/wordpress',
      name: 'wordpress-projects',
      component: () => import('../views/WpProjects.vue'),
      meta: {
        title: "Wordpress Projects Page | Abdelrhman's Portfolio"
      }
    },
    { // Error Page
      path: '/:pathMatch(.*)*',
      name: 'ErrorPage',
      component: () => import('../views/ErrorPage.vue'),
      meta: {
        title: "Error Page | Abdelrhman's Portfolio"
      }
    }
  ]
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "Abdelrhman's Portfolio"
})

export default router
