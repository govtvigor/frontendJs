let firstNumber,secondNumber, sum, division, multiply, negation;


firstNumber = prompt("Enter the first number: ");
secondNumber = prompt("Enter the second number: ");
sum = Number(firstNumber) + Number(secondNumber);
division = Number(firstNumber) / Number(secondNumber);
negation = Number(firstNumber) - Number(secondNumber);
multiply = Number(firstNumber) * Number(secondNumber);
alert(sum + ' ' + negation + ' ' + multiply + ' ' + division);