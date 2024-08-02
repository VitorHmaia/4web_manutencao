'use client'
import React, { useState } from 'react';
import { Modal } from "@/components/modal";

interface CardProps {
  color?: string;
  text?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode; // Conteúdo do modal
}

export function Card({ color, text, icon, children }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`${color} p-6 flex gap-2 rounded-md cursor-pointer`} onClick={() => setIsOpen(true)}>
        <div className="flex-1 flex flex-col items-center">
          {icon}
          <span className="text-xl font-bold text-black">{text}</span>
        </div>
      </div>
      <Modal open={isOpen} onOpenChange={setIsOpen}>
        {children}
      </Modal>
    </>
  );
}
