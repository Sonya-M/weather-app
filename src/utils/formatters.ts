/**
 * @param {string} dateString string in a valid date fromat
 * @returns date string in the format DD Mon YYYY (e.g. "25 Mar 1972")
 */
export function formatDate(date: number) {
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(date);
}

// source: https://stackoverflow.com/questions/40927938/extract-time-from-timestamp-in-js
const pad = (num: number) => ("0" + num).slice(-2);

export function getTimeFromDate(date: number) {
  const d = new Date(date);
  let hours = d.getHours(),
    minutes = d.getMinutes(),
    secs = d.getSeconds();
  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

export function getHrsAndMinsFromDate(date: number) {
  const d = new Date(date);
  let hours = d.getHours(),
    minutes = d.getMinutes();
  return `${pad(hours)}:${pad(minutes)}`;
}
