'use client'
import React, { useState } from "react";
import { Card as UICard } from "@/components/ui/card";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface CardInterface {
  color?: string;
  qty?: string;
  text?: string;
  icon?: React.ReactNode;
}

export function Card({ color, qty, text, icon }: CardInterface) {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  return (
    <Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <div
          className={`${color} p-6 flex gap-2 rounded-md cursor-pointer`}
          onClick={() => setPopoverOpen(true)}
        >
          <div className="flex-1 flex flex-col">
            <strong className="text-3xl font-bold text-black">{qty}</strong>
            <span className="text-sm text-black">{text}</span>
          </div>
          <div className="text-black">{icon}</div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <h2 className="text-lg font-bold">{text}</h2>
        <p>Detalhes da equipe de manutenção.</p>
        <Button variant="secondary" onClick={() => setPopoverOpen(false)}>
          Fechar
        </Button>
      </PopoverContent>
    </Popover>
  );
}
