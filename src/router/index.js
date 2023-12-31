import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import WriteBlogView from '../views/WriteBlogView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blogDetail/:blogId',
    name: 'blogDetail',
    component: BlogView
  },
  {
    path: '/writeBlog',
    name: 'writeBlog',
    component: WriteBlogView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
