<template>
  <div class="login-container mt-4">
    <div class="p-5">
      <h2 class="mb-3">Iniciar Sesión</h2>
      <input class="form-control mb-2" @keypress.enter="login" v-model="email" placeholder="Correo">
      <input class="form-control mb-2" @keypress.enter="login" v-model="password" type="password" placeholder="Contraseña">
      <button class="btn btn-primary" @click="login">Entrar</button>
    </div>
    <div class="background">
        <img src="/src/assets/fondo01.jpg" alt="" class="img-login">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/calendar')
  } catch (err) {
    alert('Error: ' + err.message)
  }
}
</script>
