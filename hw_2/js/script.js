// var a = 5;
// var b, c;

// b = (a * 5); //присваивание значения выражения a * 5 переменной b.
// b = (c = b / 2); //присваивание значения выражения b / 2 переменной c, а затем присваивание этого же значения переменной b.
// //изначальное выражение
// b = (a * 5); //вычисление произведения 5 и значения переменной a. И присвоение переменной b
// c = (b / 2); //вычисление частного значения переменной b и числа 2. И присвоение переменной c

//возраст

// const age = prompt("Введите свой возраст:");
// const currentYear = new Date().getFullYear(); //метод getFullYear() используеться для получения текущего года
// const birthYear = currentYear - age; // вычитаем возраст из текущего года

// alert(`Ваш год рождения: ${birthYear}`); //вывод данных

//температура

// const celsius = prompt("Введите температуру в градусах Цельсия:"); // запрашиваем данные
// const fahrenheit = (celsius * 1.8) + 32; // формула для перевода цельсий в фаренгейт

// alert(`Температура в градусах Фаренгейта: ${fahrenheit}`); // вывод результата

// const fahrenheit = prompt("Введите температуру в градусах Фаренгейта:"); // обратный запрос
// const celsius = (fahrenheit - 32) / 1.8;

// alert(`Температура в градусах Цельсия: ${celsius}`);

//

// const num1 = prompt("Введите делимое:");
// const num2 = prompt("Введите делитель:");

// const quotient = Math.floor(num1 / num2);

// alert(`Результат: ${quotient}`);

//Number: currency

// const rate = 39.10; // курс валюты
// const amount = prompt("Введите сумму в евро:");
// const convertedAmount = (amount * rate).toFixed(2); //умножение суммы на курс и ограничение до 2 знаков после запятой

// alert(`${amount} евро = ${convertedAmount} гривен`);

//Number: RGB

// const red = parseInt(prompt("Введите значение красного цвета (от 0 до 255):"));
// const green = parseInt(prompt("Введите значение зеленого цвета (от 0 до 255):"));
// const blue = parseInt(prompt("Введите значение синего цвета (от 0 до 255):")); // запрос значений

// const hexColor = "#" + convertToHex(red) + convertToHex(green) + convertToHex(blue); // преобразуем в 16-ричную систему
// alert(`Цвет в формате CSS: ${hexColor}`);

// function convertToHex(decimalValue) {
// 	const hexValue = decimalValue.toString(16);
// 	return hexValue.length == 1 ? "0" + hexValue : hexValue;
// }

//Number: flats

// const floors = parseInt(prompt('Введите количество этажей:'));
// const flatsPerFloor = parseInt(prompt('Введите количество квартир на этаже:'));
// const flatNumber = parseInt(prompt('Введите номер квартиры:'));

// const flatsPerEntrance = flatsPerFloor * floors / 4;
// const entranceNumber = Math.ceil(flatNumber / flatsPerEntrance);
// const floorNumber = Math.ceil((flatNumber % flatsPerEntrance) / flatsPerFloor);

// alert(`Подъезд: ${entranceNumber}, этаж: ${floorNumber}`);
