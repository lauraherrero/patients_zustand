import { useForm } from 'react-hook-form';
import { Error } from './Error';
import { DraftPatient } from '../types';
import { usePatientStore } from '../store';


export const PatientsForm = () => {

  const addPatient  = usePatientStore(state => state.addPatient);
  const { register, handleSubmit, formState: { errors } } = useForm<DraftPatient>();
  const onSubmit = (data: DraftPatient) => { 
    addPatient(data);
   };


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-100"
            placeholder="Nombre del Paciente"
            {...register('name', {
              required: 'El nombre del paciente es obligatorio',
            })}
          />
          {errors.name &&
            <Error>{errors.name?.message}</Error>
          }
        </div>
        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            type="text"
            id="caretaker"
            className="w-full p-3 border border-gray-100"
            placeholder="Nombre del Propietario"
            {...register('caretaker', {
              required: 'El propietario es obligatorio',
            })}
          />
          {errors.caretaker &&
            <Error>{errors.caretaker?.message}</Error>
          }
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email de Registro"
            className="w-full p-3 border border-gray-100"
            {...register('email', {
              required: 'El email del paciente es obligatorio',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email No Válido'
              }
            })}
          />
          {errors.email &&
            <Error>{errors.email?.message}</Error>
          }
        </div>
        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            type="date"
            id="date"
            className="w-full p-3 border border-gray-100"
            {...register('date', {
              required: 'La fecha es obligatoria',
            })}
          />
          {errors.date &&
            <Error>{errors.date?.message}</Error>
          }
        </div>
        <div className="mb-5">
          <label htmlFor="symtoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symtoms"
            className="w-full p-3 border border-gray-100"
            placeholder="Síntomas del paciente"
            {...register('symtoms', {
              required: 'Los síntomas son obligatorios',
            })}
          ></textarea>
          {errors.symtoms &&
            <Error>{errors.symtoms?.message}</Error>
          }
        </div>
        <input
          type="submit"
          value="Guardar Paciente"
          className="bg-indigo-600 w-ful p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
        />
      </form>
    </div>
  )
}
