import { useEffect, useState } from 'react';
import { getLocalStorageData } from '../utility/getLocalStorage';
import { getCalendarFormattedData } from '../utility/getCalendarFormattedData';
import Scheduler from './Scheduler';
import List from './List';
import { IAppointment, ICalendarFormat } from '../types';
import { initialData, formatedData } from '../utility/initialData';

const ShowAllAppointments = () => {
  const [appointmentData, setAppointmentData] = useState<IAppointment[]>(initialData);
  const [calendarData, setCalendarData] = useState<ICalendarFormat[]>(formatedData);
  const [toggle, setToggle] = useState('list');

  useEffect(() => {
    const storageData = getLocalStorageData();
    setAppointmentData(storageData);
    const forMattedData = getCalendarFormattedData(storageData);
    setCalendarData(forMattedData);
  }, [])

  return (
    <>
      <div className='flex justify-between items-center mb-8'>
        <div className='text-[24px] font-semibold text-center'>
          <span>All Appointments List</span>
        </div>
        <button
          className='bg-transparent w-[150px] hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
          onClick={() => { setToggle(toggle === 'list' ? 'calendar' : 'list') }}
        >
          {toggle === 'list' ? 'Calendar View' : 'List View'}
        </button>
      </div>
      {toggle === 'list' && <List appointmentData={appointmentData} />}
      <div className='overflow-auto max-h-[700px]'>
        {toggle === 'calendar' && <Scheduler calendarData={calendarData} />}
      </div>
    </>
  )
}

export default ShowAllAppointments;
