
let number = parseInt(prompt("Введіть число від 1 до 7:"));

let daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота','Неділя'];


if (number >= 1 && number <= 7) {
  
  var dayOfWeek = daysOfWeek[number - 1];
  document.write("День неділі, якому відповідає число " + number + ": " + dayOfWeek);
} else {
  
  document.write("Введено некоректне число. Будь ласка, введіть число від 1 до 7.");
}
