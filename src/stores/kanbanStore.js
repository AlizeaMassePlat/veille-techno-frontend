import { defineStore } from "pinia";

export const useKanbanStore = defineStore("kanban", {
  state: () => ({
    columns: [],
  }),
  actions: {
    addKanbanColumn(newColumn) {
      this.columns.push(newColumn);
    },
    addTask(columnTitle, newTask) {
      const column = this.columns.find((col) => col.title === columnTitle);

      if (column) {
        column.tasks.push(newTask);
      }
    },
    removeTask(columnTitle, taskIndex) {
      const column = this.columns.find((col) => col.title === columnTitle);
      if (column && taskIndex >= 0 && taskIndex < column.tasks.length) {
        column.tasks.splice(taskIndex, 1);
      }
    },
    updateTask(columnTitle, taskIndex, updatedTask) {
      const column = this.columns.find((col) => col.title === columnTitle);
      if (column && taskIndex >= 0 && taskIndex < column.tasks.length) {
        column.tasks[taskIndex] = updatedTask;
      }
    },
  },
});
