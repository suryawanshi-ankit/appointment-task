import { IAppointment, IAvailableSlot } from "../types";
import { minutesOfDay } from "./convertTimeToMinutes";

const getToTime = (splitCurrFromTime: string[], minutesRequired: number, from: string, dataLength: number) => {
  let totalMinutes = minutesOfDay(splitCurrFromTime) + minutesRequired;
  let h = (totalMinutes / 60 | 0) % 24;
  let m = totalMinutes % 60 === 0 ? '00' : totalMinutes % 60;
  let newAvailableSlot = `${h}:${m}`
  return { from: from, to: newAvailableSlot, appointment: `A${dataLength + 1}` };
}

export const availableSlots = (data: IAppointment[], fromTime: string, toTime: string) => {
  let timeSlostOpt = { from: '', to: '', appointment: '' };
  let splitFromTime = fromTime.split(':');
  let splitToTime = toTime.split(':');

  let availableSlot: IAvailableSlot[] = [];
  let start = '';
  let end = '';

  data.forEach((d) => {
    if (!start && !end) {
      start = d.from;
      end = d.to;
    } else if (end === d.from) {
      end = d.to;
    } else {
      availableSlot = [...availableSlot, { from: end, to: d.from }];
      end = d.to;
    }
  })

  let minutesRequired = minutesOfDay(splitToTime) - minutesOfDay(splitFromTime);
  let newAvailableSlot = '';

  availableSlot.forEach((slot: IAvailableSlot, index: any) => {
    let splitCurrFromTime = slot.from.split(':');
    let splitCurrToTime = slot.to.split(':');
    let dMiuntes = minutesOfDay(splitCurrToTime) - minutesOfDay(splitCurrFromTime);

    if ((minutesRequired <= dMiuntes) && !newAvailableSlot) {
      timeSlostOpt = getToTime(splitCurrFromTime, minutesRequired, slot.from, data.length);
    } else if (availableSlot.length === (index + 1) && !newAvailableSlot) {
      timeSlostOpt = getToTime(end.split(':'), minutesRequired, end, data.length);
    }
  })

  if (!availableSlot.length) {
    timeSlostOpt = getToTime(end.split(':'), minutesRequired, end, data.length);
  }

  return timeSlostOpt;
}
