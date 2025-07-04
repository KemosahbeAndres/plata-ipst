<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal-panel">
      <div class="card p-4 shadow-sm">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h2 class="mb-0">Editar Usuario</h2>
          <button class="btn-close" @click="close">x</button>
        </div>
        <form @submit.prevent="handleSubmit" class="row g-3">
          <div class="col-12">
            <label class="form-label">Nombre</label>
            <input v-model="editedUser.name" type="text" class="form-control" />
          </div>
          <div class="col-12">
            <label class="form-label">Email</label>
            <input v-model="editedUser.email" type="email" class="form-control" />
          </div>
          <div class="col-12">
            <label class="form-label">Rol</label>
            <select v-model="editedUser.role" class="form-select">
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
import { ref, watch, defineProps, defineEmits, onMounted } from 'vue'
import { db } from '@/firebase/config'
import { doc } from 'firebase/firestore'

const props = defineProps({
  visible: Boolean,
  user: Object
})

const emit = defineEmits(['close', 'submit'])

const editedUser = ref({})

watch(() => props.user, (nuevo) => {
    console.log(" watch - ", props.user)
  editedUser.value = { ...nuevo }
}, { immediate: true })

function handleSubmit() {
    
  //emit('submit', editedUser.value)
  close()
}

function close() {
  emit('close')
}

onMounted(()=> {
    console.log(props)
    const userRef = doc(db, 'usuarios', props.user)
    editedUser.value = userRef
})
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
