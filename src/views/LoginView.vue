<template>
  <div class="login-container mt-4">
    <div class="p-5">
      <img class="text-center" src="/src/assets/calendar.png" width="100" alt="" style="margin: auto;">
      <h2 class="mb-2 text-center">  
        Planificador Académico
      </h2>
      <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum provident molestiae. Nisi minima sequi cum rem omnis aut voluptatum, laudantium aspernatur corrupti, dolores deserunt ab dolorum assumenda! Et, eius!</p>
     
      <h2 class="mb-3 text-center" style="margin-top: 4em;">Iniciar Sesión</h2>
      <input class="form-control mb-2" @keypress.enter="login" v-model="email" placeholder="Correo">
      <input class="form-control mb-2" @keypress.enter="login" v-model="password" type="password" placeholder="Contraseña">
      <button class="btn btn-primary d-block w-100" @click="login">Entrar</button>
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
import { db } from '../firebase/config'
import { collection, getDocs, query, updateDoc, where } from 'firebase/firestore'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  try {
    const q = query(collection(db, 'usuarios'), where('usuario', '==', email.value), where('clave', '==', password.value))
    const snapshot = await getDocs(q)
    if (!snapshot.empty) {
      const docRef = snapshot.docs[0].ref
      const perfil = snapshot.docs[0].data()

      const token = crypto.randomUUID()
      await updateDoc(docRef, { tokenSesion: token})

      sessionStorage.setItem('user', JSON.stringify({ ...perfil, token, id: docRef.id }))
      router.push('/calendar')
    } else {
      alert('Credenciales incorrectas')
    }
    
  } catch (err) {
    alert('Error: ' + err.message)
  }
}
</script>
