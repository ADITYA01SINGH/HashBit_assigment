function createDiv(width, height, text) {
    const newDiv = document.createElement('div');
    
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    
    newDiv.textContent = text;
    
    const container = document.getElementById('container');
    container.appendChild(newDiv);
}

function createDivFromInput() {
    const width = document.getElementById('widthInput').value;
    const height = document.getElementById('heightInput').value;
    const text = document.getElementById('textInput').value;
    
    createDiv(width, height, text);
}