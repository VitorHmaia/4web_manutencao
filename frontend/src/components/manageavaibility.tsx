'use client'
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';

const initialMembers = [
  { id: 1, name: 'João', team: 'Equipe A', available: true },
  { id: 2, name: 'Maria', team: 'Equipe B', available: false },
  { id: 3, name: 'Pedro', team: 'Equipe C', available: true }
];

const ManageAvailability = () => {
  const [members, setMembers] = useState(initialMembers);

  const handleCheckboxChange = (id: number) => {
    setMembers(prevMembers =>
      prevMembers.map(member =>
        member.id === id ? { ...member, available: !member.available } : member
      )
    );
  };

  return (
    <Card className="p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Gerenciar Disponibilidade</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Equipe</TableCell>
            <TableCell>Disponibilidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map(member => (
            <TableRow key={member.id}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.team}</TableCell>
              <TableCell>
                <Checkbox
                  checked={member.available}
                  onCheckedChange={() => handleCheckboxChange(member.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ManageAvailability;
