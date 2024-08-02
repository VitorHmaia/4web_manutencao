import React from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const AssignTeam = () => {
  return (
    <Card className="p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Atribuir Equipe</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Solicitação de Manutenção</label>
          <Input placeholder="ID da solicitação" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Equipe</label>
          <Select>
            <option>Equipe A</option>
            <option>Equipe B</option>
            <option>Equipe C</option>
          </Select>
        </div>
        <Button type="submit" variant="default">
          Atribuir
        </Button>
      </form>
    </Card>
  );
};

export default AssignTeam;
