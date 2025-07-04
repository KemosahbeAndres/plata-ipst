<template>
  <div v-if="visible && localUser" class="modal-overlay" @click.self="close">
    <div class="modal-panel">
      <div class="card p-4 shadow-sm">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="mb-0">Editar Usuario</h2>
          <button class="btn-close" @click="close"></button>
        </div>
        <form @submit.prevent="handleSubmit" class="row g-3">
          <div class="col-12">
            <label class="form-label">Nombre</label>
            <input v-model="localUser.nombre" type="text" class="form-control" />
          </div>
          <div class="col-12">
            <label class="form-label">Apellido</label>
            <input v-model="localUser.apellido" type="text" class="form-control" />
          </div>
          <div class="col-12">
            <label class="form-label">Usuario</label>
            <input v-model="localUser.usuario" type="text" class="form-control" />
          </div>
          <div class="col-12">
            <label class="form-label">RUT</label>
            <input v-model="localUser.rut" type="text" class="form-control" />
          </div>
          <div class="col-12">
            <label class="form-label">Teléfono</label>
            <input v-model="localUser.telefono" type="text" class="form-control" />
          </div>
          <div class="col-12">
            <label class="form-label">Rol</label>
            <select v-model="localUser.rol" class="form-select">
              <option value="administrador">Administrador</option>
              <option value="profesor">Profesor</option>
              <option value="estudiante">Estudiante</option>
            </select>
          </div>
          <div class="col-12">
            <button class="btn btn-success w-100 mt-2">Guardar Cambios</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase/config'

const props = defineProps({
  visible: Boolean,
  user: Object
})

const emit = defineEmits(['close', 'submit'])

const localUser = ref(null)

watch(
  () => props.user,
  (nuevo) => {
    if (nuevo) {
      localUser.value = { ...nuevo }
    }
  },
  { immediate: true }
)

function handleSubmit() {
  if (localUser.value && localUser.value.id) {
    try {
      const userRef = doc(db, 'usuarios', localUser.value.id)
        updateDoc(userRef, {
        nombre: localUser.value.nombre,
        apellido: localUser.value.apellido,
        usuario: localUser.value.usuario,
        rut: localUser.value.rut,
        telefono: localUser.value.telefono,
        rol: localUser.value.rol
      })
      close()
    } catch (error) {
      console.error('Error al guardar cambios:', error)
    }
  }
}

function close() {
  emit('close')
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
