<template>
  <div class="container mt-4">
    <div class="card p-4 shadow-sm mb-4">
      <h2 class="mb-3">Calendario Compartido</h2>
      <form @submit.prevent="addEvent" class="row g-2 align-items-center">
        <div class="col-md-5">
          <input v-model="title" placeholder="Actividad" class="form-control" />
        </div>
        <div class="col-md-4">
          <input v-model="date" type="date" class="form-control" />
        </div>
        <div class="col-md-3">
          <button class="btn btn-success w-100">Agregar</button>
        </div>
      </form>
    </div>
    <Calendar />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import Calendar from '../components/Calendar.vue'

const title = ref('')
const date = ref('')
const eventsRef = collection(db, 'events')

const addEvent = async () => {
  if (!title.value || !date.value) return
  await addDoc(eventsRef, {
    title: title.value,
    date: date.value
  })
  title.value = ''
  date.value = ''
}
</script>