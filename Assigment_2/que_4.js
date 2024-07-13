const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumOfProductsOfDigits() {
    rl.question('Enter the first number: ', (input1) => {
        rl.question('Enter the second number: ', (input2) => {
            const n1 = parseInt(input1);
            const n2 = parseInt(input2);

            if (isNaN(n1) || isNaN(n2)) {
                console.log('Invalid input. Please enter valid numbers.');
                rl.close();
                return;
            }

            let sum = 0;
            let num1 = n1;
            let num2 = n2;

            while (num1 > 0 || num2 > 0) {
                const digit1 = num1 % 10;
                const digit2 = num2 % 10;
                sum += digit1 * digit2;
                num1 = Math.floor(num1 / 10);
                num2 = Math.floor(num2 / 10);
            }

            console.log(`Sum of products of corresponding digits of ${n1} and ${n2}: ${sum}`);
            rl.close();
        });
    });
}

sumOfProductsOfDigits();