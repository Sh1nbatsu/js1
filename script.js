// Задание 1

// let userName = prompt("Введите ваше имя");

// alert("Здравствуйте, " + userName);

//  Задание 2

// let number = +prompt("Введите желаемое число");

// let power = +prompt("Введите желаемую степень");

// alert(number ** power);

// Задание 3

// let textToFilter = prompt("Введите текст");

// if (textToFilter != "some text") {
//   textToFilter = "some text";
// } else {
//   textToFilter = "another text";
// }

// alert(textToFilter);

// Задание 4 - файлы приложены

// Задание 5

// let randomNum = +prompt("Введите число");

// if (randomNum < 0) {
//   alert("less than zero");
// } else if (randomNum === 0) {
//   alert(1);
// } else alert((randomNum *= 10));

// Задание 6

// let userNumber = +prompt("Введите число");

// let result;

// if (userNumber > 5) {
//   result = 1;
// } else {
//   result = 0;
// }

// console.log(result);

// Задание 7

// let firstNumber = prompt("Введите первое число");

// let secondNumber = prompt("Введите второе число");

// if (firstNumber > secondNumber) {
//   console.log("Большее число -", firstNumber);
// } else if (firstNumber < secondNumber) {
//   console.log("Большее число -", secondNumber);
// } else {
//   console.log("Числа одинаковы");
// }

// Задание 8

// let number1 = prompt("Введите первое число");

// let number2 = prompt("Введите второе число");

// if (number1 % number2 === 0) {
//   console.log("Первое число кратно второму");
// } else {
//   console.log("Первое число не кратно второму");
// }

// Задание 9

// let avgScore = prompt("Введите ваш средний балл");

// if (avgScore <= 4) {
//   console.log("Неудовлетворительно");
// } else if (avgScore <= 8) {
//   console.log("Удовлетворительно");
// } else {
//   console.log("Отлично");
// }

// Задание 10

// let examScore = prompt("Введите балл за экзамен");

// let projectQuantity = prompt("Введите количество выполненных проектов");

// let total;

// if ((projectQuantity >= 10 && examScore >= 90)) {
//   total = 100;
// } else if ((projectQuantity >= 5 && examScore >= 75)) {
//   total = 90;
// } else if ((projectQuantity >= 2 && examScore >= 50)) {
//   total = 75;
// } else {
//   total = 0;
// }

// console.log(total);

// Задание 11

let rentDays = prompt("Количество дней аренды");

let discount;

if (rentDays >= 7) {
  discount = 50;
} else if (rentDays >= 3) {
  discount = 20;
} else {
  discount = 0;
}

console.log("Итоговая стоимость аренды - ", rentDays * 40 - discount);
