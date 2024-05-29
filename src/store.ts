import { create } from 'zustand';
import { PatientState } from './types';

export const usePatientStore = create<PatientState>(() => ({
  patients: []
})) 