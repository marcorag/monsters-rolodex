

// map();

const myArray = [1,2,3,4]

myArray.map( el => el +1 )
// ritorna un nuovo array (4) [2, 3, 4, 5]

myArray.map( () => "c" )
//ritorna un nuovo array (4) ["c", "c", "c", "c"]
myArray
// (4) [1, 2, 3, 4]
//------------------------------------------------

//filter();
const myArray = [1,3,5,7,9]
myArray.filter( el => el > 4 )

// ritorna un nuovo array con solo i risultati True della funzione passata nel filter (3) [5, 7, 9]
reduce();

find();

//includes();
const myArray = [1,2,3,4,5]
myArray.includes(3)
// true
myArray.includes(9)
//false

const newArray = [{id:1},{id:2},{id:3}]
newArray[2]
//{id: 3}

myArray.includes(2,3)
//false
myArray.includes(2,1)
//true