// функция для проверки палиндрома
function Palindrome(str) {
  // удаляем пробелы, приводим к нижнему регистру
  str = str.replace(/\s/g, '').toLowerCase();
  
  // сравниваем строку с обратной версией
  return str === str.split('').reverse().join('');
}

// Проверяем свою фамилию
let LastName = "Аньшин"; 
if (Palindrome(LastName)) {
  console.log(`Фамилия "${LastName}" является палиндромом.`);
} else {
  console.log(`Фамилия "${LastName}" не является палиндромом.`);
}
