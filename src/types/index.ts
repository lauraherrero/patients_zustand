export type Patient = {
  id: string;
  name: string;
  caretaker: string;
  email: string;
  date: Date;
  symtoms: string;
};


export type DraftPatient = Omit<Patient, 'id'>

export type PatientDetailsProps = {
  patient: Patient;
}

export type PatientDetailItemProps = {
  label: string;
  data: string
}