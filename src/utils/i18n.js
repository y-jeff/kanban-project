"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Kanban Board",
        columns: {
          todo: "To Do",
          inProgress: "In Progress",
          done: "Done",
        },
        actions: {
          addTask: "Add Task",
          editTask: "Edit Task",
          deleteTask: "Delete Task",
          confirmDelete: "Are you sure you want to delete this task?",
          deleteTaskWarning: "This action cannot be undone.",
          taskDeleted: "Task deleted successfully!",
          taskAdded: "Task added successfully!",
          taskEdited: "Task edited successfully!",
          confirmClose: "Are you sure?",
          unsavedChangesWarning: "You have unsaved changes. Do you want to close without saving?",
          cancel: "Cancel",
          save: "Save",
          ok: "OK",
          confirm: "Confirm",
        },
        form: {
          taskName: "Task Name",
          taskPlaceholder: "Enter the task name",
          required: "This field is required",
        },
        chart: {
          title: "Task Statistics",
          tasks: "Number of Tasks",
        },
        table: {
          taskName: "Task Name",
          status: "Status",
          actions: "Actions",
        },
      },
    },
    es: {
      translation: {
        title: "Tablero Kanban",
        columns: {
          todo: "Por Hacer",
          inProgress: "En Proceso",
          done: "Finalizado",
        },
        actions: {
          addTask: "Agregar Tarea",
          editTask: "Editar Tarea",
          deleteTask: "Eliminar Tarea",
          confirmDelete: "¿Estás seguro de que deseas eliminar esta tarea?",
          deleteTaskWarning: "Esta acción no se puede deshacer.",
          taskDeleted: "¡Tarea eliminada con éxito!",
          taskAdded: "¡Tarea agregada con éxito!",
          taskEdited: "¡Tarea editada con éxito!",
          confirmClose: "¿Estás seguro?",
          unsavedChangesWarning: "Tienes cambios sin guardar. ¿Deseas cerrar sin guardar?",
          cancel: "Cancelar",
          save: "Guardar",
          ok: "Aceptar",
          confirm: "Confirmar",
        },
        form: {
          taskName: "Nombre de la Tarea",
          taskPlaceholder: "Ingresa el nombre de la tarea",
          required: "Este campo es obligatorio",
        },
        chart: {
          title: "Estadísticas de Tareas",
          tasks: "Número de Tareas",
        },
        table: {
          taskName: "Nombre de la Tarea",
          status: "Estado",
          actions: "Acciones",
        },
      },
    },
  },
  lng: "en", // Idioma inicial
  fallbackLng: "en", // Idioma de respaldo
  interpolation: {
    escapeValue: false, // React ya maneja el escape de valores
  },
});

export default i18n;
