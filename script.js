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

