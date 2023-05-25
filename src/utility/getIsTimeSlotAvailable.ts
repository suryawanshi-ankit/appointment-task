import { getLocalStorageData } from '../utility/getLocalStorage';
import { IAppointment } from "../types";

export const getIsTimeSlotAvailable = (fromTime: string, toTime: string) => {
  const presentAppointments = getLocalStorageData();
  let haveAppointmentInSlot = false;
  presentAppointments.map((d: IAppointment) => {
    let splitFromTime = d.from.split(':');
    let splitToTime = d.to.split(':');
    
    let splitCurrFromTime = fromTime.split(':');
    let splitCurrToTime = toTime.split(':');
    
    console.log(splitFromTime, splitToTime);
    console.log(splitCurrFromTime, splitCurrToTime);

    console.log(+splitFromTime[0], +splitToTime[0]);
    console.log(splitCurrFromTime, splitCurrToTime);
    
    if ((+splitCurrFromTime[0]) >= (+splitFromTime[0]) && (+splitCurrToTime[0]) <= (+splitToTime[0]) && !haveAppointmentInSlot) {
      console.log('haveAppointmentInSlothaveAppointmentInSlot', haveAppointmentInSlot)
      haveAppointmentInSlot = true;
    }
  })
  console.log('haveAppointmentInSlot', haveAppointmentInSlot);
  return haveAppointmentInSlot;
}