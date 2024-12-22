"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import useStore from "../utils/store";
import { useTranslation } from "react-i18next";

export default function TaskModal({ closeModal, task }) {
  const { addTask, editTask } = useStore();
  const { t } = useTranslation();

  const schema = z.object({
    name: z.string().min(1, t("form.required")), // Validación del nombre
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: task ? task.name : "", // Cargar datos de la tarea si existen
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    if (task) {
      // Editar tarea existente
      editTask(task.id, data);
      Swal.fire(t("actions.editTask"), t("actions.taskEdited"), "success");
    } else {
      // Crear nueva tarea
      addTask({ id: Date.now(), ...data });
      Swal.fire(t("actions.addTask"), t("actions.taskAdded"), "success");
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-xl font-bold mb-4">
          {task ? t("actions.editTask") : t("actions.addTask")}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {t("form.taskName")}
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className={`w-full border p-2 rounded ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder={t("form.taskPlaceholder")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              {t("actions.cancel")}
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              {t("actions.save")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
