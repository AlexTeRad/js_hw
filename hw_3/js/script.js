//String: greeting

// let name = prompt("Как вас зовут?");
// alert(`Привет ${name}!`);

//String: gopni4ek

// let str = prompt('Введите строку: ');
// let newStr = str.split(',').join(' блин,');
// alert(newStr + ' блин.');

//String: capitalize

// let str = "cANBerRa"
// let result = str.charAt(0).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase()
// console.log(result) //Canberra

//String: word count

// let str = "Lorem ipsum dolor sit amet consectetur.";
// let words = str.split(' ');
// let wordcon = words.length;
// console.log(wordcon);

//String: credentials

// let mainname = prompt("Ввидите вашу фамилию");
// let surname = prompt("Ввидите ваше имя");
// let fathername = prompt("Ввидите ваше отчество");

// mainname = mainname.trim();
// surname = surname.trim();
// fathername = fathername.trim();

// mainname = mainname.charAt(0).toLocaleUpperCase() + mainname.slice(1).toLocaleLowerCase();
// surname = surname.charAt(0).toLocaleUpperCase() + surname.slice(1).toLocaleLowerCase();
// fathername = fathername.charAt(0).toLocaleUpperCase() + fathername.slice(1).toLocaleLowerCase();

// fullname = mainname + ' ' + surname + ' ' + fathername;
// console.log(fullname);

// String: beer

// let str = "Було жарко. Василь пив пиво вприкуску з креветками"
// let words = str.split(" ");
// for (let i = 0; i < words.length; i++) {
// 	if (words[i] === "пиво") {
// 		words[i] = "чай";
// 	}
// }
// let result = words.join(" ");
// console.log(result) //"Було жарко. Василь пив чай уприкуску з креветками"

//String: no tag

// let str = "Lorem ipsum dolor sit amet consectetur,<br> adipisicing elit.";
// let result;
// let tagStart = str.indexOf("<");
// let tagEnd = str.indexOf(">");
// if (tagStart !== -1 && tagEnd !== -1) {
// 	result = str.slice(0, tagStart) + str.slice(tagEnd + 1);
// } else {
// 	result = str;
// }
// console.log(result);

//String: big tag

// let str = "Lorem ipsum dolor sit amet consectetur,<br> adipisicing elit.";
// let startIndex = str.indexOf("<");
// let endIndex = str.indexOf(">");
// let tag = str.slice(startIndex, endIndex + 1);
// let result = str.slice(0, startIndex) + tag.toUpperCase() + str.slice(endIndex + 1);
// console.log(result);

//String: new line

// let userInput = prompt('Введите строку с маркером новой строки:');
// let multiLineString = userInput.split('\\n').join('\n');
// console.log(multiLineString);



