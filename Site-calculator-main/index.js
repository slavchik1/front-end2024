const display = document.getElementById('display')

function appendToDisplay(value) {
    // Знаходимо елемент з ID "display" та додаємо до його значення (value) нове значення (value).
    display.value += value
  }

function clearDisplay() {
  display.value = ""
}
    
  
  
  // Функція для обчислення виразу, введеного у полі виводу.

function equationTransformation (string) {
  return string.replace('.', ',')
}

function calculate() {
    const expression = display.value;
  
    try {
      const result = eval(equationTransformation(display.value));
      display.value = result;
    } catch (error) {
      display.value = 'Помилка';
    }
  }



