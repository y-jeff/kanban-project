import { create } from "zustand"; // Importar correctamente

const useStore = create((set) => ({
  columns: [
    {
      id: "todo",
      tasks: [],
    },
    {
      id: "inProgress",
      tasks: [],
    },
    {
      id: "done",
      tasks: [],
    },
  ],
  addTask: (task) =>
    set((state) => ({
      columns: state.columns.map((col) =>
        col.id === "todo" ? { ...col, tasks: [...col.tasks, task] } : col
      ),
    })),
  editTask: (taskId, updatedTask) =>
    set((state) => ({
      columns: state.columns.map((col) => ({
        ...col,
        tasks: col.tasks.map((task) =>
          task.id === taskId ? { ...task, ...updatedTask } : task
        ),
      })),
    })),
  deleteTask: (taskId) =>
    set((state) => ({
      columns: state.columns.map((col) => ({
        ...col,
        tasks: col.tasks.filter((task) => task.id !== taskId),
      })),
    })),
  moveTask: (taskId, sourceColumnId, targetColumnId) =>
    set((state) => {
      const task = state.columns
        .find((col) => col.id === sourceColumnId)
        ?.tasks.find((task) => task.id === taskId);

      if (!task) return state;

      return {
        columns: state.columns.map((col) => {
          if (col.id === sourceColumnId) {
            return { ...col, tasks: col.tasks.filter((t) => t.id !== taskId) };
          }
          if (col.id === targetColumnId) {
            return { ...col, tasks: [...col.tasks, task] };
          }
          return col;
        }),
      };
    }),
}));

export default useStore;
