import React, { ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Modal({ children, open, onOpenChange }: ModalProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <DialogPrimitive.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl p-8 bg-white rounded-md shadow-lg z-50">
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Root>
  );
}