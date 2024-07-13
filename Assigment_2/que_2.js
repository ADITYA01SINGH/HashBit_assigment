const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate() {
    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
            rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
                const n_1 = parseFloat(num1);
                const n_2 = parseFloat(num2);
                let result;

                switch (operation) {
                    case 'add':
                        result = n_1 + n_2;
                        break;
                    case 'subtract':
                        result = n_1 - n_2;
                        break;
                    case 'multiply':
                        result = n_1 * n_2;
                        break;
                    case 'divide':
                        if (n_2 !== 0) {
                            result = n_1 / n_2;
                        } else {
                            result = 'Error: Division by zero';
                        }
                        break;
                    default:
                        result = 'Error: Invalid operation';
                }

                console.log(`The result is: ${result}`);
                rl.close();
            });
        });
    });
}

calculate();