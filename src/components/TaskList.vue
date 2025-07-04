<template>
  <div class="mt-4">
    <h4 class="mb-3">Tareas del mes</h4>
    <ul class="list-group">
      <li v-for="tarea in tareas" :key="tarea.id" class="list-group-item">
        <div>
            <strong>{{ tarea.title }}</strong><br />
            Fecha: {{ tarea.date }}<br />
            Asignatura: {{ tarea.subjectName || '---' }}
        </div>
        <button class="btn btn-sm btn-outline-danger" @click="eliminarTarea(tarea.id)">borrar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { db } from '@/firebase/config'
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore'

const props = defineProps({
  currentDate: { type: Date, required: true }, // fecha del mes actual mostrado en FullCalendar
  refreshTrigger: { type: Number, default: 0 }
})

const tareas = ref([])
const asignaturasMap = ref({})

async function cargarAsignaturas() {
  const snapshot = await getDocs(collection(db, 'asignaturas'))
  const map = {}
  snapshot.forEach(doc => {
    map[doc.id] = doc.data().nombre
  })
  asignaturasMap.value = map
}

async function cargarTareasDelMes(fecha) {
  if (!fecha) return

  const year = fecha.getFullYear()
  const month = fecha.getMonth()
  const primerDia = new Date(year, month, 1).toISOString().slice(0, 10)
  const ultimoDia = new Date(year, month + 1, 0).toISOString().slice(0, 10)

  const tareasRef = collection(db, 'tareas')
  const q = query(tareasRef, where('date', '>=', primerDia), where('date', '<=', ultimoDia))
  const snapshot = await getDocs(q)

  tareas.value = snapshot.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      subjectName: asignaturasMap.value[data.subjectId] || null
    }
  })
}

async function eliminarTarea(id) {
  try {
    await deleteDoc(doc(db, 'tareas', id))
    tareas.value = tareas.value.filter(t => t.id !== id)
  } catch (error) {
    console.error('Error al eliminar tarea:', error)
  }
}

watch(() => props.currentDate, async (nuevoMes) => {
  await cargarAsignaturas()
  await cargarTareasDelMes(nuevoMes)
}, { immediate: true })
</script>
