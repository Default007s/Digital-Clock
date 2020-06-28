const hourHand = document.querySelector('[data-hours]')
const minuteHand = document.querySelector('[data-minutes]')
const secondHand = document.querySelector('[data-seconds]')

setInterval(setClock, 1000);

function setClock() {
    const currentDate = new Date();
    hourHand.innerText = currentDate.getHours();
    if (hourHand.innerText < 10) {
        hourHand.innerText = "0" + (hourHand.innerText)
    }
    minuteHand.innerText = currentDate.getMinutes();
    if (minuteHand.innerText < 10) {
        minuteHand.innerText = "0" + (minuteHand.innerText)
    }
    secondHand.innerText = currentDate.getSeconds();
    if (secondHand.innerText < 10) {
        secondHand.innerText = "0" + (secondHand.innerText)
    }
}

setClock();

