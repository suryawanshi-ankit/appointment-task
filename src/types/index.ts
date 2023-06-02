export interface IAppointment {
  from: string;
  to: string;
  appointment: string
}

export interface ICalendarFormat {
  event_id: number,
  title: string,
  start: Date,
  end: Date
}

export interface IHeader {
  handleButtonToggle: () => void,
  buttonToggle: string,
}

export interface ISuggestionModal {
  handleOpenModel: (open: boolean) => void,
  handleSuggestionSelection: (isAccepted: boolean) => void,
  showTimeOption: IAppointment,
}

export interface IList {
  appointmentData: IAppointment[]
}

export interface ICalendarData {
  calendarData: ICalendarFormat[]
}

export interface IAvailableSlot {
  from: string,
  to: string
}
