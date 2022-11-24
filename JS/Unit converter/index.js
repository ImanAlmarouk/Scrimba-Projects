
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl= document.getElementById("input")
let convertBtn = document.getElementById("convert-btn")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")

convertBtn.addEventListener("click", function(){
    lengthConverter(inputEl.value)
    volumeConverter(inputEl.value)
    massConverter(inputEl.value)
    inputEl.value=""
})
function lengthConverter(length){
    let equFeet = (length * 3.281).toFixed(3)
    let equMeters = (length / 3.281).toFixed(3)
     
    let sentence = `${length} meters = ${equFeet} feet | ${length} feet =
     ${equMeters} meters`
     p1.innerHTML = sentence
}
function volumeConverter(volume){
    let equGallons = (volume * 0.264).toFixed(3)
    let equLiters = (volume / 0.264).toFixed(3)
     
    let sentence = `${volume} liters = ${equGallons} gallons | ${volume} gallons =
     ${equLiters} liters`
     p2.innerHTML = sentence
}
function massConverter(mass){
    let equPounds = (mass * 2.204).toFixed(3)
    let equKilos = (mass / 2.204).toFixed(3)
     
    let sentence = `${mass} kilos = ${equPounds} pounds | ${mass} pounds =
     ${equKilos} kilos`
     p3.innerHTML = sentence
    
}