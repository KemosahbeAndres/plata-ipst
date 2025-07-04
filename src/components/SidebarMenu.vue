<template>
  <div class="d-flex flex-column vh-100 p-3 text-white bg-dark" style="width: 250px;">
    <div class="d-flex align-items-center mb-4">
      <div class="rounded-circle bg-secondary d-flex justify-content-center align-items-center me-2" style="width: 40px; height: 40px;">
        <i class="bi bi-person"></i>
      </div>
      <strong>{{ usuario?.nombre || 'Usuario' }}</strong>
    </div>
    <h4 class="text-white">Menú</h4>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/calendar" class="nav-link text-white">Calendario</router-link>
      </li>
      <li v-if="usuario?.rol === 'administrador'">
        <router-link to="/users" class="nav-link text-white">Usuarios</router-link>
      </li>
      <li v-if="usuario?.rol === 'profesor' || usuario?.rol === 'administrador'">
        <router-link to="/asignaturas" class="nav-link text-white">Asignaturas</router-link>
      </li>
    </ul>
    <div class="mt-auto">
      <button @click="logout" class="btn btn-outline-light w-100">Cerrar sesión</button>
    </div>
  </div>
</template>

<script setup>
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const usuario = ref(JSON.parse(sessionStorage.getItem('user')))

const logout = async () => {
  sessionStorage.removeItem('user')
  await signOut(auth)
  router.push('/')
}
</script>

<style scoped>
.bi-person {
  font-size: 1.2rem;
  color: white;
}
</style>