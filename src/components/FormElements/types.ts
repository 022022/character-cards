import { RefObject } from 'react';

export interface FormElement {
  label: string;
  reference: RefObject<HTMLInputElement>;
  error?: string;
}

export interface FormSelectElement {
  label: string;
  reference: RefObject<HTMLSelectElement>;
  error?: string;
}