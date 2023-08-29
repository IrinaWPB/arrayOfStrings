/** Find a common string og two arrays
* 1. Double loop
* 2. Better way))) SEt
*/
// function findCommonString(arr1, arr2) {
//     //loop through first array
//     for (let i = 0; i < arr1.length; i++) {
//         //loop through second
//         for (let j = 0; j < arr2.length; j++) {
//             //compare i-th word of first array with j-th word if second array
//             //if same - compare all letter at same indexes  
//             if (arr1[i] === arr2[j]) return arr1[i]
//         }
//     }
//     return -1
// }

function findCommonString(arr1, arr2) {
    //create a set of strings of first array
    let elementsOfArr1 = new Set()
    for (let word of arr1) {
        elementsOfArr1.add(word)
    }
    //for each word of second array check if it's in set
    for (let word of arr2) {
        if (elementsOfArr1.has(word)) return word
    }
    return -1
}
console.log(findCommonString(['one', 'two', 'three', 'four'], ['four', 'five'])) //'four'
console.log(findCommonString(['one', 'two', 'three', 'four'], ['five', 'six', 'seven', 'one'])) //'one'
console.log(findCommonString(['one', 'two', 'three', 'four'], ['six', 'five'])) //-1