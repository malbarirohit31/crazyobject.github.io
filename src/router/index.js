import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '../views/ViewNotes.vue'
import ViewWeather from '../views/ViewWeather.vue'
import BlogApi from '../views/ViewBlog.vue'
import ToDoList from "../views/ViewTodo.vue"

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/weather',
    name: 'weather',
    component: ViewWeather
  },
  {
    path: '/api',
    name: 'API',
    component: BlogApi
  },
  {
    path: '/todo',
    name: 'TODO',
    component: ToDoList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router