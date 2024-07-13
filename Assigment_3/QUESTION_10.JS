const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString(str) {
    return str.split('').reverse().join('');
}

function getInputAndReverse() {
    rl.question("Enter a string: ", (input) => {
        let output = reverseString(input);
        console.log("Reversed string:", output);
        rl.close();
    });
}

getInputAndReverse();