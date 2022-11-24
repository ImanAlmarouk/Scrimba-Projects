let countHome = document.getElementById("home-score")
let countGuest = document.getElementById("guest-score")
let countH = 0
let countG = 0

function increment1H() {
    countH += 1
    countHome.textContent = countH
}

function increment2H() {
    countH += 2
    countHome.textContent = countH
}

function increment3H() {
    countH += 3
    countHome.textContent = countH
}
function increment1G() {
    countG += 1
    countGuest.textContent = countG
}

function increment2G() {
    countG += 2
    countGuest.textContent = countG
}

function increment3G() {
    countG += 3
    countGuest.textContent = countG
}