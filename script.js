function updateDateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const dateString = now.toLocaleDateString();
  
  let amPm = "AM";
  let formattedHours = hours;
  if (hours >= 12) {
    amPm = "PM";
    formattedHours = hours % 12;
    if (formattedHours === 0) {
      formattedHours = 12;
    }
  }

  const timeString = `${formattedHours}:${minutes}:${seconds} ${amPm}`;

  document.getElementById('time').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

updateDateTime();
setInterval(updateDateTime, 1000);


