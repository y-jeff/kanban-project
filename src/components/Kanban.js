"use client";

import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import useStore from "../utils/store";
import Column from "./Column";
import TaskModal from "./TaskModal";
import KanbanStats from "./KanbanStats";
import { useTranslation } from "react-i18next";

export default function Kanban() {
  const { columns, moveTask, setDragging } = useStore();
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleDragStart = () => {
    setDragging(true); // Activar el estado de arrastre
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setDragging(false); // Desactivar el estado de arrastre

    if (!over) return;

    const taskId = parseInt(active.id);
    const sourceColumn = columns.find((col) =>
      col.tasks.some((task) => task.id === taskId)
    );
    const targetColumn = columns.find((col) => col.id === over.id);

    if (sourceColumn && targetColumn && sourceColumn.id !== targetColumn.id) {
      moveTask(taskId, sourceColumn.id, targetColumn.id);
    }
  };

  const openModal = (task = null) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentTask(null);
    setIsModalOpen(false);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{t("title")}</h1>
          <button
            onClick={toggleLanguage}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {i18n.language === "en" ? "Español" : "English"}
          </button>
        </div>
        <button
          onClick={() => openModal()}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          + {t("actions.addTask")}
        </button>
        <div className="flex space-x-4">
          {columns.map((column) => (
            <SortableContext
              key={column.id}
              items={column.tasks.map((task) => task.id.toString())}
              strategy={verticalListSortingStrategy}
            >
              <Column column={column} openModal={openModal} />
            </SortableContext>
          ))}
        </div>
        <KanbanStats />
        {isModalOpen && <TaskModal closeModal={closeModal} task={currentTask} />}
      </div>
    </DndContext>
  );
}