const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findTax() {
    rl.question('Enter your salary: ', (input) => {
        const salary = parseFloat(input);

        if (isNaN(salary) || salary <= 0) {
            console.log('Invalid salary');
            rl.close();
            return;
        }

        let taxAmount;

        switch (true) {
            case (salary > 1500000):
                taxAmount = salary * 0.30;
                break;
            case (salary > 1000000):
                taxAmount = salary * 0.20;
                break;
            case (salary > 500000):
                taxAmount = salary * 0.10;
                break;
            case (salary > 0):
                taxAmount = 0;
                break;
            default:
                taxAmount = 'Invalid salary';
        }

        const totalAmount = salary - taxAmount;

        console.log(`Tax amount: ${taxAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })} INR`);
        console.log(`Total amount after tax: ${totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })} INR`);
        rl.close();
    });
}

findTax();