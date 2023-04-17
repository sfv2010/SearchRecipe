import { recipes } from "./data/recipes.js";
import { recipesFactory } from "./factories/recipesFactory.js";
import { searchInMainBar } from "./utils/searchInMainBar.js";
import { openCloseList } from "./utils/openCloseList.js";
import { displayTag } from "./utils/displayTag.js";
import { searchByInputKeyword } from "./utils/searchByInputKeyword.js";

//display recipes cards
export function displayMainData(recipes) {
    const main = document.querySelector("main");
    recipes.forEach((recipe) => {
        const recipeInfo = recipesFactory(recipe);
        const recipeCardDOM = recipeInfo.getRecipeCardDOM();
        main.appendChild(recipeCardDOM);
    });
}
//Function to capitalize first letter
function capitalize(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
}
function createList(name, names, ul) {
    const listRecipe = document.createElement("li");
    listRecipe.classList.add("listRecipe");
    listRecipe.classList.add(names);
    listRecipe.textContent = name;
    listRecipe.tabIndex = "0";
    ul.appendChild(listRecipe);
}

//Loop through the recipes array and create a list for each
//list Ingredient
export function displayIngredientData(recipes) {
    const targetTags = document.querySelectorAll(".tag.target.ingredients");
    const ulIngredient = document.querySelector(".ulIngredient");
    let arrayIngredients = [];
    //When selected in the list
    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredientKey) => {
            //targetTags要素にtag.textContentがingredentKey.ingredientの値を含む要素があるか（材料名と一致するか）を確認し、あればfalse,なければretun〜を返す？　材料名と一致するタグが見つからなければ、arrayIngredients配列に材料名を追加する。
            // 選択した文字が消える。If文がなくなると消えなくなる。
            if (
                !Array.from(targetTags).find((tag) => {
                    return tag.textContent
                        .toLowerCase()
                        .includes(ingredientKey.ingredient.toLowerCase());
                })
            )
                arrayIngredients.push(ingredientKey.ingredient.toLowerCase());
        });
    });
    console.log(arrayIngredients);
    console.log(targetTags);
    capitalize(arrayIngredients);
    let sortIngredients = [...new Set(arrayIngredients)].sort();
    ulIngredient.textContent = "";
    sortIngredients.forEach((ingredient) => {
        createList(ingredient, "ingredients", ulIngredient);
    });
    //createTag
    displayTag(recipes, "ingredients");
}
//list Appliance
export function displayApplianceData(recipes) {
    const targetTags = document.querySelectorAll(".tag.target.appliances");
    const ulAppliance = document.querySelector(".ulAppliance");
    let arrayAppliances = [];
    recipes.forEach((recipe) => {
        if (
            !Array.from(targetTags).find((tag) => {
                return tag.textContent
                    .toLowerCase()
                    .includes(recipe.appliance.toLowerCase());
            })
        )
            arrayAppliances.push(recipe.appliance);
    });
    let sortAppliances = [...new Set(arrayAppliances)].sort();
    ulAppliance.textContent = "";
    sortAppliances.forEach((appliance) => {
        createList(appliance, "appliances", ulAppliance);
    });
    displayTag(recipes, "appliances");
}
export function displayUstensileData(recipes) {
    const targetTags = document.querySelectorAll(".tag.target.ustensiles");
    const ulUstensile = document.querySelector(".ulUstensile");
    let arrayUstensils = [];

    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensil) => {
            if (
                !Array.from(targetTags).find((tag) => {
                    return tag.textContent
                        .toLowerCase()
                        .includes(ustensil.toLowerCase());
                })
            )
                arrayUstensils.push(ustensil.replace(/[(]\d[)]/gi, ""));
        });
    });
    //list Ustensile
    capitalize(arrayUstensils);
    let sortUstensiles = [...new Set(arrayUstensils)].sort();
    ulUstensile.textContent = "";
    sortUstensiles.forEach((ustensile) => {
        createList(ustensile, "ustensiles", ulUstensile);
    });
    displayTag(recipes, "ustensiles");
}

//Function to get and display recipe data
displayMainData(recipes);
displayIngredientData(recipes);
displayApplianceData(recipes);
displayUstensileData(recipes);
searchByInputKeyword();
searchInMainBar(recipes);
openCloseList();
