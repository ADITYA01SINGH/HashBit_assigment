const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function repeatedDigitSum(num) {
    function sumDigits(n) {
        return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    }

    let results = [];
    while (num >= 10) {
        num = sumDigits(num);
        results.push(num);
    }

    return results;
}

function calculateSum() {
    rl.question("Enter a number: ", (input) => {
        let num = parseInt(input);

        if (isNaN(num)) {
            console.log("Please enter a valid number.");
        } else {
            let results = repeatedDigitSum(num);
            console.log("Intermediate sums: " + results.join(' -> '));
            console.log("Final result: " + (results.length > 0 ? results[results.length - 1] : num));
        }

        rl.close();
    });
}

calculateSum();