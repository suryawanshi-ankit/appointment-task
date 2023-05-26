import { IAppointment } from "../types";
import { format } from "date-fns";

export const getCalendarFormattedData = (storageData: IAppointment[]) => {
  const todaysDate = format(new Date(), "yyyy-MM-dd");

  const formattedData = storageData.map((data, index) => {
    return {
      event_id: (index + 1),
      title: `Appointment ${index + 1}`,
      start: new Date(`${todaysDate} ${data.from}`),
      end: new Date(`${todaysDate} ${data.to}`),
    }
  })

  return formattedData;
}
