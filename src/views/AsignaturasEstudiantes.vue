<template>
    <div class="grid">
        <SidebarMenu />
        <div class="container mt-4">
            <h3 class="mb-3">Mis Asignaturas</h3>
            <ul class="list-group" v-if="asignaturas.length">
            <li class="list-group-item" v-for="asig in asignaturas" :key="asig.id">
                <strong>{{ asig.nombre }}</strong> - {{ asig.codigo }}
            </li>
            </ul>
            <p v-else>No tienes asignaturas inscritas.</p>
        </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase/config'
import { doc, getDoc } from 'firebase/firestore'
import SidebarMenu from '@/components/SidebarMenu.vue'

const asignaturas = ref([])

onMounted(async () => {
  const usuario = JSON.parse(sessionStorage.getItem('user'))
  if (!usuario?.id) return

  const userRef = doc(db, 'usuarios', usuario.id)
  const userSnap = await getDoc(userRef)

  if (userSnap.exists()) {
    const userData = userSnap.data()
    const asignaturasInscritas = userData.asignaturas || []

    const fetched = await Promise.all(
      asignaturasInscritas.map(async (asigId) => {
        const asigSnap = await getDoc(doc(db, 'asignaturas', asigId))
        return asigSnap.exists() ? { id: asigSnap.id, ...asigSnap.data() } : null
      })
    )

    asignaturas.value = fetched.filter(Boolean)
  }
})
</script>

<style scoped>
.container {
  max-width: 720px;
  margin: auto;
}
</style>
