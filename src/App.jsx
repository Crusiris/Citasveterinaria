import { useState, useEffect } from "react";
import Form from './components/Form';
import Header from './components/Header';
import PatientsList from './components/PatientsList';
import Modal from "./components/Modal";


function App() {  
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? [])
  const [patient, setPatient] = useState({}) 

  useEffect(()=>{  
    localStorage.setItem('patients',JSON.stringify(patients))
  },[patients])

  const deletePatient = (id)=>{   
    const updatePatients = patients.filter(patient => patient.id !== id )
    setPatients(updatePatients) 
  }

 
  return (
    <div className="h-full px-4 xl:px-0 mt-10 md:container md:mx-auto lg:mt-20 text-gray-800">
      <Header/>

      <div className='pb-6 h-full mt-6 space-y-12 lg:space-y-0 lg:mt-12 flex flex-col items-center lg:items-start lg:flex-row lg:space-x-4'>
        <Form
         patients={patients}
         setPatients={setPatients}
         patient={patient}
         setPatient={setPatient}
        /> 

        <PatientsList
         patients={patients}
         setPatient={setPatient} 
         deletePatient={deletePatient}    
        /> 

        
        
      </div>
    </div>
  )
}

export default App
