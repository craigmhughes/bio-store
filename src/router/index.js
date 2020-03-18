import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// Match routes to components
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/meet-the-team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  },
  {
    path: '/products/gloves',
    name: 'Gloves',
    component: () => import(/* webpackChunkName: "gloves" */ '../views/products/Gloves.vue')
  },
  {
    path: '/products/bags',
    name: 'Bags',
    component: () => import(/* webpackChunkName: "bags" */ '../views/products/Bags.vue')
  },
  {
    path: '/products/straws',
    name: 'Straws',
    component: () => import(/* webpackChunkName: "straws" */ '../views/products/Straws.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
