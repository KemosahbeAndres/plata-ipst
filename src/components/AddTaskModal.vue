<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal-panel">
      <div class="card p-4 shadow-sm">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="mb-0">Agregar Tarea</h2>
          <button class="btn-close" @click="close"></button>
        </div>
        <form @submit.prevent="handleSubmit" class="row g-2 align-items-center">
          <div class="col-12">
            <label class="form-label">Asignatura</label>
            <select v-model="subject" class="form-select">
              <option disabled value="">Seleccione una asignatura</option>
              <option v-for="s in asignaturas" :key="s.id" :value="s.id">({{ s.codigo }}) {{ s.nombre }}</option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Actividad</label>
            <input v-model="title" placeholder="Actividad" class="form-control" />
          </div>
          <div class="col-md-6">
            <label class="form-label">Fecha</label>
            <input v-model="date" type="date" class="form-control" />
          </div>
          <div class="col-12">
            <button class="btn btn-success w-100 mt-3">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits, defineProps } from 'vue'
import { getDocs, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase/config'

const emit = defineEmits(['submit', 'close'])
const props = defineProps({
  visible: Boolean
})

const title = ref('')
const date = ref('')
const subject = ref('')
const asignaturas = ref([])

onMounted(async () => {
  try {
    const snapshot = await getDocs(collection(db, 'asignaturas'))
    asignaturas.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error al obtener asignaturas:', error)
  }
})

async function handleSubmit() {
  if (title.value && date.value && subject.value) {
    try {
      const tareasRef = collection(db, 'tareas')
      await addDoc(tareasRef, {
        title: title.value,
        date: date.value,
        subjectId: subject.value,
        createdAt: serverTimestamp()
      })
      emit('submit')
      // Reset
      title.value = ''
      date.value = ''
      subject.value = ''
      close()
    } catch (error) {
      console.error('Error al guardar la tarea:', error)
    }
  }
}

function close() {
  emit('close')
  props.visible = false
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: flex-end;
  z-index: 9999;
}
.modal-panel {
  background: white;
  width: 400px;
  height: 100%;
  overflow-y: auto;
  padding: 1rem;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
}
.btn-close {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
}
</style>
