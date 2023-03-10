
// let a = 410;
// let b = 12;
// let c = a*1.68; //средння цена оплаты за электричество
// let d = a * b; //приблизительное потребление кВТч в год
// let fin = d / 365; //приблизительное потребление кВтч в день


const credentials = {
	login: 'admin',
	password: 'qwerty',
};

const form = document.getElementById('login-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (event) {
	event.preventDefault(); // запретить отправку формы и обновление страницы

	// получить значения логина и пароля
	const login = document.getElementById('login').value;
	const password = document.getElementById('password').value;

	// проверьте правильность логина и пароля
	if (login === credentials.login && password === credentials.password) {
		resultDiv.style.color = 'green';
		resultDiv.textContent = `Welcome, ${login}!`;
	} else {
		resultDiv.style.color = 'red';
		resultDiv.textContent = 'Incorrect login or password.';
	}
});
