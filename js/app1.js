/*
В якості ДЗ, необхідно вирішити дві наступні задачі:

Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
*/
let message = "Greetings! Please enter string#";

let firstString = prompt(message + "1");
let secondString = prompt(message + "2");
let thirdString = prompt(message + "3");

let concatenation = firstString + secondString + thirdString;

alert(`You entered: ${concatenation} !`);