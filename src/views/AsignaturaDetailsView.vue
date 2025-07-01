<template>
    <div class="grid">
        <SidebarMenu />
        <div class="container mt-4">
            <div class="asignatura-detail">
                <div>
                    <h3>Detalle de Asignatura</h3>
                    <p><strong>Nombre:</strong> {{ asignatura?.nombre }}</p>
                    <p><strong>Código:</strong> {{ asignatura?.codigo }}</p>

                    <h5 class="mt-4">Profesor</h5>
                    <p v-if="profesor">{{ profesor.nombre }} {{ profesor.apellido }}
                    <button v-if="esAdmin && profesor" class="btn btn-sm btn-outline-danger" @click="eliminarAsignacion(profesor.id)">
                        Quitar<i class="bi bi-x-lg"></i>
                    </button>
                    </p>
                    
                    <p v-else class="text-muted">No asignado</p>

                    <h5 class="mt-4">Estudiantes</h5>
                    <ul>
                        <li v-for="e in estudiantes" :key="e.id">{{ e.nombre }} {{ e.apellido }}
                        <button v-if="esAdmin" class="btn btn-sm btn-outline-danger" @click="eliminarAsignacion(e.id)">
                            Quitar<i class="bi bi-x-lg"></i>
                        </button>
                        </li>
                    </ul>
                </div>
                <div>
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
                </div>
            </div>
        </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { db } from '../firebase/config'
import { collection,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
  doc,
  arrayUnion,
arrayRemove } from 'firebase/firestore'
import SidebarMenu from '@/components/SidebarMenu.vue'

const route = useRoute()
const asignatura = ref(null)
const profesor = ref(null)
const estudiantes = ref([])
const tipo = ref('profesor')
const busqueda = ref('')
const usuarios = ref([])
const idAsignatura = route.params.id
const usuarioActivo = JSON.parse(sessionStorage.getItem('user'))
const esAdmin = usuarioActivo?.rol === 'administrador'

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
  await cargarDatos()
  await obtenerUsuarios()
  alert('Asignado exitosamente')
}

onMounted(async () => {
    await cargarDatos()
    await obtenerUsuarios()
})

const cargarDatos = async () => {
    const asignaturaSnap = await getDoc(doc(db, 'asignaturas', idAsignatura))
  asignatura.value = asignaturaSnap.exists() ? asignaturaSnap.data() : null

  const usuariosRef = collection(db, 'usuarios')
  const q1 = query(usuariosRef, where('rol', '==', 'profesor'), where('asignaturas', 'array-contains', idAsignatura))
  const q2 = query(usuariosRef, where('rol', '==', 'estudiante'), where('asignaturas', 'array-contains', idAsignatura))

  const profSnap = await getDocs(q1)
  const estuSnap = await getDocs(q2)

  profesor.value = profSnap.empty ? null : { id: profSnap.docs[0].id, ...profSnap.docs[0].data() }
  estudiantes.value = estuSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

watch(tipo, obtenerUsuarios, { immediate: true })

const eliminarAsignacion = async (uid) => {
    const confirmar = confirm('¿Deseas eliminar esta asignación?')
    if (!confirmar) return
    const userRef = doc(db, 'usuarios', uid)
    await updateDoc(userRef, {
        asignaturas: arrayRemove(idAsignatura)
    })
    await cargarDatos()
    await obtenerUsuarios()
}

</script>

<style scoped>
.bi-x-lg {
  font-size: 1rem;
}
</style>