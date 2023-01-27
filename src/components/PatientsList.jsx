import CardPatient from "./CardPatient"


const PatientsList = () => {
  return (
    <div className="lg:w-3/5">
      <h2 className="font-semibold md:font-black text-gray-800 text-xl md:text-3xl md:text-center mb-6 md:mb-10">Lista de pacientes</h2>
        <div className="space-y-4 pb-6 md:pb-0"> 
           <CardPatient/>
           <CardPatient/>
           <CardPatient/>
           <CardPatient/>
           <CardPatient/>
           <CardPatient/>
        </div> 
    </div>
  )
}

export default PatientsList
