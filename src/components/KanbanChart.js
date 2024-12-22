"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import useStore from "../utils/store";

export default function KanbanChart() {
  const { columns } = useStore();
  const { t } = useTranslation();

  const data = {
    labels: columns.map((col) => t(`columns.${col.id}`)),
    datasets: [
      {
        label: t("chart.tasks"),
        data: columns.map((col) => col.tasks.length),
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">{t("chart.title")}</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
