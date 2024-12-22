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
        priority: {
          high: "High Priority",
          medium: "Medium Priority",
          low: "Low Priority",
        },
        actions: {
          addTask: "Add Task",
          editTask: "Edit Task",
          deleteTask: "Delete Task",
          confirmDelete: "Are you sure you want to delete this task?",
          deleteTaskWarning: "This action cannot be undone.",
          taskDeleted: "Task deleted successfully!",
          taskCreated: "Task created successfully!",
          taskUpdated: "Task updated successfully!",
          create: "Create",
          cancel: "Cancel",
          update: "Update",
          taskName: "Task Name",
          selectPriority: "Select Priority",
          signIn: "Sign In",
          signOut: "Sign Out",
        },
        chart: {
          title: "Task Statistics",
          task: "Tasks",
          high: "High Priority",
          medium: "Medium Priority",
          low: "Low Priority",
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
        priority: {
          high: "Alta Prioridad",
          medium: "Prioridad Media",
          low: "Baja Prioridad",
        },
        actions: {
          addTask: "Agregar Tarea",
          editTask: "Editar Tarea",
          deleteTask: "Eliminar Tarea",
          confirmDelete: "¿Estás seguro de que deseas eliminar esta tarea?",
          deleteTaskWarning: "Esta acción no se puede deshacer.",
          taskDeleted: "¡Tarea eliminada con éxito!",
          taskCreated: "¡Tarea creada con éxito!",
          taskUpdated: "¡Tarea actualizada con éxito!",
          create: "Crear",
          cancel: "Cancelar",
          update: "Actualizar",
          taskName: "Nombre de la Tarea",
          selectPriority: "Seleccionar Prioridad",
          signIn: "Iniciar Sesión",
          signOut: "Cerrar Sesión",
        },
        chart: {
          title: "Estadísticas de Tareas",
          task: "Tareas",
          high: "Alta Prioridad",
          medium: "Prioridad Media",
          low: "Baja Prioridad",
        },
      },
    },
  },
  lng: "en", // Idioma predeterminado
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
