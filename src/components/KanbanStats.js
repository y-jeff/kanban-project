"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTranslation } from "react-i18next";
import useStore from "../utils/store";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function KanbanStats() {
  const { t } = useTranslation();
  const { columns } = useStore();

  // Calcular cuántas tareas hay en cada columna
  const taskCounts = columns.map((column) => ({
    id: column.id,
    title: t(`columns.${column.id}`),
    count: column.tasks.length,
  }));

  // Configuración de los datos del gráfico
  const data = {
    labels: taskCounts.map((col) => col.title), 
    datasets: [
      {
        label: t("chart.task"), 
        data: taskCounts.map((col) => col.count), 
        backgroundColor: ["#ff6384", "#ffcd56", "#4bc0c0"], 
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">{t("chart.title")}</h2>
      <Bar data={data} />
    </div>
  );
}
