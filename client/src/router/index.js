import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Illustration from '../views/Illustration.vue'
import Form from '../views/Form.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import SignUp from "../views/SignUp.vue";
import Enchere from "../views/Enchere.vue";
import Error404 from "../views/Error404.vue";

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
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/enchere',
    name: 'enchere',
    component: Enchere
  },
  {
    path: '/:catchAll(.*)*',
    name: 'error',
    component: Error404
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
