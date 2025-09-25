const diceBtn = document.getElementById("dice-btn");
const diceShapeElem = document.querySelector(".actual-dice");

function randomDiceFace() {
  diceShapeElem.innerHTML = "";
  diceShapeElem.style.transition = "transform 0.5s ease";
  diceShapeElem.style.transform = `rotate(360deg)`;
  setTimeout(() => {
    diceShapeElem.style.transform = "rotate(0deg) translateX(0) translateY(0)";
  }, 500);

  const diceface = Math.floor(Math.random() * 6 + 1);
  console.log(diceface);

  switch (diceface) {
    case 1:
      setTimeout(() => {
        diceShapeElem.innerHTML += `
          <div class="dice-position"></div>`;
      }, 600);
      break;
    case 2:
      setTimeout(() => {
        diceShapeElem.innerHTML += `
            <div id="shape-parent">
            <div class="dice-position"></div>
            <div class="dice-position"></div>
          </div>`;
      }, 600);
      break;
    case 3:
      setTimeout(() => {
        diceShapeElem.innerHTML += `
       <div id="shape-parent">
            <div class="dice-position"></div>
            <div></div>
          </div>
          <div>
            <div class="dice-position"></div>
          </div>
          <div id="shape-parent">
            <div></div>
            <div class="dice-position"></div>
          </div>
      `;
      }, 600);
      break;
    case 4:
      setTimeout(() => {
        diceShapeElem.innerHTML += `
           <div id="shape-parent">
            <div class="dice-position"></div>
            <div class="dice-position"></div>
          </div>
          <div id="shape-parent">
            <div class="dice-position"></div>
            <div class="dice-position"></div>
          </div>
      `;
      }, 600);

      break;
    case 5:
      setTimeout(() => {
        diceShapeElem.innerHTML += `
           <div id="shape-parent">
            <div class="dice-position"></div>
            <div class="dice-position"></div>
          </div>
          <div>
            <div class="dice-position"></div>
          </div>
          <div id="shape-parent">
            <div class="dice-position"></div>
            <div class="dice-position"></div>
          </div>`;
      }, 600);
      break;
    case 6:
      setTimeout(() => {
        diceShapeElem.innerHTML += `
           <div id="shape-parent">
            <div class="dice-position"></div>
            <div class="dice-position"></div>
            <div class="dice-position"></div> 
          </div>
          <div id="shape-parent">
            <div class="dice-position"></div>
            <div class="dice-position"></div>
            <div class="dice-position"></div>
          </div>`;
      }, 600);
      break;
  }
}

diceBtn.addEventListener("click", () => {
  randomDiceFace();
});
