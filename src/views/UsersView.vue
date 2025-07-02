// Componente para registrar un usuario en la colección 'usuarios' con campos personalizados (usuario + clave)
<template>
    <div class="grid">
        <SidebarMenu />
  <div class="container mx-4">
    <h3 class="mb-4">Gestion de Usuarios</h3>
    <form @submit.prevent="registrarUsuario" class="row g-2">
      <div class="col-md-4">
        <input v-model="form.usuario" class="form-control" placeholder="Nombre de usuario">
      </div>
      <div class="col-md-4">
        <input v-model="form.clave" class="form-control" placeholder="Contraseña" type="password">
      </div>
      <div class="col-md-4">
        <select v-model="form.rol" class="form-select">
          <option value="estudiante">Estudiante</option>
          <option value="profesor">Profesor</option>
          <option value="administrador">Administrador</option>
        </select>
      </div>
      <div class="col-md-3">
        <input v-model="form.nombre" class="form-control" placeholder="Nombre">
      </div>
      <div class="col-md-3">
        <input v-model="form.apellido" class="form-control" placeholder="Apellido">
      </div>
      <div class="col-md-3">
        <input v-model="form.rut" class="form-control" placeholder="RUT">
      </div>
      <div class="col-md-3">
        <input v-model="form.telefono" class="form-control" placeholder="Teléfono">
      </div>
      <div class="col-md-12">
        <button class="btn btn-success">Registrar</button>
      </div>
    </form>
    <hr>
    <div v-if="usuarios.length" class="table-responsive">
      <h4>Usuarios Registrados</h4>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>RUT</th>
            <th>Teléfono</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="u in usuarios" :key="u.id">
            <td>{{ u.usuario }}</td>
            <td>{{ u.nombre }}</td>
            <td>{{ u.apellido }}</td>
            <td>{{ u.rut }}</td>
            <td>{{ u.telefono }}</td>
            <td>{{ u.rol }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../firebase/config'
import { collection, addDoc, onSnapshot } from 'firebase/firestore'
import SidebarMenu from '@/components/SidebarMenu.vue'

const form = ref({
  usuario: '',
  clave: '',
  nombre: '',
  apellido: '',
  rut: '',
  telefono: '',
  rol: 'estudiante'
})

const usuarios = ref([])

const registrarUsuario = async () => {
  try {
    await addDoc(collection(db, 'usuarios'), { ...form.value })
    alert('Usuario registrado exitosamente')
    form.value = {
      usuario: '',
      clave: '',
      nombre: '',
      apellido: '',
      rut: '',
      telefono: '',
      rol: 'estudiante'
    }
  } catch (error) {
    alert('Error: ' + error.message)
  }
}

onMounted(() => {
  const usuariosRef = collection(db, 'usuarios')
  onSnapshot(usuariosRef, (snapshot) => {
    usuarios.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
})
</script>
