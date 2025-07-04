<template>
  <div class="grid">
    <SidebarMenu />
    <div class="container mt-4">
      <AddTaskModal
        :visible="modalVisible"
        @close="cerrarModal"
      />
      <button class="btn btn-primary" @click="abrirModal">
      Agregar Tarea
    </button>
      <Calendar />
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

const title = ref('')
const date = ref('')
const eventsRef = collection(db, 'events')

const modalVisible = ref(false)

function abrirModal() {
  modalVisible.value = true
}

function cerrarModal() {
  modalVisible.value = false
}


function guardarTarea(tarea) {
  console.log('Tarea recibida:', tarea)
  // Aquí podrías guardar en Firestore o en un store
}

</script>