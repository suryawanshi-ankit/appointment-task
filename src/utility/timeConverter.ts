export const timeConverter = (timeSlot: string): string => {
  let time = timeSlot.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [timeSlot];

  if (time.length > 1) {
    // @ts-ignore
    time = time.slice(1);
    time[5] = +time[0] < 12 ? ' AM' : ' PM';
    time[0] = (+time[0] % 12 || 12).toString();
  }
  return time.join('');
}
