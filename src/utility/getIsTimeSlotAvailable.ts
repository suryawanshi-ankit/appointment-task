import { getLocalStorageData } from '../utility/getLocalStorage';
import { IAppointment } from "../types";

export const getIsTimeSlotAvailable = (fromTime: string, toTime: string) => {
  const presentAppointments = getLocalStorageData();
  let haveAppointmentInSlot = false;
  presentAppointments.forEach((d: IAppointment) => {
    let splitFromTime = d.from.split(':');
    let splitToTime = d.to.split(':');

    let splitCurrFromTime = fromTime.split(':');
    let splitCurrToTime = toTime.split(':');

    if ((+splitCurrFromTime[0]) >= (+splitFromTime[0]) && (+splitCurrToTime[0]) <= (+splitToTime[0])) {
      haveAppointmentInSlot = true;
    }
  })
  return haveAppointmentInSlot;
}