function updateCountdown() {
    let currentDate = new Date();
    let currentDayOfWeek = currentDate.getDay();
    let daysUntilSaturday = 6 - currentDayOfWeek;
    let nextSaturday = new Date(currentDate);

    nextSaturday.setDate(currentDate.getDate() + daysUntilSaturday);
    nextSaturday.setHours(21, 0, 0, 0);

    let timeDifference = nextSaturday - currentDate;

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    let timeLeftFormatted = "";
    if (days > 0) {
        timeLeftFormatted += days + " day ";
    }
    if (hours > 0) {
        timeLeftFormatted += hours + " hours ";
    }
    if (minutes > 0) {
        timeLeftFormatted += minutes + " minutes ";
    }

    timeLeftFormatted += seconds + " seconds";

    let dataDiv = document.querySelector(".data");

    let countdownText = "Until Saturday left: " + timeLeftFormatted;

    dataDiv.innerHTML = countdownText;

    if (timeDifference <= 0) {
        clearInterval(intervalId);
        dataDiv.textContent = "Saturday now!";
    }
}

let intervalId = setInterval(updateCountdown, 1000);


