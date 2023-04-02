export const addCommaSeparator = (num: number | string) => {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}