import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import TimePickerComponent from "./components/TimePickerComponent";
import ShowAllAppointments from './components/ShowAllAppointments';
import { initialData } from './utility/initialData';
import { setLocalStorageData } from './utility/setLocalStorage';

function App() {
  const [buttonToggle, setButtonToggle] = useState<string>('show_all');

  const handleButtonToggle = () => {
    buttonToggle === 'show_all' ? setButtonToggle('create_appointment') : setButtonToggle('show_all');
  }

  useEffect(() => {
    setLocalStorageData(initialData);
  }, [])

  return (
    <div className="text-center	">
      <Header />
      <div
        className="bg-neutral-50 px-6 py-20 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200"
      >
        <div>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 w-[225px]"
              onClick={handleButtonToggle}
          >
            {buttonToggle === 'show_all' ? 'Create Appointments' : 'Show All Appointments'}
          </button>
        </div>
        <div className='mt-8'>
          { buttonToggle === 'show_all' ? <ShowAllAppointments /> : <TimePickerComponent />}
        </div>
      </div>
    </div>
  );
}

export default App;
