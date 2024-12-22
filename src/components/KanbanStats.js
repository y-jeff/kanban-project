"use client";

import React from "react";
import { useTranslation } from "react-i18next";
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
import useStore from "../utils/store";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function KanbanStats() {
  const { columns } = useStore();
  const { t } = useTranslation();

  // Configuración de los datos del gráfico
  const data = {
    labels: columns.map((col) => t(`columns.${col.id}`)),
    datasets: [
      {
        label: t("chart.tasks"),
        data: columns.map((col) => col.tasks.length), // Longitud de las tareas en cada columna
        backgroundColor: ["#4caf50", "#ff9800", "#f44336"], // Verde, naranja, rojo
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: t("chart.title"),
      },
    },
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">{t("chart.title")}</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
