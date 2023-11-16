<template>
  <div class="col-md-3 col-sm-4 mb-3">
    <div class="form-group d-flex mb-4">
      <button
        class="btn btn-primary"
        @click="() => openAddTaskModal(props.title)"
      >
        Ajouter une tâche
      </button>
    </div>

    <!-- Modale d'ajout de tâche -->
    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      :id="'addTaskModal-' + props.title"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter une nouvelle tâche</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="closeAddTaskModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="taskTitle">Titre de la tâche</label>
              <input
                type="text"
                class="form-control"
                id="taskTitle"
                v-model="newTaskTitle"
              />
            </div>
            <div class="form-group">
              <label for="taskDescription">Description de la tâche</label>
              <textarea
                class="form-control"
                id="taskDescription"
                v-model="newTaskDescription"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="closeAddTaskModal"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="() => addNewTask(props.title)"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Affichage des tâches de la colonne -->
    <div class="card d-flex align-items-center">
      <div class="card-body">
        <h5 class="card-title text-primary">{{ title }}</h5>
        <KanbanTask
          v-for="(task, index) in tasks"
          :key="index + task.description + task.title"
          :task="task"
          :index="index"
          @remove-task="removeTask(index)"
          @update-task="updateTask"
        ></KanbanTask>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import KanbanTask from "./KanbanTask.vue";
import { useKanbanStore } from "../stores/kanbanStore";

const props = defineProps(["title", "tasks"]);
const emit = defineEmits(["add-task", "task-dropped"]);

const newTaskTitle = ref("");
const newTaskDescription = ref("");

const kanbanStore = useKanbanStore();

function addNewTask(columnTitle) {
  if (newTaskTitle.value.trim() !== "") {
    const newTask = {
      name: newTaskTitle.value,
      description: newTaskDescription.value,
    };
    emit("add-task", columnTitle, newTask);
    newTaskTitle.value = "";
    newTaskDescription.value = "";
    closeAddTaskModal();
  }
}

const removeTask = (taskIndex) => {
  kanbanStore.removeTask(props.title, taskIndex);
};

const updateTask = (taskIndex, updatedTaskName, updatedTaskDescription) => {
  kanbanStore.updateTask(props.title, taskIndex, {
    name: updatedTaskName,
    description: updatedTaskDescription,
  });
};

const openAddTaskModal = (title) => {
  const addTaskModal = document.getElementById("addTaskModal-" + title);
  addTaskModal.classList.add("show");
  addTaskModal.style.display = "block";
  document.body.classList.add("modal-open");
};

const closeAddTaskModal = () => {
  const addTaskModal = document.querySelector(".show");
  addTaskModal.classList.remove("show");
  addTaskModal.style.display = "none";
  document.body.classList.remove("modal-open");
};
</script>
