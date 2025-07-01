<template>
    <div class="grid">
        <SidebarMenu />
  <div class="container mt-4">
    <h3>Asignaturas</h3>

    <form @submit.prevent="guardarAsignatura" class="row g-2 mb-3">
      <div class="col-md-6">
        <input v-model="form.nombre" class="form-control" placeholder="Nombre de la asignatura">
      </div>
      <div class="col-md-3">
        <input v-model="form.codigo" class="form-control" placeholder="Código">
      </div>
      <div class="col-md-3">
        <button class="btn btn-primary w-100">{{ editando ? 'Actualizar' : 'Crear' }}</button>
      </div>
    </form>

    <div v-if="asignaturas.length" class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Código</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in asignaturas" :key="a.id">
            <td>{{ a.nombre }}</td>
            <td>{{ a.codigo }}</td>
            <td>
              <button @click="editarAsignatura(a)" class="btn btn-sm btn-warning me-2">Editar</button>
              <button @click="eliminarAsignatura(a.id)" class="btn btn-sm btn-danger">Eliminar</button>
              <router-link :to="`/asignaturas/${a.id}`" class="btn btn-sm btn-info">Ver detalle</router-link>
            </td>
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
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot
} from 'firebase/firestore'
import SidebarMenu from '@/components/SidebarMenu.vue'

const form = ref({ nombre: '', codigo: '' })
const asignaturas = ref([])
const editando = ref(false)
const actualId = ref(null)

const asignaturasRef = collection(db, 'asignaturas')

const guardarAsignatura = async () => {
  if (!form.value.nombre || !form.value.codigo) return

  if (editando.value && actualId.value) {
    await updateDoc(doc(db, 'asignaturas', actualId.value), { ...form.value })
  } else {
    await addDoc(asignaturasRef, { ...form.value })
  }
  form.value = { nombre: '', codigo: '' }
  editando.value = false
  actualId.value = null
}

const editarAsignatura = (a) => {
  form.value = { nombre: a.nombre, codigo: a.codigo }
  editando.value = true
  actualId.value = a.id
}

const eliminarAsignatura = async (id) => {
  await deleteDoc(doc(db, 'asignaturas', id))
}

onMounted(() => {
  onSnapshot(asignaturasRef, (snapshot) => {
    asignaturas.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
})
</script>
