const CardPatient = ({patient, setPatient,deletePatient}) => {
    const handleDelete = ()=>{
        let confirmResp = confirm('¿Desea eliminar este paciente?')
        if (confirmResp) {
            deletePatient(patient.id)
        }
    }
   
  return ( 
    <div className="md:mx-auto lg:mx-0 max-w-md md:min-w-[28rem] lg:max-w-none flex flex-col sm:flex-col space-y-3  p-4 w-full bg-white rounded-md drop-shadow border-l-4 border-indigo-600">
    <li className="text-sm sm:text-base font-medium uppercase list-none">
        Nombre:{''} <span className="font-normal normal-case ">{patient.namePet}</span>
    </li>
    <li className="text-sm sm:text-base font-medium uppercase list-none">
        Propietario:{''} <span className="font-normal normal-case ">{patient.nameOwner}</span>
    </li>
    <li className="text-sm sm:text-base font-medium uppercase list-none">
        Email:{''} <span className="font-normal normal-case ">{patient.email}</span>
    </li>
    <li className="text-sm sm:text-base font-medium uppercase list-none">
        Fecha de alta:{''} <span className="font-normal normal-case ">{patient.departureDate}</span>
    </li>
    <li className="text-sm sm:text-base font-medium uppercase list-none">
        Sintomas:{''}<span className="font-normal normal-case"> 
        {patient.symptom}
        </span>
    </li> 
    <div className="w-full flex space-y-4 md:space-y-0 flex-col sm:flex-row justify-between mt-4">
        <button onClick={()=>setPatient(patient)} type="button" className="btn-primary" > Editar </button>
        <button onClick={handleDelete} type="button" className="btn-delete">  Eliminar </button>
    </div>
    </div> 
  )
}

export default CardPatient
