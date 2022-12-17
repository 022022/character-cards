import { RefObject } from 'react';
import { Character } from '../Card';

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

export interface CreateForm {
  addToCardList: (character: Character) => void;
}