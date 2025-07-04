// Componente para registrar un usuario en la colección 'usuarios' con campos personalizados (usuario + clave)
<template>
    <div class="grid">
        <SidebarMenu />
  <div class="container m-4 w-80 users-container">
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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="u in usuarios" :key="u.id">
            <td>{{ u.usuario }}
              <span v-if="u.id === currentUserId" class="badge bg-success">yo</span>
            </td>
            <td>{{ u.nombre }}</td>
            <td>{{ u.apellido }}</td>
            <td>{{ u.rut }}</td>
            <td>{{ u.telefono }}</td>
            <td>{{ u.rol }}</td>
            <td>
            <button class="btn btn-sm btn-primary me-2" @click="editarUsuario(u)">Editar</button>
            <button v-if="u.id != currentUserId"
              class="btn btn-sm btn-danger"
              @click="eliminarUsuario(u.id)"
              :disabled="u.id === currentUserId"
            >
              Eliminar
            </button>
          </td>
          </tr>
        </tbody>
      </table>
      <EditUserModal 
        :visible="modalVisible"
        :user="usuarioSeleccionado"
        @submit="actualizarUsuario"
        @close="modalVisible = false"
      />
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../firebase/config'
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore'
import SidebarMenu from '@/components/SidebarMenu.vue'
import EditUserModal from '@/components/EditUserModal.vue'

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
const currentUserId = ref(null)
const modalVisible = ref(false)
const usuarioSeleccionado = ref(null)

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

async function cargarUsuarios(){
  const usuariosRef = collection(db, 'usuarios')
  onSnapshot(usuariosRef, (snapshot) => {
    usuarios.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })

  const currentUser = JSON.parse(sessionStorage.getItem('user'))
  if (currentUser && currentUser.id) {
    currentUserId.value = currentUser.id
  }
}

async function eliminarUsuario(id) {
  if (id === currentUserId.value) {
    alert("No puedes eliminar tu propio usuario.")
    return
  }
  try {
    await deleteDoc(doc(db, 'usuarios', id))
    usuarios.value = usuarios.value.filter(u => u.id !== id)
  } catch (error) {
    console.error('Error al eliminar usuario:', error)
  }
}

function editarUsuario(user) {
  
  usuarioSeleccionado.value = { ...user }
  console.log(usuarioSeleccionado.value)
  modalVisible.value = true
}

async function actualizarUsuario(usuario) {
  
}

onMounted(() => {
  cargarUsuarios()
})
</script>

<style scoped>
.users-container {
  width: 90%;
  margin: auto;
}
</style>