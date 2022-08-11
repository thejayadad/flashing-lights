function twoDimensionalProduct(array){
    let total = 1;
    for (i = 0; i < array.length; i++){
        let num = array[i];
        for (let j = 0; num.length; j++){
            total *= num[j]
        }
    }
    
    return total;

}





let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88