import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Illustration from '../views/Illustration.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/illustration',
    name: 'illustration',
    component: Illustration
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
