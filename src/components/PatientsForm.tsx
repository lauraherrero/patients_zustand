import { useForm } from 'react-hook-form';


export const PatientsForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = () => {console.log('Nuevo paciente')};
  

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
              required: 'El nombre del paciente es obligatorio'
            })}
          />
          {errors.name?.message}
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
            // {...register('email', {
            //   required: 'El email del paciente es obligatorio'
            // })}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input 
            type="date" 
            name="date" 
            id="date"
            className="w-full p-3 border border-gray-100" 
          />
        </div>
        <div className="mb-5">
          <label htmlFor="symtoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea 
            name="symtoms" 
            id="symtoms"
            className="w-full p-3 border border-gray-100"
            placeholder="Síntomas del paciente"
          ></textarea>
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
