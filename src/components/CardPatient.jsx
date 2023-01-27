 
const CardPatient = () => {
  return (
    <div className="max-w-md min-w-[28rem] lg:max-w-none flex flex-col sm:flex-col space-y-3  p-4 w-full bg-white rounded-md drop-shadow border-l-4 border-indigo-600">
        <li className="text-sm sm:text-base font-medium uppercase list-none">
            Nombre:{''} <span className="font-normal normal-case ">Pepito</span>
        </li>
        <li className="text-sm sm:text-base font-medium uppercase list-none">
            Propietario:{''} <span className="font-normal normal-case ">Crusiris</span>
        </li>
        <li className="text-sm sm:text-base font-medium uppercase list-none">
            Email:{''} <span className="font-normal normal-case ">Pepito@gmail.com</span>
        </li>
        <li className="text-sm sm:text-base font-medium uppercase list-none">
            Fecha de alta:{''} <span className="font-normal normal-case ">23/01/2021</span>
        </li>
        <li className="text-sm sm:text-base font-medium uppercase list-none">
            Sintomas:{''}<span className="font-normal normal-case"> It is a long established fact that a reader will be distracted by the readable content of a page when
            </span>
        </li> 
    </div>
  )
}

export default CardPatient
