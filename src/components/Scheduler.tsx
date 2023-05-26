import { Scheduler } from "@aldabil/react-scheduler";
import { ICalendarData } from "../types";

const SchedulerComponent = ({calendarData}: ICalendarData) => {

  return (<>
    <Scheduler
      view="day"
      day={{
        startHour: 0, 
        endHour: 23,
        step: 60,
      }}
      events={calendarData}
    />
  </>)
};

export default SchedulerComponent;
