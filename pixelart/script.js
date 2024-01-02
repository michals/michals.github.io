document.addEventListener("DOMContentLoaded", function () {
    const colorPaletteCanvas = document.getElementById("colorPaletteCanvas");
    const colorPaletteCtx = colorPaletteCanvas.getContext("2d");
    const selectedColorDiv = document.getElementById("selectedColor");
    const newCanvasButton = document.getElementById("newCanvasButton");
    const saveButton = document.getElementById('saveButton');
    const showGridCheckbox = document.getElementById('showGrid');
    const canvasWidthInput = document.getElementById('canvasWidth');
    const canvasHeightInput = document.getElementById('canvasHeight');

    const pixelCanvas = document.getElementById("pixelCanvas");
    const pixelCtx = pixelCanvas.getContext("2d");

    const previewCanvas = document.getElementById("previewCanvas");
    const previewCtx = previewCanvas.getContext("2d");

    let isDrawing = false;


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

    function redraw() {
        pixelCtx.imageSmoothingEnabled = false;
        pixelCtx.drawImage(previewCanvas,
            0, 0, previewCanvas.width, previewCanvas.height,
            0, 0, pixelCanvas.width, pixelCanvas.height);
        if (showGridCheckbox.checked) drawGrid();
    }

    function drawPixel(x, y) {
        const selectedColor = document.getElementById("selectedColor").style.backgroundColor;
        previewCtx.fillStyle = selectedColor;
        previewCtx.fillRect(x, y, 1, 1);
        redraw();
    }

    pixelCanvas.addEventListener("mousedown", function (event) {
        isDrawing = true;
        blockSize = getPixelSize();
        drawPixel(Math.floor(event.offsetX / blockSize), Math.floor(event.offsetY / blockSize));
        // drawPixel(event.offsetX, event.offsetY);
    });

    pixelCanvas.addEventListener("mousemove", function (event) {
        if (!isDrawing) return;
        blockSize = getPixelSize();
        drawPixel(Math.floor(event.offsetX / blockSize), Math.floor(event.offsetY / blockSize));
    });

    pixelCanvas.addEventListener("mouseup", function () {
        isDrawing = false;
    });

    function getPixelSize() {
        const pixelSizeInput = document.getElementById('pixelSize');
        return parseInt(pixelSizeInput.value);
    }

    function newGame() {
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

    function handleImageUpload(event) {
        const fileInput = event.target;
        const file = fileInput.files[0];

        if (file && file.type === 'image/png') {
            const reader = new FileReader();
            reader.onload = function (e) {
                const image = new Image();
                image.src = e.target.result;
                image.onload = function () {
                    const imageWidth = Math.min(image.width, 64);
                    const imageHeight = Math.min(image.height, 64);
                    canvasWidthInput.value = imageWidth;
                    canvasHeightInput.value = imageHeight;
                    newGame();
                    previewCanvas.width = imageWidth;
                    previewCanvas.height = imageHeight;
                    previewCtx.drawImage(image, 0, 0, imageWidth, imageHeight);
                    redraw();
                };
            };
            reader.readAsDataURL(file);
        }
    }

    function saveCanvasAsImage() {
        previewCanvas.toBlob(function (blob) {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'canvas_image.png';
            link.click();
        });
    }

    const uploadImageInput = document.getElementById('uploadImage');
    showGridCheckbox.addEventListener('change', redraw);
    uploadImageInput.addEventListener('change', handleImageUpload);
    saveButton.addEventListener('click', saveCanvasAsImage);
    newCanvasButton.addEventListener("click", newGame);
    generateColorPalette(12, 32);
    selectedColorDiv.style.backgroundColor = "black"
    newGame();
});
