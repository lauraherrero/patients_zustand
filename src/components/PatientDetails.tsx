import { usePatientStore } from "../store"
import { PatientDetailsProps } from "../types"
import { PatienDetailItem } from "./PatienDetailItem"

export const PatientDetails = ({ patient }: PatientDetailsProps) => {
  const deletePatient = usePatientStore(state => state.deletePatient)
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatienDetailItem label='ID' data={patient.id} />
      <PatienDetailItem label='Nombre' data={patient.name} />
      <PatienDetailItem label='Propietario' data={patient.caretaker} />
      <PatienDetailItem label='Email' data={patient.email} />
      <PatienDetailItem label='Fecha Alta' data={patient.date.toString()} />
      <PatienDetailItem label='Síntomas' data={patient.symtoms} />
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        >Editar</button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => deletePatient(patient.id)}
        >Eliminar</button>
      </div>
    </div>
  )
}
