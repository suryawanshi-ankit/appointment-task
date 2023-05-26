import { IAppointment } from "../types";

export const availableSlots = (data: IAppointment[], fromTime: string, toTime: string) => {
  let endTime = '';
  let timeSlostOpt:IAppointment = { from: '', to: '', appointment: '' };
  data.forEach((d, index) => {
    if (timeSlostOpt.from === "") {
      if (endTime === '' || d.from === endTime) {
        endTime = d.to
      } else {
        let splitFromTime = fromTime.split(':');
        let splitToTime = toTime.split(':');
        let diffNewHour = (+splitToTime[0]) - (+splitFromTime[0]);
        let diffNewMin = (+splitFromTime[1]) - (+splitToTime[1]);
  
        let splitFromTime1 = endTime.split(':');
        let splitToTime1 = d.from.split(':');
        let diffNewHour1 = (+splitToTime1[0]) - (+splitFromTime1[0]);
        let diffNewMin1 = (+splitFromTime1[1]) - (+splitToTime1[1]);
  
        if (diffNewHour === diffNewHour1 && diffNewMin === diffNewMin1) {
          timeSlostOpt = { from: endTime, to: d.from, appointment: `A${data.length}` };
        } else if (index + 1 === data.length) {
          let splitToTime1 = d.to.split(':');
          timeSlostOpt = { from: d.to, to: `${+splitToTime1[0] + diffNewHour}:${+splitToTime1[1] + diffNewMin}`, appointment: `A${data.length + 1}` };
        }

      }
    }
  })
  return timeSlostOpt;
}