import Vue from 'vue'
import VueRouter from 'vue-router'
import Sections from '../views/SectionsView.vue'
import Students from '../views/StudentsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/students',
    name: 'Students',
    component: Students
  },
  {
    path: '/Sections',
    name: 'Sections',
    component: Sections
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
