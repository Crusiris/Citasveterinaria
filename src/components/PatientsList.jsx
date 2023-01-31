import CardPatient from "./CardPatient"
import NoFound from "./NoFound"
 

const PatientsList = ({patients, setPatient, deletePatient}) => {
 

  return (
    <div className="w-full flex-col items-center   lg:w-3/5">
      
      <h2 className="font-semibold md:font-black text-gray-800 text-xl md:text-3xl md:text-center mb-6 md:mb-10">Lista de pacientes</h2>
       
          {patients.length > 0 ?
          (
            <div className="space-y-4 pb-6 md:pb-0 flex flex-col items-center"> 
            {patients.map( patient => (
                <CardPatient 
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}  
                /> 
            ))} 
            </div>
          )
          :
          (
          <NoFound/>
          )
          } 
       
        
    </div>
  )
}

export default PatientsList
