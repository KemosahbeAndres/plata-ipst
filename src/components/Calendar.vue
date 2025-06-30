<template>
  <FullCalendar :events="calendarEvents" :options="calendarOptions" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'

const eventsRef = collection(db, 'events')
const calendarEvents = ref([])

const calendarOptions = {
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth'
}

onMounted(() => {
  onSnapshot(eventsRef, (snapshot) => {
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    calendarEvents.value = data.map(e => ({ title: e.title, date: e.date }))
  })
})
</script>