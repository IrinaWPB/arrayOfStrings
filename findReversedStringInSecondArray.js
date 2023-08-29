function findReversedStringInSecondArray(arr1, arr2) { //O(n1*m + n2)~ O(n) n1 - shorter array, m -string length, n2 - longer array
    //optimization to reverse strings of shorter array
    let arrToReverse, toCheck
    if (arr1.length < arr2.length) {
        arrToReverse = arr1
        toCheck = arr2
    } else {
        arrToReverse = arr2
        toCheck = arr1
    }
    //create a set of reversed strings
    let mySet = new Set()
    for (let string of arrToReverse) {
       string = string.split('').reverse().join('')
       mySet.add(string)
    }
    for (let string of toCheck) {
        if (mySet.has(string)) return [string, string.split('').reverse().join('')]
    }
    return -1
}

console.log(findReversedStringInSecondArray(['one', 'two', 'three'], ['one', 'owt', 'three'])) //'owt', 'two'
console.log(findReversedStringInSecondArray(['one', 'two', 'three'], ['one', 'two', 'three'])) //-1
console.log(findReversedStringInSecondArray(['one', 'two', 'three', 'six', 'ten'], ['one', 'owtii', 'three', 'net'])) //'net', 'ten'