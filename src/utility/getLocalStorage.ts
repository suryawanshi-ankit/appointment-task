import { timeBasedSorting } from './sortWithTime';

export const getLocalStorageData = () => {
  const localStorageValue = localStorage.getItem("appointments");
    if (localStorageValue !== null) {
      let parsedStorageValue = JSON.parse(localStorageValue);
      parsedStorageValue = timeBasedSorting(parsedStorageValue);
      return parsedStorageValue;
    }
}