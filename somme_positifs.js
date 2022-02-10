
// Faire la somme de tous les nombres positifs
let arr = [1,-4,7,12]

function positiveSum(arr) {
    let sum = 0
    arr.forEach(val => val>0 ? sum += val:sum)
    return sum
}

console.log(positiveSum(arr))
