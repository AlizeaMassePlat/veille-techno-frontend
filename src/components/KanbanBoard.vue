<template>
  <div class="container-fluid">
    <h1 class="text-primary text-center">Tableau Kanban</h1>
    <div class="form-group d-flex w-25 my-5">
      <input
        class="form-control h-25"
        v-model="newColumnName"
        placeholder="Nom de la colonne"
      />
      <button class="btn btn-primary btn-sm w-25 mx-3" @click="addKanbanColumn">
        Ajouter
      </button>
    </div>
    <div class="row overflow-auto">
      <KanbanColumn
        v-for="(column, index) in kanbanColumns"
        :key="index"
        :title="column.title"
        :tasks="column.tasks"
        @add-task="addTaskToColumn"
        @update-task="updateTaskInColumn"
      ></KanbanColumn>
    </div>
  </div>
</template>

<script setup>
import KanbanColumn from "./KanbanColumn.vue";
import { ref } from "vue";
import { useKanbanStore } from "../stores/kanbanStore";

const kanbanStore = useKanbanStore();
const kanbanColumns = ref(kanbanStore.columns);
const newColumnName = ref("");

const addKanbanColumn = () => {
  if (newColumnName.value.trim() !== "") {
    kanbanStore.addKanbanColumn({ title: newColumnName.value, tasks: [] });
    newColumnName.value = "";
  }
};

const addTaskToColumn = (columnName, newTask) => {
  kanbanStore.addTask(columnName, newTask);
  // console.log("nom de col:umn dans kanbanBoard", columnName);
};

const updateTaskInColumn = (columnTitle, taskIndex, updatedTask) => {
  kanbanStore.updateTask(columnTitle, taskIndex, updatedTask);
};
</script>
