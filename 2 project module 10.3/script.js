//Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».
//Опишите три случая: когда х = числу, строке или логическому типу.В других случаях выводите сообщение: «Тип x не определён».
const x = 1
result;

switch (typeof(x) !== 'symbol' && (isFinite(x) || typeof(x) === 'string') && typeof(x)) {
    case 'number':
        result = 'x-число'
        break;
    case 'string':
        result = 'x-строка'
        break;
    case 'booleean':
        result = 'x-логическое'
        break;
    default:
        result = 'тип x не определён'
}

console.log(result)