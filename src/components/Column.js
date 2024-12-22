"use client";

import React from "react";
import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";
import { useTranslation } from "react-i18next";
import useStore from "../utils/store";

export default function Column({ column, openModal }) {
  const { setNodeRef } = useDroppable({ id: column.id });
  const { t } = useTranslation();
  const { deleteTask } = useStore(); // Acción para eliminar tareas

  return (
    <div ref={setNodeRef} className="w-1/3 bg-gray-100 p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">{t(`columns.${column.id}`)}</h2>
      <div className="space-y-4">
        {column.tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onEdit={() => openModal(task)} // Modal para editar la tarea
            onDelete={() => deleteTask(task.id)} // Acción para eliminar la tarea
          />
        ))}
      </div>
    </div>
  );
}
