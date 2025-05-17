Fancybox.bind("[data-fancybox]");

function submitBooking() {
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if (!date || !time) {
    document.getElementById('result').textContent = "Please select both date and time.";
    return;
  }

  document.getElementById('result').textContent = `Looking forward to meeting you in ${date} at ${time} `;
}
