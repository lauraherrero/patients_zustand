import { PatientDetailsProps } from "../types"

export const PatientDetails = ({ patient }: PatientDetailsProps) => {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">ID: {''} 
        <span className="font-normal normal-case">{patient.id}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''} 
        <span className="font-normal normal-case">{patient.name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''} 
        <span className="font-normal normal-case">{patient.caretaker}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''} 
        <span className="font-normal normal-case">{patient.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''} 
        <span className="font-normal normal-case">{patient.symtoms}</span>
      </p>
    </div>
  )
}
