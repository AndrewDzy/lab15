let month = prompt("Введіть число від 1 до 12");
let season = "";
if (month === 1 ||  month === 2 ||  month === 3) {
  season = "Зима";
} else if (month === 4 ||  month === 5 ||  month === 6) {
  season = "Весна";
} else if (month === 7 ||  month === 8 ||  month === 9) {
  season = "Літо";
} else if (month === 10 ||  month === 11 ||  month === 12) {
  season = "Осінь";
}
let name = "";
switch (month) {
  case 1:
    name = "Січень";
    break;
  case 2:
    name = "Лютий";
    break;
  case 3:
    name = "Березень";
    break;
  case 4:
    name = "Квітень";
    break;
  case 5:
    name = "Травень";
    break;
  case 6:
    name = "Червень";
    break;
  case 7:
    name = "Липень";
    break;
  case 8:
    name = "Серпень";
    break;
  case 9:
    name = "Вересень";
    break;
  case 10:
    name = "Жовтень";
    break;
  case 11:
    name = "Листопад";
    break;
  case 12:
    name = "Грудень";
    break;
}

alert("Місяць- " + name + " Пора року- " + season);