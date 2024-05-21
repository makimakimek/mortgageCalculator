function mortgageCalculation() {
    const principalLoanAmount = document.querySelector('#PLA');
    const interestRate = document.querySelector('#IR');
    const lengthOfLoan = document.querySelector('#LOL');
    const calculateButton = document.querySelector('#calculateButton');

    calculateButton.addEventListener("click", (event) => {
        let PLA = principalLoanAmount.value;
        let IR = interestRate.value / (12 * 100);
        let LOL = lengthOfLoan.value * 12;

        let mortgage = PLA * ((IR * Math.pow(1 + IR, LOL)) / ((Math.pow(1 + IR, LOL) - 1)));
    
        const output = document.querySelector('#output');

        output.textContent = "Your monthly mortgage payment will be $" + Math.floor(mortgage);
    });
}

mortgageCalculation();