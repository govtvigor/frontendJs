const arr = [12, 10, 13, 20, 56, 93, 82, 19, 11, 33];
let sumArray = 0;

let min = arr[0];
let max = arr[0];
let string = "";


function findMinForLoop(arr) {
    
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  

  function findMaxWhileLoop(arr) {
   
    let max = arr[0];
    let i = 1;
    while (i < arr.length) {
      if (arr[i] > max) {
        max = arr[i];
      }
      i++;
    }
    return max;
  }
  
  
for ( i = 0; i < arr.length; i++) {

    if (typeof arr[i] === "number") {
    sumArray += arr[i];
    }
    else continue;
}


console.log(min);
console.log(max);
console.log(sumArray);

for (i = 1; i <= 5; i++) {
    for ( j = 0; j < i; j++) {
        string += "#";
    }
    string += "\n";
}
console.log(string);

function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }

const user = {
    name: 'John',
    age: 30,    
    sayHello: function() {
      console.log(`Привіт, я ${this.name}, мені ${this.age} років.`);
    }
    
  };
  

  const calculator = {
    num1: null,
    num2: null,
    ask: function() {
      this.num1 = parseFloat(prompt('Введіть перше число:', ''));
      this.num2 = parseFloat(prompt('Введіть друге число:', ''));
    },
    sum: function() {
      if (this.num1 === null || this.num2 === null) {
        console.log('Потрібно ввести числа спочатку!');
        return;
      }
      console.log(`Сума двох чисел: ${this.num1 + this.num2}`);
    },
    mul: function() {
      if (this.num1 === null || this.num2 === null) {
        console.log('Потрібно ввести числа спочатку!');
        return;
      }
      console.log(`Добуток двох чисел: ${this.num1 * this.num2}`);
    }
  };
  


  function Accumulator(value) {
    this.value = value;
    
    this.increment = function() {
      this.value++;
    };
    
    this.decrement = function() {
      this.value--;
    };
  }


  function CancelableAccumulator(startingValue) {
    Accumulator.call(this, startingValue);
    this.originalValue = startingValue;
    
    this.clear = function() {
      this.value = this.originalValue;
    };
  }
  CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
  CancelableAccumulator.prototype.constructor = CancelableAccumulator;
  

  let min1 = findMinForLoop(arr);
  let max1 = findMaxWhileLoop(arr);

  window.onload = function() {
    const num1 = getValidNumber('Enter first number: ');
    const num2 = getValidNumber('Enter second number: ');
    add(num1, num2);
    subtract(num1, num2);
    multiply(num1, num2);
    divide(num1, num2);
    displayResultArray(min1, max1);
  }
  
  function getValidNumber(promptText) {
    let num = NaN;
    while (isNaN(num)) {
      num = Number(prompt(promptText));
    }
    return num;
  }
  
  function add(num1, num2) {
    const result = num1 + num2;
    displayResult(result, 'add');
  }
  
  function multiply(num1, num2) {
    const result = num1 * num2;
    displayResult(result, 'multiply');
  }
  
  function divide(num1, num2) {
    if (num2 === 0) {
      displayError('Cannot divide by zero!', 'divide');
    } else {
      const result = num1 / num2;
      displayResult(result, 'divide');
    }
  }
  
  function subtract(num1, num2) {
    const result = num1 - num2;
    displayResult(result, 'subtract');
  }
  
  function displayResult(result, divId) {
    const resultDiv = document.getElementById(divId);
    if (resultDiv) {
      resultDiv.innerText = result;
  
      if (result < 0) {
        resultDiv.style.color = 'red';
      } else {
        resultDiv.style.color = 'green';
      }
    } else {
      console.error(`Element with ID ${divId} not found`);
    }
  }
  
  function displayError(errorMsg, divId) {
    const errorDiv = document.getElementById(divId);
    if (errorDiv) {
      errorDiv.innerText = errorMsg;
      errorDiv.style.color = 'red';
    } else {
      console.error(`Element with ID ${divId} not found`);
    }
  }
  
  function displayResultArray(min, max) {
    const resultDiv = document.getElementById('minMax');
    const gradient = (max - min) / 255;
    const minColor = 255 - Math.round((min / gradient));
    const maxColor = 255 - Math.round((max / gradient));
    resultDiv.innerHTML = `Minimum: <span style="color: rgb(${minColor},${minColor},${minColor})">${min}</span><br>
                           Maximum: <span style="color: rgb(${maxColor},${maxColor},${maxColor})">${max}</span>`;
  }
  
  
  