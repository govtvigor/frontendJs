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
  
  