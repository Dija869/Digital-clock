function updateClock() {
    const currentDate = new Date(); // Current date and time

    // Extract hours, minutes, and seconds
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Format time to ensure two digits
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Create the time string
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Update the clock div
    document.getElementById('clock').textContent = timeString;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();