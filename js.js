let firstNumber,secondNumber, sum, division, multiply, negation, question;


firstNumber = prompt("Enter the first number: ");
secondNumber = prompt("Enter the second number: ");

function addNumbers(firstNumber, secondNumber) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'Error: Both parameters must be numbers';
    }
    return num1 + num2;
  }
  
  
  function subtractNumbers(firstNumber, secondNumber) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'Error: Both parameters must be numbers';
    }
    return num1 - num2;
  }
  
  
  function divideNumbers(firstNumber, secondNumber) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'Error: Both parameters must be numbers';
    }
    if (num2 === 0) {
      return 'Error: Cannot divide by zero';
    }
    return num1 / num2;
  }
  
 
  function multiplyNumbers(firstNumber, secondNumber) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'Error: Both parameters must be numbers';
    }
    return num1 * num2;
  }



if (firstNumber === '' || secondNumber === '') {
    alert("Error, you didnt write a number!");
}

else if (secondNumber == 0) {
    alert("Error, you cannot divide on zero!");
}


 else if (Number(firstNumber) < Number(secondNumber)) {
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




