function appendToInput(value) {
  document.getElementById('input').value += value;
}

function clearInput() {
  document.getElementById('input').value = '';
}

function calculate() {
    const input = document.getElementById('input').value;
    const result = evaluateExpression(input);
  
    if (result !== null) {
      document.getElementById('input').value = result;
    } else {
      document.getElementById('input').value = 'Error';
    }
  }
  
  function evaluateExpression(input) {
    try {
      const operators = ['+', '-', '*', '/'];
      let currentNumber = '';
      let currentOperator = '+';
      let result = 0;
  
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
  
        if (operators.includes(char)) {
          result = performOperation(result, currentNumber, currentOperator);
          currentNumber = '';
          currentOperator = char;
        } else {
          currentNumber += char;
        }
      }
  
      result = performOperation(result, currentNumber, currentOperator);
  
      return result;
    } catch (error) {
      return null;
    }
  }
  
  function performOperation(result, number, operator) {
    switch (operator) {
      case '+':
        return result + parseFloat(number);
      case '-':
        return result - parseFloat(number);
      case '*':
        return result * parseFloat(number);
      case '/':
        return result / parseFloat(number);
      default:
        return result;
    }
  }