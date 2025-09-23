const getDateElem = document.getElementById('userInputDate');
const calculateBtn = document.getElementById('calculate-age-btn');
const finalAgeValue = document.getElementById('finalAge');
let dateSplit = getDateElem.value
let finalAge;
function calculateAgeFnc(userData){
    const dateConstructor = new Date()
    const YEAR = dateConstructor.getFullYear() - userData.getFullYear()
    const MONTH = dateConstructor.getMonth() - userData.getMonth()
    const DATE = dateConstructor.getDate() - userData.getDate()

    finalAge = (`${YEAR}`)
}

calculateBtn.addEventListener('click',()=>{
    const inputValue = getDateElem.value;

    if(!inputValue){
        finalAgeValue.textContent = "Please select a date";
    }else{
        calculateAgeFnc(new Date(inputValue))
        finalAgeValue.textContent = `Your Age is ${finalAge}`;
    }
})