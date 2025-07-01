<template>
  <div class="mt-4">
    <h4>Agregar Profesor o Estudiante a la Asignatura</h4>
    <div class="row mb-3">
      <div class="col-md-3">
        <select v-model="tipo" class="form-select">
          <option value="profesor">Profesor</option>
          <option value="estudiante">Estudiante</option>
        </select>
      </div>
      <div class="col-md-6">
        <input v-model="busqueda" class="form-control" placeholder="Buscar por nombre">
      </div>
    </div>
    <ul class="list-group">
      <li v-for="u in resultadosFiltrados" :key="u.id" class="list-group-item d-flex justify-content-between align-items-center">
        {{ u.nombre }} {{ u.apellido }}
        <button class="btn btn-sm btn-success" @click="asociarUsuario(u.id)">Agregar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { db } from '../firebase/config'
import { useRoute } from 'vue-router'
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  arrayUnion
} from 'firebase/firestore'

const tipo = ref('profesor')
const busqueda = ref('')
const usuarios = ref([])
const route = useRoute()
const idAsignatura = route.params.id

const resultadosFiltrados = computed(() => {
  return usuarios.value.filter(u => {
    const yaAsignado = Array.isArray(u.asignaturas) && u.asignaturas.includes(idAsignatura)
    const coincideBusqueda = (u.nombre + ' ' + u.apellido).toLowerCase().includes(busqueda.value.toLowerCase())
    return coincideBusqueda && !yaAsignado
  })
})

const obtenerUsuarios = async () => {
  const usuariosRef = collection(db, 'usuarios')
  const q = query(usuariosRef, where('rol', '==', tipo.value))
  const snapshot = await getDocs(q)
  usuarios.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

const asociarUsuario = async (uid) => {
  const userRef = doc(db, 'usuarios', uid)
  await updateDoc(userRef, {
    asignaturas: arrayUnion(idAsignatura)
  })
  await obtenerUsuarios()
  alert('Asignado exitosamente')
}

watch(tipo, obtenerUsuarios, { immediate: true })
</script>