'use client'
// components/InputElements.tsx
import React, { ChangeEvent } from 'react';

interface InputElementsProps {
  label: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface TextAreaProps {
  label: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function InputElements({ label, placeholder, onChange }: InputElementsProps) {
  return (
    <div className='items-center flex m-1'>
      <label>{label}</label>&nbsp;
      <input className='p-1 w-fit rounded-full m-1 border border-light-outline px-2' placeholder={placeholder} onChange={onChange} required />
    </div>
  );
}

export function TextAreaElements({ label, placeholder, onChange }: TextAreaProps) {
  return (
    <div className='items-center flex m-2'>
      <label>{label}</label>&nbsp;
      <textarea placeholder={placeholder} className='px-5 w-fit rounded-full border border-light-outline' onChange={onChange} required></textarea>
    </div>
  );
}
