// Set the date for New Year's (January 1, 2026)
const newYear = new Date("January 1, 2026 00:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYear - now;

  // Time calculations
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (gap > 0) {
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    // Update DOM
    const times = document.querySelectorAll(".time h2");
    times[0].innerText = d;
    times[1].innerText = h < 10 ? `0${h}` : h;
    times[2].innerText = m < 10 ? `0${m}` : m;
    times[3].innerText = s < 10 ? `0${s}` : s;
  } else {
    // Countdown finished
    document.querySelector(".countdown").innerHTML = "<h2>🎉 Happy New Year 2026! 🎉</h2>";
    document.querySelector(".year").style.display = "none";
    clearInterval(countdownInterval);
  }
}

// Call the function every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to prevent delay
updateCountdown();
