//6. EXTRA! Reject
//Skriv en metod som är motsatsen till filter. Exempel på test för att se om det fungerar kan
//vara att skapa en array med jämna och ojämna nummer, och en testfunktion som kollar om numret är udda eller jämnt,
// men du kan hitta på test själv.

// Filter The filter() method creates a shallow copy of a portion of a given array,
//filtered down to just the elements from the given array that pass the test implemented by the provided function.

//Så motsatsen är att den behåller det som inte filtreras?? orginal - filter = motsats?
let a =[1,2,3,4,5,6,7,8,9,10,11,12,13,14]

function antiFilter(arr) {
  clone = [...arr]
  clone.filter(number => number/2 % 0)
}
