function time_function() {
    // Current time in the constant current_time
    const current_time = new Date();

    // Makes it readable in the format of hr:min:sec AM/PM
    const timeString = current_time.toLocaleTimeString();
    document.getElementById("time").textContent = timeString
}

// Update the time
time_function();

// Update every second
setInterval(time_function, 1000);

// 30 minute timer to suggest a break
setTimeout(() => {
    alert("Take a break 🌿");
  }, 1800000);  

// Have the 30 minute timer show on the HTML
let totalSeconds = 1800;
let timeLeft = totalSeconds;

function break_countdown() {
    // Checks how many whole minutes are left
    const minutes = Math.floor(timeLeft/60);

    // How many "extra" seconds are left in the minute
    const seconds = timeLeft % 60

    // Makes sure that if the number is a single digit, there is a 0 in front
    const formatted_time =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    document.getElementById("break_timer").textContent = "Time Left Until Next Break: " + formatted_time

    // Subtract one second from the timer
    timeLeft--

    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("break_timer").textContent = "Time's up!";
      }
}

// Run immediately
break_countdown();

// Runs every second
const timer = setInterval(break_countdown, 1000);
