import React from 'react';
import { Card } from '@/components/ui/card';

const teamDetails = {
  name: 'Equipe A',
  members: [
    { id: 1, name: 'João', specialty: 'Elétrica' },
    { id: 2, name: 'Maria', specialty: 'Mecânica' },
    { id: 3, name: 'Pedro', specialty: 'Hidráulica' }
  ]
};

const TeamDetails = () => {
  return (
    <Card className="p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Detalhes da Equipe</h2>
      <h3 className="text-xl font-semibold">{teamDetails.name}</h3>
      <ul className="mt-4">
        {teamDetails.members.map((member) => (
          <li key={member.id} className="mb-2">
            <span className="font-bold">{member.name}</span> - {member.specialty}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TeamDetails;
