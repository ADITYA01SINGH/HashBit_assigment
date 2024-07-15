function toggleVisibility() {
    // Get the paragraph element by its ID
    const paragraph = document.getElementById('useless-paragraph');
    
    // Check the current display style and toggle it
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block'; // Show the paragraph
    } else {
        paragraph.style.display = 'none'; // Hide the paragraph
    }
}