// // Получаем данные от пользователя
// var tariff = parseFloat(prompt("Введите тариф за кВт/ч:"));
// var consumption = parseFloat(prompt("Введите потребление электроэнергии за месяц, кВт/ч:"));

// // Рассчитываем стоимость электричества за месяц и за год
// var monthlyCost = tariff * consumption;
// var yearlyCost = monthlyCost * 12;

// // Выводим результат пользователю
// alert("Стоимость электричества за месяц: " + monthlyCost.toFixed(2) + " грн.");
// alert("Стоимость электричества за год: " + yearlyCost.toFixed(2) + " грн.");

// const credentials = {
// 	login: 'admin',
// 	password: 'qwerty',
// };

// const form = document.getElementById('login-form');
// const resultDiv = document.getElementById('result');

// form.addEventListener('submit', function (event) {
// 	event.preventDefault(); // запретить отправку формы и обновление страницы

// 	// получить значения логина и пароля
// 	const login = document.getElementById('login').value;
// 	const password = document.getElementById('password').value;

// 	// проверьте правильность логина и пароля
// 	if (login === credentials.login && password === credentials.password) {
// 		resultDiv.style.color = 'green';
// 		resultDiv.textContent = `Welcome, ${login}!`;
// 	} else {
// 		resultDiv.style.color = 'red';
// 		resultDiv.textContent = 'Incorrect login or password.';
// 	}
// });
