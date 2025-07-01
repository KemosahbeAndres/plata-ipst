import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { auth } from '../firebase/config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { requireGuest: true }
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/CalendarView.vue'),
      meta: { requireAuth: true }
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue'),
      meta: { requireAuth: true, requiresAdmin: true }
    }
  ],
})

router.beforeEach((to, from, next) => {
  const user = JSON.parse(sessionStorage.getItem('user'))

  if (to.meta.requiresAuth && !user) {
    return next('/')
  }

  if (to.meta.requiresGuest && user) {
    return next('/calendar')
  }

  if (to.meta.requiresAdmin && user?.rol !== 'administrador') {
    return next('/calendar')
  }

  return next()
})


export default router
