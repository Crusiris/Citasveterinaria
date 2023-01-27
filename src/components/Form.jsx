import React from 'react'

const Form = () => {
  
  return (
    <div className='lg:w-2/5'>
      <h2 className='hidden lg:flex text-3xl font-black text-center mb-10'>Seguimiento Pacientes</h2>
     
          <form className="bg-white rounded-lg drop-shadow-md  max-w-md min-w-[28rem] lg:min-w-fit lg:max-w-none pt-6 pb-5 px-5 lg:sticky lg:top-5">  
            <p className='text-xl mb-4 font-semibold md:font-bold'>Añade y administra pacientes</p>
            <div className="relative mb-5">
              <input className="peer input-nottouche px-4" id="namePet" name="namePet" type="text" />
              <label className="pointer-events-none absolute left-4 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm bg-white" htmlFor="namePet">Nombre mascota</label>
            </div>
           
            <div className="relative mb-5">
              <input className="peer input-nottouche px-4" id="nameOwner" name="nameOwner" type="text" />
              <label className="pointer-events-none absolute left-4 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm bg-white" htmlFor="nameOwner">Nombre del propietario</label>
            </div>

            <div className="relative mb-5">
              <input className="peer input-nottouche px-4" id="email" name="email" type="email" />
              <label className="pointer-events-none absolute left-4 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm bg-white" htmlFor="email">Email</label>
            </div>

            <div className="relative mb-5">
              <input className="peer input-nottouche px-4" id="departureDate" name="departureDate" type="date" />
              <label className="pointer-events-none absolute left-4 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm bg-white" htmlFor="departureDate">Fecha de salida</label>
            </div>

            <div className="relative mb-5">
              <textarea className="w-full p-4 min-h-16 border border-gray-300 rounded-md" placeholder="Describe los sintomas" name="symptom" id="symptom"></textarea> 
            </div>

            <button type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-md hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">
              Agregar paciente
            </button>             
          </form>
    </div>
  )
}

export default Form
