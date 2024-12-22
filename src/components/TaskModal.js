"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import useStore from "../utils/store";

export default function TaskModal({ task, closeModal }) {
  const { addTask, editTask } = useStore();
  const { t } = useTranslation();

  const defaultValues = task
    ? { name: task.name, priority: task.priority }
    : { name: "", priority: null };

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues,
  });

  const priority = watch("priority");

  useEffect(() => {
    if (task) {
      setValue("priority", task.priority);
    }
  }, [task, setValue]);

  // Crear opciones dinámicamente basadas en el idioma actual
  const priorityOptions = [
    { value: "high", label: t("priority.high") },
    { value: "medium", label: t("priority.medium") },
    { value: "low", label: t("priority.low") },
  ];

  const onSubmit = (data) => {
    if (!priority) {
      Swal.fire({
        title: t("actions.selectPriority"),
        icon: "warning",
        confirmButtonText: t("actions.ok"),
      });
      return;
    }

    if (task) {
      editTask(task.id, { ...data, priority });
      Swal.fire(t("actions.taskUpdated"), "", "success");
    } else {
      addTask({ id: Date.now(), ...data, priority });
      Swal.fire(t("actions.taskCreated"), "", "success");
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md space-y-4 w-1/3"
      >
        <h2 className="text-xl font-bold mb-4">
          {task ? t("actions.editTask") : t("actions.addTask")}
        </h2>
        <input
          {...register("name")}
          placeholder={t("actions.taskName")}
          className="w-full p-2 border rounded"
          required
        />
        <Select
          options={priorityOptions} // Usa opciones dinámicas basadas en traducción
          value={priorityOptions.find((opt) => opt.value === priority)}
          onChange={(selectedOption) => setValue("priority", selectedOption.value)}
          placeholder={t("actions.selectPriority")}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          {task ? t("actions.update") : t("actions.create")}
        </button>
        <button
          type="button"
          onClick={closeModal}
          className="bg-gray-500 text-white px-4 py-2 rounded w-full"
        >
          {t("actions.cancel")}
        </button>
      </form>
    </div>
  );
}
