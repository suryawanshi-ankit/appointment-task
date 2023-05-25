import { IAppointment } from "../types";

export const setLocalStorageData = (appointmentList: IAppointment[]) => {
  localStorage.setItem("appointments", JSON.stringify(appointmentList));
}