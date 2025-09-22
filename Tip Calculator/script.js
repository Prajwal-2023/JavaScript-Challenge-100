const billAmountElem = document.getElementById("bill-elem");
const tipAmountElem = document.getElementById("tip-elem");
const calculateAmout = document.getElementById("calculate-elem");
const showTotal = document.querySelector("#total-div span");

const totalAmount = () => {
  if (!billAmountElem.value.trim() || !tipAmountElem.value.trim()) {
    alert("Empty Input");
  }else{
    const tipTotal = billAmountElem.value * (tipAmountElem.value/100)
    showTotal.innerText = Number(tipTotal)
    billAmountElem.value = '';
    tipAmountElem.value = '';
  }
};
calculateAmout.addEventListener("click", totalAmount);
