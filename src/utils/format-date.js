export default function (date) {
  if (date && new Date(date) !== 'Invalid Date') {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
  return false;
}
