function resetText() {
    const originalText = 'This is some example text';
    document.getElementById('text-container').textContent = originalText;
}

// Event listener for Get CSS button
document.getElementById('getstyle').addEventListener('click', function() {
    // Reset text content to original
    resetText();
});

// Other event listeners (change color, font size, style buttons, font family dropdown) remain the same as before
document.getElementById('colorchange').addEventListener('click', function() {
    const colorValue = document.getElementById('colorbox').value;
    const textContainer = document.getElementById('text-container');
    textContainer.style.color = colorValue;
});

document.getElementById('fontsize').addEventListener('input', function() {
    const fontSize = document.getElementById('fontsize').value;
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontSize = fontSize + 'px';
});

document.getElementById('italic').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

document.getElementById('underline').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
});

document.getElementById('bold').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

document.getElementById('list').addEventListener('change', function() {
    const fontFamily = document.getElementById('list').value;
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontFamily = fontFamily;
});