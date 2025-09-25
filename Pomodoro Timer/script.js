let minElem = document.getElementById('min')
let secElem = document.getElementById('sec')

let minute = 25;
let seconds = 0 
minElem.innerText = minute
secElem.innerText = seconds.toString().padStart(2, "0");
const START_BTN = document.getElementById('start-btn')
const STOP_BTN = document.getElementById('stop-btn')
const RESET_BTN = document.getElementById('reset-btn')

START_BTN.addEventListener('click',startTimerBtn)
STOP_BTN.addEventListener('click',stopTimerBtn)
RESET_BTN.addEventListener('click',resetTimerBtn)

function startTimerBtn(){
    let strTime = Number(minElem.innerText) 
    while(strTime > 0){
        strTime --
    }
    console.log(strTime)
    
}
function stopTimerBtn(){
    console.log('Stop')
}
function resetTimerBtn(){
    console.log('Reset')
}

function timer(){

}

