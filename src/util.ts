const IntlFormat = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: 'INR',
  maximumFractionDigits: 0,
});

export const formatAmount = (value: string | number): string => (!Number.isNaN(value.toString()) ? IntlFormat.format(Number(value.toString())) : value.toString());

export function ordinal_suffix_of(i: number): string {
  let j = i % 10,
      k = i % 100;
  if (j === 1 && k !== 11) {
      return i + "st";
  }
  if (j === 2 && k !== 12) {
      return i + "nd";
  }
  if (j === 3 && k !== 13) {
      return i + "rd";
  }
  return i + "th";
}

export const getStartEndDate = (startDate: string, endDate: string) => {
  const _start = new Date(startDate);
  const _end = new Date(endDate);
  return `${ordinal_suffix_of(_start.getDate())} - ${ordinal_suffix_of(_end.getDate())} ${_end.toLocaleString('default', { month: 'short' })} ${_end.getFullYear()}`;
}

export const formatDate = (date: string) => {
  const _date = new Date(date);
  return `${ordinal_suffix_of(_date.getDate())} ${_date.toLocaleString('default', { month: 'short' })} ${_date.getFullYear()}`;
}
