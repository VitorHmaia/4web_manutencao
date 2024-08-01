import React from "react";

interface TableRow {
  id: number;
  name: string;
  status: string;
  date: string;
  actions: string
}

const mockData: TableRow[] = [
  { id: 1, name: "Ambiente A", status: "Ativo", date: "2024-07-28", actions: "delete"},
  { id: 2, name: "Equipamento B", status: "Inativo", date: "2024-07-27", actions: "delete"},
  { id: 3, name: "O.S. C", status: "Em andamento", date: "2024-07-26", actions: "delete"},
  { id: 4, name: "O.S. D", status: "Concluída", date: "2024-07-25", actions: "delete"},
  { id: 5, name: "Ambiente E", status: "Ativo", date: "2024-07-24", actions: "delete"},
  { id: 6, name: "Equipamento F", status: "Inativo", date: "2024-07-23", actions: "delete"},
  { id: 7, name: "O.S. G", status: "Em andamento", date: "2024-07-22", actions: "delete"},
  { id: 8, name: "O.S. H", status: "Concluída", date: "2024-07-21", actions: "delete"},
  { id: 9, name: "Ambiente I", status: "Ativo", date: "2024-07-20" , actions: "delete"},
  { id: 10, name: "Equipamento J", status: "Inativo", date: "2024-07-19" , actions: "delete"},
  { id: 11, name: "O.S. K", status: "Em andamento", date: "2024-07-18" , actions: "delete"},
  { id: 12, name: "O.S. L", status: "Concluída", date: "2024-07-17", actions: "delete" },
];

export function Table() {
  return (
    <div className="p-6 overflow-x-auto">
      <div className="max-h-[400px] overflow-y-auto border border-gray-200">
        <table className="min-w-[600px] w-full border-collapse">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr>
              <th className="border border-gray-300 p-2">Ambiente</th>
              <th className="border border-gray-300 p-2">Equipamento</th>
              <th className="border border-gray-300 p-2">Solicitado em</th>
              <th className="border border-gray-300 p-2">Atendido em</th>
              <th className="border border-gray-300 p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row) => (
              <tr key={row.id}>
                <td className="border border-gray-300 p-2">{row.id}</td>
                <td className="border border-gray-300 p-2">{row.name}</td>
                <td className="border border-gray-300 p-2">{row.status}</td>
                <td className="border border-gray-300 p-2">{row.date}</td>
                <td className="border border-gray-300 p-2">{row.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}