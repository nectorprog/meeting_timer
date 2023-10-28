function updateCountdown() {
    let currentDate = new Date();
    let currentDayOfWeek = currentDate.getDay();
    let daysUntilMonday = (7 - currentDayOfWeek + 1) % 7;
    let nextMonday = new Date(currentDate);

    nextMonday.setDate(currentDate.getDate() + daysUntilMonday);
    nextMonday.setHours(19, 0, 0, 0);

    let timeDifference = nextMonday - currentDate;

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

    let countdownText = "Until Monday left: " + timeLeftFormatted;

    dataDiv.innerHTML = countdownText;

    if (timeDifference <= 0) {
        clearInterval(intervalId);
        dataDiv.textContent = "It's Monday now!";
    }
}

let intervalId = setInterval(updateCountdown, 1000);
