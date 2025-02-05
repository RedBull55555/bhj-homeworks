document.addEventListener("DOMContentLoaded", () => {
    let timerElement = document.getElementById("timer");
    let timeRemaining = parseInt(timerElement.textContent);

    let countdown = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            timerElement.textContent = timeRemaining;
        } else {
            clearInterval(countdown);
            alert("Вы победили в конкурсе!");
        }
    }, 1000);
});
