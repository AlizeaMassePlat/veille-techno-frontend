<template>
  <div
    class="list-group-item d-flex justify-content-between align-items-center"
    draggable="true"
    @dragstart="dragStart"
    @dragend="dragEnd"
  >
    <template v-if="!editMode">
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ task.name }}</h5>
          <p class="card-text">{{ task.description }}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-sm btn-primary" @click="editTask">
            Éditer
          </button>
          <button class="btn btn-sm btn-danger" @click="removeTask">
            Supprimer
          </button>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="container">
        <h6>Titre</h6>
        <input class="form-control mb-1" v-model="editedTask.name" />
        <h6>Description</h6>
        <textarea
          class="form-control"
          v-model="editedTask.description"
        ></textarea>
        <button class="btn btn-sm btn-primary mt-2" @click="saveTask">
          Enregistrer
        </button>
        <button class="btn btn-sm btn-secondary mt-2" @click="cancelEdit">
          Annuler
        </button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  task: Object,
  index: Number,
});
const emit = defineEmits([
  "remove-task",
  "update-task",
  "drag-start",
  "drag-end",
]);

const editMode = ref(false);
const editedTask = ref({ ...props.task });

const editTask = () => {
  editMode.value = true;
};

const saveTask = () => {
  emit(
    "update-task",
    props.index,
    editedTask.value.name,
    editedTask.value.description
  );
  editMode.value = false;
};

const cancelEdit = () => {
  editMode.value = false;
  editedTask.value.name = props.task.name;
  editedTask.value.description = props.task.description;
};

const removeTask = () => {
  emit("remove-task");
};
</script>
