import { timeConverter } from '../utility/timeConverter';
import { IAppointment, IList } from "../types";

const tableHeading = ['Appointment', 'From', 'To'];

const List = ({appointmentData}: IList) => {
  return (
    <div className='text-center'>
      <table className='tablebox2 w-full'>
        <thead className='text-[#4B5C68]'>
          <tr>
            {tableHeading?.map(d => (
              <th key={d} className='h-[50px] w-[150px] text-[12px] bg-gray-500 text-white px-5 text-base text-center'>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {appointmentData.length && appointmentData?.map((appointment: IAppointment) => (
            <tr key={appointment.appointment} className='font-semibold h-[50px]'>
              <td className='text-[14px] text-center'>{appointment.appointment}</td>
              <td className='text-[14px] text-center'>{timeConverter(appointment.from)}</td>
              <td className='text-[14px] text-center'>{timeConverter(appointment.to)}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default List;
