// creo 5 numeri casuali legati ad un add eventlistener
const btnEl = document.querySelector(".container_random button")
const containerCounter = document.querySelector(".container_counter")
const containerFirstPart = document.querySelector(".container_random")
const containerNumber = document.querySelector(".number_random")
const containerFormEl = document.querySelector(".container_form")
const timerEl = document.querySelector(".timer")
const formEl = document.querySelector("form")
const submitEl = document.querySelector("input[type='submit']")
const inputArray = document.querySelectorAll("input[type='number']")
const levelContainerEl = document.querySelector(".level_container")
const levelEl = document.querySelector(".level")
const forgotEl = document.querySelector(".forgot")
const randomNumbers = []
let points_on_five_number = 0;




// I start with a click on my start game button 
btnEl.addEventListener("click", function () {
    //hide the button and show the container
    btnEl.classList.add("d-none")
    containerCounter.classList.remove("d-none");
    // reset every element
    points_on_five_number = 0;
    randomNumbers.splice(0,5);
    timerEl.innerHTML = 5;
    containerNumber.innerHTML = "";
    // crea 5 numeri randomm 
    for (let index = 0; index < 5; index++) {
        const singleRandomNumber = Math.floor(Math.random() * 100) + 1;
        containerNumber.innerHTML += singleRandomNumber + " ";
        randomNumbers.push(singleRandomNumber)
    }
    timerFunction();
    setTimeout(startCountdown, 5000);
})


// check that the numbers entered are correct
submitEl.addEventListener("click", function (e) {
    e.preventDefault();
    for (let index = 0; index < randomNumbers.length; index++) {
        const singleRandomNumber = randomNumbers[index];
        const singleInputNumber = inputArray[index].value
        if (singleRandomNumber == singleInputNumber) {
            points_on_five_number++

        } else {
            levelContainerEl.innerHTML = "You forgot :"
            levelEl.classList.add("d-none")
            forgotEl.classList.remove("d-none")
            forgotEl.innerHTML += singleRandomNumber + " ";
            if (index == 4) {
                setTimeout (() => {
                   if (confirm("Do you want to play again?")) {
                    location.reload();
                   }
                }, 1000)
            }
        }
        checkLevel(points_on_five_number)
    }
    formEl.reset();
})



// -------------FUNCTION---------------  

function startCountdown() {
    containerFirstPart.classList.add("d-none");
    containerFormEl.classList.remove("d-none");

}

function timerFunction() {
    let timeOfTimer = 5;
    const timerFunction = setInterval(function () {
        timeOfTimer--;
        timerEl.innerHTML = timeOfTimer;
        if (timeOfTimer <= 0) {
            clearInterval(timerFunction);
        }

    }, 1000)
}


function checkLevel(points) {
    if (points == 5) {
        levelEl.innerHTML++
        btnEl.classList.remove("d-none");
        containerCounter.classList.add("d-none");
        containerFirstPart.classList.remove("d-none");
        containerFormEl.classList.add("d-none");
        btnEl.innerHTML ="New Level"
    }
}
