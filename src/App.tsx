import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import TimePickerComponent from "./components/TimePickerComponent";
import ShowAllAppointments from './components/ShowAllAppointments';
import { initialData } from './utility/initialData';
import { setLocalStorageData } from './utility/setLocalStorage';

function App() {
  const [buttonToggle, setButtonToggle] = useState<string>('show_all');

  const handleButtonToggle = () => {
    const toggleResult = buttonToggle === 'show_all' ? 'create_appointment' : 'show_all';
    setButtonToggle(toggleResult);
  }

  useEffect(() => {
    setLocalStorageData(initialData);
  }, [])

  return (
    <div className="text-center	">
      <Header
        handleButtonToggle={handleButtonToggle}
        buttonToggle={buttonToggle}
      />
      <div className="max-w-[1200px] w-full mx-auto">
        <div
          className="bg-neutral-100 px-12 mt-10 py-10 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200"
        >
          <div className='mt-0'>
            {buttonToggle === 'show_all' ? <ShowAllAppointments /> : <TimePickerComponent />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
