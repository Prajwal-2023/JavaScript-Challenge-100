// fetch('https://dummyjson.com/recipes')
// .then(res => res.json())
// // .then(data => console.log(data.recipes[0].ingredients))
// .then(data => console.log(data.recipes[0].instructions))

fetchRecipe();
async function fetchRecipe() {
  let data;
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    if (!response.ok) {
      throw new Error("Could not fetch the recipes data");
    }
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  console.log(data);

  const container = document.querySelector(".container");
  let recipeCopy = "";
  data.recipes.forEach((d) => {
    recipeCopy += `<div id="recipe-div" class="recipe-class-elem">
          <div class="image-div">
            <img id="recipe-image" src=${d.image} />
          </div>
          <h2 id="recipe-name">${d.name}</h2>
          <span>
            <p id="recipe-Ingredients">
             ${d.ingredients}
            </p>
            <br><br>
            <button id="view-recipe-button">View Recipe</button>
          </span>
        </div>`;
  });

  container.innerHTML = recipeCopy;
}
