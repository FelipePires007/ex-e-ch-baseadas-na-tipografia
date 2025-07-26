const fontSelect = document.getElementById('fontSelect');
const lineHeightInput = document.getElementById('lineHeight');
const inputWidthInput = document.getElementById('inputWidth');
const testInput = document.getElementById('testInput');
const lhValueLabel = document.getElementById('lhValue');
const chValueLabel = document.getElementById('chValue');

function updateStyles() {
    const font = fontSelect.value;
    const lineHeight = lineHeightInput.value;
    const inputWidth = inputWidthInput.value;

    testInput.style.fontFamily = font;
    testInput.style.lineHeight = lineHeight + 'ex';
    testInput.style.width = inputWidth + 'ch';

    lhValueLabel.textContent = lineHeight;
    chValueLabel.textContent = inputWidth;
}

fontSelect.addEventListener('change', updateStyles);
lineHeightInput.addEventListener('input', updateStyles);
inputWidthInput.addEventListener('input', updateStyles);

updateStyles(); // aplica valores iniciais

