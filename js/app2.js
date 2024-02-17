/*
В якості ДЗ, необхідно вирішити дві наступні задачі:

Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
*/

let inputNumber;

while (inputNumber = prompt('Enter a five-digit number:', '')) {
    if (inputNumber === '' || isNaN(inputNumber) || inputNumber.length !== 5) {
        alert(`You enter wrong data. Please, enter five-digit number`);
        continue;
    }

    let firstNumber = parseInt((inputNumber / 10000) % 10);
    let secondNumber = parseInt((inputNumber / 1000) % 10);
    let thirdNumber = parseInt((inputNumber / 100) % 10);
    let fourthNumber = parseInt((inputNumber / 10) % 10);
    let fifthNumber = parseInt(inputNumber % 10);


    let result = `${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber} ${fifthNumber}`;
    alert(`You entered: ${result}`);
}