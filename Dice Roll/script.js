const diceBtn = document.getElementById('dice-btn')

function randomDiceFace(){
    const diceface = Math.floor((Math.random() * 6) + 1)
    console.log(diceface)
}

diceBtn.addEventListener('click',()=>{
    randomDiceFace()
})