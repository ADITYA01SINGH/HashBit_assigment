function correctfn(sentence, wrong, correct) {
    const regex = new RegExp(`\\b${wrong}\\b`, 'gi');

    const correctedSentence = sentence.replace(regex, correct);

    return correctedSentence;
}

// Example usage:
let sentence = "He is definately a good programmer.";
let wrongWord = "definately";
let correctWord = "definitely";

let correctedSentence = correctfn(sentence, wrongWord, correctWord);
console.log("Original sentence:", sentence);
console.log("Corrected sentence:", correctedSentence);