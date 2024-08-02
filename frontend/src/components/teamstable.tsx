import React from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const teams = [
  { id: 1, name: 'Equipe A' },
  { id: 2, name: 'Equipe B' },
  { id: 3, name: 'Equipe C' }
];

const TeamsTable = () => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Equipes de Manutenção</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome da Equipe</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((team) => (
            <TableRow key={team.id}>
              <TableCell>{team.name}</TableCell>
              <TableCell>
                <Button variant="default">Ver Detalhes</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TeamsTable;
