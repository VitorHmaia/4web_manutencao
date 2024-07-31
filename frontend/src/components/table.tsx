import React from "react";

interface TableRow {
  id: number;
  name: string;
  status: string;
  date: string;
}

const mockData: TableRow[] = [
  { id: 1, name: "Ambiente A", status: "Ativo", date: "2024-07-28" },
  { id: 2, name: "Equipamento B", status: "Inativo", date: "2024-07-27" },
  { id: 3, name: "O.S. C", status: "Em andamento", date: "2024-07-26" },
  { id: 4, name: "O.S. D", status: "Concluída", date: "2024-07-25" },
  { id: 5, name: "Ambiente E", status: "Ativo", date: "2024-07-24" },
  { id: 6, name: "Equipamento F", status: "Inativo", date: "2024-07-23" },
  { id: 7, name: "O.S. G", status: "Em andamento", date: "2024-07-22" },
  { id: 8, name: "O.S. H", status: "Concluída", date: "2024-07-21" },
  { id: 9, name: "Ambiente I", status: "Ativo", date: "2024-07-20" },
  { id: 10, name: "Equipamento J", status: "Inativo", date: "2024-07-19" },
  { id: 11, name: "O.S. K", status: "Em andamento", date: "2024-07-18" },
  { id: 12, name: "O.S. L", status: "Concluída", date: "2024-07-17" },
];

export function Table() {
  return (
    <div className="p-6 overflow-x-auto">
      <div className="max-h-[400px] overflow-y-auto border border-gray-200">
        <table className="min-w-[600px] w-full border-collapse">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr>
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Nome</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Data</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row) => (
              <tr key={row.id}>
                <td className="border border-gray-300 p-2">{row.id}</td>
                <td className="border border-gray-300 p-2">{row.name}</td>
                <td className="border border-gray-300 p-2">{row.status}</td>
                <td className="border border-gray-300 p-2">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}