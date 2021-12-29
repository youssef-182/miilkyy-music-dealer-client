import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  	path: '/auth/register',
  	name: 'Register',
  	component: () => import('../views/auth/Register.vue')
  },
  {
  	path: '/auth/login',
  	name: 'Login',
  	component: () => import('../views/auth/Login.vue')
  },
  {
  	path: '/post/create',
  	name: 'Create Post',
  	component: () => import('../views/CreatePost.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;