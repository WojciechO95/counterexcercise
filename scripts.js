const endDate = new Date("Dec 24, 2024, 16:00:00").getTime();

const countdownFunc = () => {
  const dateNow = new Date().getTime();
  let timeLeft = endDate - dateNow;
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
};

window.setInterval(countdownFunc, 1000);
