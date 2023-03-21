// creo 5 numeri casuali legati ad un add eventlistener
const btnEl = document.querySelector(".container_random button")
const containerCounter = document.querySelector(".container_counter")
const containerFirstPart = document.querySelector(".container_random")
const containerNumber = document.querySelector(".number_random")
const containerFormEl = document.querySelector(".container_form")
const randomNumbers = []

// I start with a click on my start game button 
btnEl.addEventListener("click", function() {
    //hide the button and show the container
    btnEl.classList.add("d-none")
    containerCounter.classList.remove("d-none");
    // crea 5 numeri randomm 
for (let index = 0; index < 5; index++) {
    const singleRandomNumber = Math.floor(Math.random() * 100) + 1;
    containerNumber.innerHTML += singleRandomNumber + " ";
    randomNumbers.push(singleRandomNumber)
    console.log(randomNumbers);
}
setInterval(startCountdown,5000 )
})

function startCountdown() {
    containerFirstPart.classList.add("d-none");
    containerFormEl.classList.remove("d-none");

}
