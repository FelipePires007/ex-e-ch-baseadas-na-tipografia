const fontSelect = document.getElementById("fontSelect");
const inputField = document.getElementById("inputField");

fontSelect.addEventListener("change", () => {
    const selectedFont = fontSelect.value;
    inputField.style.fontFamily = selectedFont;
});