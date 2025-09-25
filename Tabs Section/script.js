const sectionTab = document.querySelector(".section-tab");
const contentTab = document.querySelector(".content-tab");

const sectionTabArr = [
  {
    id: 1,
    tabname: "Section 1",
    sectionData:
      "The mountains stood tall against the horizon, their peaks covered with fresh snow while a river rushed noisily through the valley below.",
  },
  {
    id: 2,
    tabname: "Section 2",
    sectionData:
      "A curious cat wandered across the cobblestone street, pausing now and then to chase the flickering shadows of passing lanterns.",
  },
  {
    id: 3,
    tabname: "Section 3",
    sectionData:
      "Beneath the starry night sky, the old oak tree whispered in the breeze, its branches swaying like arms reaching out to the moon.",
  },
];
sectionTabArr.forEach((tab) => {
  sectionTab.innerHTML += `
     <span onclick="tabs(${tab.id})">${tab.tabname}</span>
    `;
});
const sectionSpan = document.querySelectorAll(".section-tab span");

function tabs(id) {
  const selectedTab = sectionTabArr.find((tab) => tab.id === id);
  switch (selectedTab.tabname) {
    case "Section 1":
      sectionSpan.forEach((span) => (span.style.color = "black"));
      sectionSpan[id - 1].style.color = "rgb(255, 111, 0)";
      contentTab.innerHTML = "";
      contentTab.innerHTML += `<p class="para">${selectedTab.sectionData}</p>`;
      break;

    case "Section 2":
      sectionSpan.forEach((span) => (span.style.color = "black"));
      sectionSpan[id - 1].style.color = "rgb(255, 111, 0)";
      contentTab.innerHTML = "";
      contentTab.innerHTML += `<p class="para">${selectedTab.sectionData}</p>`;
      break;

    case "Section 3":
      sectionSpan.forEach((span) => (span.style.color = "black"));
      sectionSpan[id - 1].style.color = "rgb(255, 111, 0)";
      contentTab.innerHTML = "";
      contentTab.innerHTML += `<p class="para">${selectedTab.sectionData}</p>`;
      break;

    default:
      break;
  }
}
