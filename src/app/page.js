import React from "react";
import Kanban from "../components/Kanban";

export default function Page() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Tablero Kanban</h1>
      <Kanban />
    </div>
  );
}
