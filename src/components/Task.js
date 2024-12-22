"use client";

import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

export default function Task({ task, onEdit, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({
      id: task.id.toString(),
    });
  const { t } = useTranslation();

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  // Colores basados en prioridad
  const priorityClass = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-green-500",
  }[task.priority] || "bg-gray-300";

  const handleDelete = () => {
    Swal.fire({
      title: t("actions.confirmDelete"),
      text: t("actions.deleteTaskWarning"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: t("actions.deleteTask"),
      cancelButtonText: t("actions.cancel"),
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete();
        Swal.fire(t("actions.taskDeleted"), "", "success");
      }
    });
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`${priorityClass} p-4 rounded shadow-md flex flex-col space-y-2`}
    >
      <p>{task.name}</p>
      <p className="text-sm text-white">{t(`priority.${task.priority}`)}</p>
      <div className="flex space-x-2">
        <button
          onClick={onEdit}
          onPointerDown={(e) => e.stopPropagation()}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          ✏️ {t("actions.editTask")}
        </button>
        <button
          onClick={handleDelete}
          onPointerDown={(e) => e.stopPropagation()}
          className="bg-gray-800 text-white px-2 py-1 rounded"
        >
          🗑️ {t("actions.deleteTask")}
        </button>
      </div>
    </div>
  );
}
