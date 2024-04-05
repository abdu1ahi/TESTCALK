function appendToInput(value) {
  document.getElementById('input').value += value;
}

function clearInput() {
  document.getElementById('input').value = '';
}

function calculate() {
  const input = document.getElementById('input').value;

  try {
    const result = eval(input);
    document.getElementById('input').value = result;
  } catch (error) {
    document.getElementById('input').value = 'Error';
  }
}