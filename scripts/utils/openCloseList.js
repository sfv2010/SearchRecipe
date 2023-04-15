//Open/close list tag button
export function openCloseList() {
    const buttonIngredient = document.querySelector(".buttonIngredient");
    const buttonAppliance = document.querySelector(".buttonAppliance");
    const buttonUstensile = document.querySelector(".buttonUstensile");
    const imgUpIngredient = document.getElementById("imgUpIngredient");
    const imgUpAppliance = document.getElementById("imgUpAppliance");
    const imgUpUstensile = document.getElementById("imgUpUstensile");
    const dropDownIngredient = document.getElementById("dropDownIngredient");
    const dropDownAppliance = document.getElementById("dropDownAppliance");
    const dropDownUstensile = document.getElementById("dropDownUstensile");
    const buttons = [buttonIngredient, buttonAppliance, buttonUstensile];
    const dropDowns = [
        dropDownIngredient,
        dropDownAppliance,
        dropDownUstensile,
    ];
    const imgUps = [imgUpIngredient, imgUpAppliance, imgUpUstensile];

    function openList(e) {
        const eTextContent = e.target.textContent;
        for (let button of buttons) button.style.display = "block";
        for (let dropDown of dropDowns) dropDown.style.display = "none";

        if (eTextContent === "Ingredients") {
            buttonIngredient.style.display = "none";
            dropDownIngredient.style.display = "block";
        } else if (eTextContent === "Appareils") {
            buttonAppliance.style.display = "none";
            dropDownAppliance.style.display = "block";
        } else if (eTextContent === "Ustensiles") {
            buttonUstensile.style.display = "none";
            dropDownUstensile.style.display = "block";
        }
    }
    function closeList() {
        for (let button of buttons) button.style.display = "block";
        for (let dropDown of dropDowns) dropDown.style.display = "none";
    }

    buttons.forEach((button) =>
        button.addEventListener("click", (e) => openList(e))
    );
    imgUps.forEach((imgUp) =>
        imgUp.addEventListener("click", () => closeList())
    );
    imgUps.forEach((imgUp) => {
        imgUp.addEventListener("keydown", (e) => {
            if (e.key === "Escape" || e.key === "Enter") {
                closeList(e);
            }
        });
    });
}
