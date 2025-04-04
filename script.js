// #1 Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.
console.log("!!!1 Завдання!!!");

function logItems(array) {
    let result = [];

    for (let i = 0; i < array.length; i += 1) {
        result.push(i + 1 + "-" + array[i]);
    }

    return result
}
console.log(logItems(['Mango', 'Poly', 'Ajax']));

//#2 Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
console.log("!!!2 Завдання!!!");

function calculateEngravingPrice(message, pricePerWord) { 
    const abc = message.split(" "); 
    // console.log(message);
    // console.log(pricePerWord);
    // console.log(abc.length);
    
    return abc.length * pricePerWord
}
console.log(calculateEngravingPrice("Lorem ipsum dolor sit amet consectetur adipisicing elit ", 200)); 
