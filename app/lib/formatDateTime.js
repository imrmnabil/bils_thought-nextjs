export default function formatDateTime(isoString) {
  const dateObj = new Date(isoString);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date = dateObj.getDate();
  const month = monthNames[dateObj.getMonth()]; 
  const year = dateObj.getFullYear();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();

  return {
    date,
    month,
    year,
    hour,
    minute
  };
}