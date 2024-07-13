const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countWords(paragraph) {
    let words = paragraph.trim().split(/\s+/);
    return words.length;
}

function getInputAndCountWords() {
    rl.question("Enter a paragraph: ", (input) => {
        let wordCount = countWords(input);
        console.log("Number of words:", wordCount);
        rl.close();
    });
}

getInputAndCountWords();