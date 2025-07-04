<template>
  <div class="grid">
    <SidebarMenu />
    <div class="container mt-4">
      <AddTaskModal
        :visible="modalVisible"
        @close="cerrarModal"
        @submit="guardarTarea"
      />
      <button class="btn btn-primary" @click="abrirModal">Agregar Tarea</button>
      <Calendar :refresh-key="refreshKey" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import Calendar from '../components/Calendar.vue'
import SidebarMenu from '@/components/SidebarMenu.vue'
import AddTaskModal from '@/components/AddTaskModal.vue'
import TaskList from '@/components/TaskList.vue'

const title = ref('')
const date = ref('')
const eventsRef = collection(db, 'tareas')

const refreshKey = ref(0)

async function guardarTarea(tarea) {
  await addDoc(collection(db, 'tareas'), { ...tarea, createdAt: serverTimestamp() })
  modalVisible.value = false
  refreshKey.value++ // fuerza el recálculo en MonthlyTaskList
}

const modalVisible = ref(false)

function abrirModal() {
  modalVisible.value = true
}

function cerrarModal() {
  modalVisible.value = false
}


</script>

