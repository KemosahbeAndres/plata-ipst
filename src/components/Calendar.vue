<template>
  <div class="contenido-agenda">
    <TaskList :current-date="currentDate" :refreshTrigger="props.refreshKey"/>
    <div id="calendar-container">
    <FullCalendar ref="calendarRef" :events="calendarEvents" :options="calendarOptions" />
  </div>
  </div>
</template>

<script setup>
import esLocale from '@fullcalendar/core/locales/es'

import { ref, onMounted, defineProps } from 'vue'
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import TaskList from './TaskList.vue'

const props = defineProps({
  refreshKey: Number
})

const eventsRef = collection(db, 'events')
const calendarEvents = ref([])

const calendarRef = ref(null)

const calendarOptions = {
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  height: 'auto',
  aspectRatio: 1.5, // Esto ayuda a controlar la proporción entre ancho y alto
  windowResize: true,
  locale: esLocale,
  datesSet(arg){
    currentDate.value = new Date(arg.view.currentStart)
  }
}

const currentDate = ref(new Date())

onMounted(() => {
  onSnapshot(eventsRef, (snapshot) => {
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    calendarEvents.value = data.map(e => ({ title: e.title, date: e.date }))
  })

  setTimeout(() => {
    const calendarApi = calendarRef.value.getApi()
    calendarApi.updateSize()
  }, 100)

})
</script>

<style scoped>
#calendar-container {
  width: 100%;
  min-height: 400px;
  max-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
}

.fc-col-header {
  width: auto !important;
}

/* Forzar al calendario a ocupar su espacio */
:deep(.fc) {
  max-width: 100%;
  height: auto;
}

:deep(.fc-scroller) {
  overflow-y: auto;
}

.contenido-agenda {
  display: grid;
  grid-template-columns: 1fr 4fr;
}
</style>