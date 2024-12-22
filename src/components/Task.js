"use client";

import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

export default function Task({ task, onEdit, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({
      id: task.id.toString(), // ID único para la tarea
    });
  const { t } = useTranslation();

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  const handleDelete = (e) => {
    e.stopPropagation(); // Evita el evento de arrastre al interactuar con el botón
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

  const handleEdit = (e) => {
    e.stopPropagation(); // Evita el evento de arrastre al interactuar con el botón
    onEdit();
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white p-4 rounded shadow-md flex justify-between items-center"
    >
      <p>{task.name}</p>
      <div className="flex space-x-2">
        <button
          onClick={handleEdit}
          onPointerDown={(e) => e.stopPropagation()} // Evita el evento de arrastre
          className="bg-yellow-500 text-white px-2 py-1 rounded"
        >
          ✏️ {t("actions.editTask")}
        </button>
        <button
          onClick={handleDelete}
          onPointerDown={(e) => e.stopPropagation()} // Evita el evento de arrastre
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          🗑️ {t("actions.deleteTask")}
        </button>
      </div>
    </div>
  );
}
