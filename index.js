// Задание 2
// Напиши скрипт проверки количества товаров на складе.
// Есть переменные total (количество товаров на складе)
// и ordered (единиц товара в заказе). Сравни эти значения
// и по результатам выведи: Если в заказе указано число,
// превышающее количество товаров на складе, то выведи сообщение
// "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered,
// например 20, 80 и 130.
// const total = 100; const ordered = 50;

// const total = 100
// const ordered = 50
// let message = ''
// if (ordered > total) {
//   message = 'На складе недостаточно твоаров!'
// } else {
//   message = 'Заказ оформлен, с вами свяжется менеджер'
// }

// console.log(message)

// let total = 100
// let ordered = 50

// let message =
//   total > ordered
//     ? 'На складе недостаточно твоаров!'
//     : 'Заказ оформлен, с вами свяжется менеджер'
// console.log(message)

// amount

//

// code Natali

// let balance = 5000;

// let money = 0;
// let message = '';
// const userName = 'Natali';
// let pinCode = 1111;
// if (userName === 'Natali' && pinCode === 1111) {
//     // console.log('test');

//     if (0 === money) {
//         message = `Введіть суму більше 0`;
//     } else if (money > balance) {
//         message = `Error. Недостатньо коштів на рахунку`;
//     } else if (money <= balance) {
//         message = `Успех. На рахунку залишилось ${balance - money}`;
//     }
// } else {
//     message = `Невірний пінкод`;
// }

// console.log(message);

// Задание 3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую будет записано сообщение о результате.
// При загрузке страницы у посетителя запрашивается пароль через prompt:
// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD,
//  записать в message строку 'Добро пожаловать!' В противном случае, то есть если ни одно из предыдущих
//  условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
//  После всех проверок вывести в alert значение переменной message. const ADMIN_PASSWORD = 'adminpass';
//   let message;

// let input = prompt('enter password');
// let message = '';
// const ADMIN_PASSWORD = 'adminpass';

// if (input === null) {
//     message = 'Отменено пользователем';
// } else if (input === '') {
//     message = '';
// } else if (input === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
// }

// console.log(message);

// по-нормальному))))

// let input = prompt('enter password');
// let message = '';
// const ADMIN_PASSWORD = 'adminpass';

// if (!input) {
//     message = 'Отменено пользователем';
// } else if (input.length === 0) {
//     message = 'Пароль не должен быть пустой';
// } else if (input === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
// }

// console.log(message);

// Задание 4
// На счету пользователя есть 35500 кредитов, значение хранится в переменной credits (создай и присвой).
// Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.
// Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).
// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить
// и сохранить в переменную.
// Напиши скрипт который: Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
//  В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
//  Проверяет сможет ли пользователь оплатить заказ: если сумма к оплате превышает количество кредитов на
//  счету, выводи в консоль сообщение 'Недостаточно средств на счету!'. в противном случае необходимо посчитать
//  остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// const credits = 40000;
// const pricePerDroid = 3000;

// let input = Number(prompt('введите количество дроидов, которые хотите купить'));
// let message = '';
// const totalPrice = input * pricePerDroid;
// const result = isNaN(input);
// // console.log(result);

// if (result) {
//     message = 'введите число';
// } else if (!input) {
//     message = 'Отменено пользователем';
// } else if (totalPrice <= credits) {
//     message = `Вы купили ${input} дроидов, на счету осталось ${
//         credits - totalPrice
//     } кредитов.`;
// } else {
//     message = 'Недостаточно средств на счету!';
// }

// console.log(message);

// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
//  Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
//  Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.
//  Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение
//  'В вашей стране доставка не доступна'.
// Ниже приведен список стран и стоимость доставки.
// Китай - 150 кредитов Чили - 250 кредитов Австралия - 165 кредитов Индия - 90 кредитов Ямайка - 130 кредитов

// let country = prompt('укажите страну доставки');
// const userName = 'goVA';

// let userToUpper =
//     userName[0].toUpperCase() + userName.substring(1).toLowerCase();

// let countryToUpper =
//     country[0].toUpperCase() + country.substring(1).toLowerCase();

// let price = 0;

// switch (countryToUpper) {
//     case 'Китай':
//         price = 150;
//         console.log(`Доставка в ${countryToUpper} стоит ${price}`);
//         break;

//     default:
//         console.log('Sorry, there is no delivery to your country');
// }

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(fruits[3]);

// function getExtremeElements(array = [1, 2, 3, 4, 5]) {
//     let newArr = [];
//     newArr.push(array[0]);
//     newArr.push(array[array.length - 1]);
//     return newArr;
// }

// const friends = [1];
// console.log(friends);
// ____________________________________________________
// let a = 10;
// let b = a;
// console.log(a === b);

// let a = 10 + 5;

// console.log(a === b);
// ____________________________________________________

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) {
    const fruit = fruits[i];
    console.log(fruit);
}

// ____________________________________________________
// ____________________________________________________
// ____________________________________________________
// ____________________________________________________
// ____________________________________________________
