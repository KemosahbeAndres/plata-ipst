<template>
  <div class="d-flex flex-column vh-100 p-3 text-white bg-dark" style="width: 250px;">
    <h4 class="text-white">Menú</h4>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/calendar" class="nav-link text-white">Calendario</router-link>
      </li>
      <li>
        <router-link to="/agenda" class="nav-link text-white">Agenda</router-link>
      </li>
      <li>
        <router-link to="/tareas" class="nav-link text-white">Tareas</router-link>
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

const router = useRouter()
const logout = async () => {
  await signOut(auth)
  router.push('/')
}
</script>