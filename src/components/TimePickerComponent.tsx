import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { getIsTimeSlotAvailable } from '../utility/getIsTimeSlotAvailable';
import { getLocalStorageData } from '../utility/getLocalStorage';
import { setLocalStorageData } from '../utility/setLocalStorage';
import { availableSlots } from '../utility/availableSlots';
import { IAppointment } from '../types';
import SuggestionModal from './SuggestionModal';



const TimePickerComponent = () => {
  const [fromValue, setFromValue] = useState<string>('12:00');
  const [toValue, setToValue] = useState<string>('13:00');
  const [showTimeOption, setShowTimeOption] = useState<IAppointment>({
    from: "",
    to: "",
    appointment: ""
  });
  const [openSuggestion, setOpenSuggestion] = useState<boolean>(false);

  const handleAddAppointment = () => {
    if (fromValue !== "" && toValue !== "") {
      const isSlotNotPresent = getIsTimeSlotAvailable(fromValue, toValue);
      let storageData = getLocalStorageData();
      if (isSlotNotPresent) {
        const availableTimeSlot = availableSlots(storageData, fromValue, toValue);
        setShowTimeOption(availableTimeSlot);
        setOpenSuggestion(true);
      } else {
        storageData = [...storageData, {'from': fromValue, 'to': toValue, 'appointment': `A${storageData.length+1}`}]
        setLocalStorageData(storageData);
      }
    } else {
      console.log('From or To time is not entered');
    }
  }

  const handleSuggestionSelection = (isAccepted: boolean) => {
    if (isAccepted) {
      let storageData = getLocalStorageData();
      storageData = [...storageData, showTimeOption]
      setLocalStorageData(storageData);
    }
    setShowTimeOption({
      from: "",
      to: "",
      appointment: ""
    });
    setOpenSuggestion(false);
  }

  return (
    <>
      <div className='text-[24px] mt-[60px] mb-[20px] font-semibold text-center'>
        <span>Create New Appointments</span>
      </div>
      <div className='mb-2'>
        <label>From: </label>
        <TimePicker
          onChange={(value) => setFromValue(value)}
          value={fromValue}
          className={''}
        />
      </div>
      <div className='mb-2'>
        <label>To: </label>
        <TimePicker
          onChange={(value) => setToValue(value)}
          value={toValue}
          className={''}
        />
      </div>
      <button
        className="middle none center mr-3 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-dark="true"
        onClick={() => handleAddAppointment()}
      >
        Add Appointment
      </button>
      {openSuggestion && 
        <SuggestionModal 
          handleOpenModel={setOpenSuggestion} 
          handleSuggestionSelection={handleSuggestionSelection}
          showTimeOption={showTimeOption}
        />
      }
    </>
  );
}

export default TimePickerComponent;
