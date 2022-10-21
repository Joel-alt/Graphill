import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Enchere from '../views/Enchere.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/enchere',
    name: 'enchere',
    component: Enchere
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
