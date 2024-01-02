document.addEventListener("DOMContentLoaded", function () {
    const colorPaletteCanvas = document.getElementById("colorPaletteCanvas");
    const colorPaletteCtx = colorPaletteCanvas.getContext("2d");
    const selectedColorDiv = document.getElementById("selectedColor");
    const newCanvasButton = document.getElementById("newCanvasButton");
    const showGridCheckbox = document.getElementById('showGrid');

    const pixelCanvas = document.getElementById("pixelCanvas");
    const pixelCtx = pixelCanvas.getContext("2d");

    const previewCanvas = document.getElementById("previewCanvas");
    const previewCtx = previewCanvas.getContext("2d");


    function generateColorPalette(colorsColumns, blockSize) {
        colorPaletteCanvas.width = colorsColumns * blockSize;
        colorPaletteCanvas.height = 2 * 2 * blockSize; // Dwa rzędy (dla S=100% i S=50%)

        const blockWidth = colorPaletteCanvas.width / colorsColumns;
        const blockHeight = colorPaletteCanvas.height / 4;

        for (let row = 0; row <= 2; row++) {
            const startY = row * blockHeight;
            const hueStep = 360 / colorsColumns;
            for (let hueIndex = 0; hueIndex < colorsColumns; hueIndex++) {
                const hue = hueIndex * hueStep;
                const x = hueIndex * blockWidth;
                colorPaletteCtx.fillStyle = `hsl(${hue}, 100%, ${30 + row * 20}%)`;
                colorPaletteCtx.fillRect(x, startY, blockWidth, blockHeight);
            }
        }
        let row = 3;
        const startYGray = row * blockHeight;

        for (let grayIndex = 0; grayIndex < colorsColumns; grayIndex++) {
            const grayValue = (grayIndex / (colorsColumns - 1)) * 255;
            const x = grayIndex * blockWidth;
            colorPaletteCtx.fillStyle = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
            colorPaletteCtx.fillRect(x, startYGray, blockWidth, blockHeight);
        }
    }

    function getColorAtPosition(event) {
        const rect = colorPaletteCanvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const imageData = colorPaletteCtx.getImageData(x, y, 1, 1);
        const pixel = imageData.data;

        return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
    }

    colorPaletteCanvas.addEventListener("click", function (event) {
        const selectedColor = getColorAtPosition(event);
        selectedColorDiv.style.backgroundColor = selectedColor;
    });

    function drawGrid() {
        blockSize = getPixelSize();
        cols = pixelCanvas.width;
        rows = pixelCanvas.height;
        pixelCtx.fillStyle = 'rgb(0, 0, 0)';
        for (let col = 1; col < cols; col++) {
            const x = col * blockSize;
            for (let row = 1; row < rows; row++) {
                const y = row * blockSize;
                pixelCtx.fillRect(x, y, 1, 1);
            }
        }
    }


    function drawPixel(x, y, color) {
        previewCtx.fillStyle = color;
        previewCtx.fillRect(x, y, 1, 1);

        pixelCtx.imageSmoothingEnabled = false;
        pixelCtx.drawImage(previewCanvas,
            0, 0, previewCanvas.width, previewCanvas.height,
            0, 0, pixelCanvas.width, pixelCanvas.height);
        if (showGridCheckbox.checked) drawGrid();
    }

    function handleClickOnPixelCanvas(event) {
        const color = selectedColorDiv.style.backgroundColor;
        blockSize = getPixelSize();
        drawPixel(Math.floor(event.offsetX / blockSize), Math.floor(event.offsetY / blockSize), color);
    }

    function getPixelSize() {
        const pixelSizeInput = document.getElementById('pixelSize');
        return parseInt(pixelSizeInput.value);
    }

    function newGame() {
        // Pobierz wartości z formularza
        const canvasWidthInput = document.getElementById('canvasWidth');
        const canvasHeightInput = document.getElementById('canvasHeight');

        const canvasWidth = parseInt(canvasWidthInput.value);
        const canvasHeight = parseInt(canvasHeightInput.value);
        const pixelSize = getPixelSize()

        pixelCanvas.width = canvasWidth * pixelSize;
        pixelCanvas.height = canvasHeight * pixelSize;

        previewCanvas.width = canvasWidth;
        previewCanvas.height = canvasHeight;

        const pixelCtx = pixelCanvas.getContext('2d');
        const previewCtx = previewCanvas.getContext('2d');

        pixelCtx.fillStyle = 'white';
        pixelCtx.fillRect(0, 0, pixelCanvas.width, pixelCanvas.height);

        previewCtx.fillStyle = 'white';
        previewCtx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);

        if (showGridCheckbox.checked) drawGrid();
    }

    pixelCanvas.addEventListener("click", handleClickOnPixelCanvas);
    newCanvasButton.addEventListener("click", newGame);
    generateColorPalette(12, 32);
    newGame();
});
