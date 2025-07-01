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
  ],
})

// Middleware para proteger rutas
let isAuthResolved = false

auth.onAuthStateChanged(() => {
  isAuthResolved = true
})

router.beforeEach((to, from, next) => {
  const user = auth.currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest)

  if (requiresAuth && !user) {
    next('/')
  } else if (requiresGuest && user) {
    next('/calendar')
  } else {
    next()
  }

  if (!isAuthResolved) {
    const unwatch = auth.onAuthStateChanged(() => {
      unwatch()
      check()
    })
  } else {
    check()
  }
})



export default router
