import React, { useEffect, useState } from 'react';
import { getLocalStorageData } from '../utility/getLocalStorage';

const tableHeading = ['Appointment', 'From', 'To'];
const sampleData = [
  {'from': '11:00', 'to': '12:00', 'appointment': 'A1'}
];

const ShowAllAppointments = () => {
  const [appointmentData, setAppointmentData] = useState(sampleData);

  useEffect(() => {
      const storageData = getLocalStorageData();
      console.log('storageData', storageData);
      setAppointmentData(storageData);
  }, [])

  console.log(appointmentData);

  return (
    <>
      <div className='text-[24px] mt-[60px] mb-[20px] font-semibold text-center'>
        <span>All Appointments List</span>
      </div>
      <div className='md:px-5 px-0 text-center'>
        <table className='tablebox2'>
          <thead className='text-[#4B5C68]'>
            <tr>
              {tableHeading?.map(d => (
                <th key={d} className='h-[40px] w-[150px] text-[12px] bg-[#E4EDF2] px-5 text-center'>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {appointmentData.length && appointmentData?.map((appointment) => (
              <tr key={appointment.appointment} className='font-semibold h-[40px]'>
                <td className='text-[14px] text-center'>{appointment.appointment}</td>
                <td className='text-[14px] text-center'>{appointment.from} AM</td>
                <td className='text-[14px] text-center'>{appointment.to} PM</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ShowAllAppointments;
