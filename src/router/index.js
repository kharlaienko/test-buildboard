// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/App.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: 'game',
        name: 'game',
        component: () => import('@/views/Game.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
