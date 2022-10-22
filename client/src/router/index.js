import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Illustration from '../views/Illustration.vue'
import Form from '../views/Form.vue'
import About from '../views/About.vue'

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
    path: '/form',
    name: 'form',
    component: Form
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
