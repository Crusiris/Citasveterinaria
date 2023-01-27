import Form from './components/Form';
import Header from './components/Header';
import PatientsList from './components/PatientsList';


function App() {  
  return (
    <div className="px-4 xl:px-0 mt-10 md:container md:mx-auto lg:mt-20 text-gray-800">
      <Header/>

      <div className='mt-6 space-y-12 lg:space-y-0 lg:mt-12 flex flex-col items-center lg:items-start lg:flex-row lg:space-x-4'>
        <Form/> 
        <PatientsList/> 
      </div>
    </div>
  )
}

export default App
