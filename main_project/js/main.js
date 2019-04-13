function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

var a = +( randomInteger(1, 10) );
console.log(a);
var b = +prompt("Введите число от 1 до 10: ", "");

if (a == b) {
    alert("Вы выиграли!");
} else {
    alert("Неудача! Попробуйте еще раз.")
}
return false;