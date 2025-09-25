const leftDivElem = document.getElementById('left_div')
const rightDivElem = document.getElementById('right_div')
const iPhoneImageElem = document.getElementById('iPhoneImage')
const samsungImageElem = document.getElementById('samSungImage')





function increaseSizeDivLeft(){
    leftDivElem.style.width = `100%`;
    leftDivElem.style.transition = `0.9s ease-in-out`;
}
function reduceSizeDivLeft(){
    leftDivElem.style.width = `50%`;
    leftDivElem.style.transition = `0.9s ease-in-out`;
}
function increaseSizeDivRight(){
    rightDivElem.style.width = `100%`;
    rightDivElem.style.transition = `0.9s ease-in-out`;
}
function reduceSizeDivRight(){
    rightDivElem.style.width = `50%`;
    rightDivElem.style.transition = `0.9s ease-in-out`;
}


leftDivElem.addEventListener('mouseenter',increaseSizeDivLeft);
leftDivElem.addEventListener('mouseleave', reduceSizeDivLeft);

rightDivElem.addEventListener('mouseenter',increaseSizeDivRight);
rightDivElem.addEventListener('mouseleave', reduceSizeDivRight);
