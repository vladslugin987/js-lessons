// 2
var money = +prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD: ", "");
// 3
var appData = {
    money: "",
    timeData: time,
    expenses: {
        firstQ: secondQ
    },
    optionalExpenses: "",
    income: [],
    savings: false
};
// 4
var firstQ = +prompt("Введите обязательную статью расходов в этом месяце", "");
var secondQ = +prompt("Во сколько обойдется?", "");
// 5
alert( (money-secondQ)/30 );

// Вопросы к заданию:

// Сколько типов данных существует в JS?
// Ответ: 3

//Как вывести информацию в консоль?
//Ответ: console.log();

//Какая функция операторов || и &&?
//Ответ: || - "Или", && - "И"
