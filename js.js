let firstNumber,secondNumber, sum, division, multiply, negation, question;


function addNumbers(num1, num2) {
    if (typeof num1 === '' || typeof num2 === '') {
      return 'Error: Both parameters must be numbers';
    }
    return Number(num1) + Number(num2);
  }
  
  
  function subtractNumbers(num1, num2) {
    if (typeof num1 === '' || typeof num2 === '') {
      return 'Error: Both parameters must be numbers';
    }
    return num1 - num2;
  }
  
  
  function divideNumbers(num1, num2) {
    if (typeof num1 === '' || typeof num2 === '') {
      return 'Error: Both parameters must be numbers';
    }
    if (num2 === 0) {
      return 'Error: Cannot divide by zero';
    }
    return num1 / num2;
  }
  
 
  function multiplyNumbers(num1, num2) {
    if (typeof num1 === '' || typeof num2 === '') {
      return 'Error: Both parameters must be numbers';
    }
    return num1 * num2;
  }

  firstNumber = prompt("Enter the first number: ");
  secondNumber = prompt("Enter the second number: ");

// if (firstNumber === '' || secondNumber === '') {
//     alert("Error, you didnt write a number!");
// }

// else if (secondNumber == 0) {
//     alert("Error, you cannot divide on zero!");
// }


  if (Number(firstNumber) < Number(secondNumber)) {
    question = confirm("Do u want to continue?");

    if (!question) {
        alert("You canceled.");
       
    }
    else {
        alert(subtractNumbers(firstNumber, secondNumber));
    }
    
    
}
else {
    alert(addNumbers(firstNumber, secondNumber) + ' ' + subtractNumbers(firstNumber, secondNumber) + ' ' + multiplyNumbers(firstNumber, secondNumber) + ' ' + divideNumbers(firstNumber, secondNumber));
}




