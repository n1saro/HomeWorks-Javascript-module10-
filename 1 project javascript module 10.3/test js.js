const result = prompt('Введите число' , '')

if (typeof + result !== 'number') {
    alert('Упс, кажется, вы ошиблись')
} else if (isNaN(result % 2)) {
    alert('Вы ввели не число')
} else if (result % 2 === 0) {
    alert('Число чётное')
} else if (result % 2 !== 0) {
    alert('Число не чётное')
}