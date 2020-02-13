import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import library from '../views/library.vue'
import about from '../views/About.vue'
import movieDetails from '../views/movieDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/library',
    name: 'library',
    component: library
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/movieDetails',
    name: 'movieDetails',
    component: movieDetails,
    props: (route) => ({ id: route.query.id , background: route.query.background, trailer: route.query.trailer, hash: route.query.hash}),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
