import { IAppointment } from "../types";

export const timeBasedSorting = (data: IAppointment[]) => {
  return data.sort((a,b)=> {
    let splitATime = a.from.split(':');
    let splitBTime = b.from.split(':');
    return (+splitATime[0] - +splitBTime[0])
  });
}