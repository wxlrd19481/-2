let CA = 0;
let answer1 = promt ("Что можно увидеть с закрытыми глазами?");
if (answer1.toLowerCase() === "сон") { // proverka otveta

  alert ("verno:)");
  CA++; // uvelishivaet chetchik
} else {
  alert ("neverno:(");
}

// vtoraya zagadka
let answer2 = promt(chto stanovitsa bolshe, esli ego postavit vverh nogami?)
if (answer2.toLowerCase() === "chislo 6"; {
  alert("verno:)");
CA++;
} else {
  alert("neverno:(");
}
// vivod rezultata
alert('kolishestvo pravilnih otvetov: ${CA}');
