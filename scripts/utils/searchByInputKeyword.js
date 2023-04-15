//function to changes the display of the list when input in the list tag button
export function searchByInputKeyword() {
    const ingredient = {
        input: document.getElementById("inputIngredient"),
        object: document.querySelectorAll(".listRecipe.ingredients"),
    };
    const appliance = {
        input: document.getElementById("inputAppliance"),
        object: document.querySelectorAll(".listRecipe.appliances"),
    };
    const ustensile = {
        input: document.getElementById("inputUstensile"),
        object: document.querySelectorAll(".listRecipe.ustensiles"),
    };

    function findInput(e, lists) {
        const searchInput = e.target.value;
        lists.object.forEach((list) => {
            if (
                list.textContent
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
            ) {
                list.classList.remove("hidden");
            } else {
                list.classList.add("hidden");
            }
        });
    }
    ingredient.input.addEventListener("keyup", function (e) {
        findInput(e, ingredient);
    });
    appliance.input.addEventListener("keyup", function (e) {
        findInput(e, appliance);
    });
    ustensile.input.addEventListener("keyup", function (e) {
        findInput(e, ustensile);
    });
}
