import {useState, useEffect} from 'react'
import Alert from './Alert'

const Form = ({patients, patient,setPatient, setPatients}) => { 
  const [namePet, setNamePet] = useState('');
  const [nameOwner, setNameOwner] = useState('');
  const [email, setEmail] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [symptom, setSymptom] = useState('');
  const [errorForm, setErrorForm] = useState(false);

  const generateId = () => {
      const random = Math.random().toString(36).substring(2);
      const date = Date.now().toString(36);
      return random + date;
  }

  useEffect(()=>{
      if(Object.keys(patient).length > 0){
        setNamePet(patient.namePet)
        setNameOwner(patient.nameOwner)
        setEmail(patient.email)
        setDepartureDate(patient.departureDate)
        setSymptom(patient.symptom)
      }
  },[patient])

  const handleSumit = (e)=>{
    e.preventDefault()
    if ([namePet, nameOwner, email, departureDate, symptom].includes('')) {
      setErrorForm(true)
      return;
    } 
    setErrorForm(false)
    
    const newPatients = {
      namePet, 
      nameOwner, 
      email, 
      departureDate, 
      symptom,
      
    }

    if (patient.id) {
      newPatients.id= patient.id
      const updatePatient = patients.map(statePatient => statePatient.id === patient.id ? newPatients :statePatient)
      setPatients(updatePatient)
      setPatient({})
    }else{
      newPatients.id= generateId()
      setPatients([...patients, newPatients])
    }

    setNamePet('')
    setNameOwner('')
    setEmail('')
    setDepartureDate('')
    setSymptom('')
  }
  
  return (
    <div className='w-full flex flex-row md:justify-center lg:justify-start lg:flex-col  lg:w-2/5 lg:sticky lg:top-5'>
      <h2 className='hidden lg:flex text-3xl font-black text-center mb-10'>Seguimiento Pacientes</h2>
     
          <form onSubmit={handleSumit} className="w-full bg-white rounded-lg drop-shadow-md  md:max-w-md md:min-w-[28rem] lg:min-w-fit lg:max-w-none pt-6 pb-5 px-5">  
            <p className='text-xl mb-4 font-semibold md:font-bold'>Añade y administra pacientes</p>
            {errorForm && 
              <Alert>
              <div>
                  <span className="font-medium">Alert!</span> Todos los campos son obligatorios
              </div>
              </Alert>
            }
            <div className="relative mb-5">
              <input className="peer input-nottouche px-4" 
               id="namePet" name="namePet" type="text" 
               value={namePet} onChange={ (e) => setNamePet(e.target.value) }
              />
              <label className="pointer-events-none absolute left-4 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm bg-white" htmlFor="namePet">Nombre mascota</label>
            </div>
           
            <div className="relative mb-5">
              <input className="peer input-nottouche px-4" id="nameOwner" name="nameOwner" type="text" 
               value={nameOwner} onChange={ (e) => setNameOwner(e.target.value) }
              />
              <label className="pointer-events-none absolute left-4 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm bg-white" htmlFor="nameOwner">Nombre del propietario</label>
            </div>

            <div className="relative mb-5">
              <input className="peer input-nottouche px-4" id="email" name="email" type="email" 
               value={email} onChange={ (e) => setEmail(e.target.value) }
              />
              <label className="pointer-events-none absolute left-4 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm bg-white" htmlFor="email">Email</label>
            </div>

            <div className="relative mb-5">
              <input className="peer input-nottouche px-4" id="departureDate" name="departureDate" type="date"
               value={departureDate} onChange={ (e) => setDepartureDate(e.target.value) }
              />
              <label className="pointer-events-none absolute left-4 -top-2.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm bg-white" htmlFor="departureDate">Fecha de salida</label>
            </div>

            <div className="relative mb-5">
              <textarea className="w-full p-4 min-h-16 border border-gray-300 rounded-md" 
              placeholder="Describe los sintomas" name="symptom" id="symptom"
              value={symptom} onChange={ (e) => setSymptom(e.target.value) }
              ></textarea> 
            </div>

            <input value={patient.id ?'Editar Paciente':'Agregar paciente'} type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-md hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"></input>             
          </form>
    </div>
  )
}

export default Form
