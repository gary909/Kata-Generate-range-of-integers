function generateRange(min, max, step){
    let myArr = [];
    let myNum = step;
    for (let i = min; i <= max; i= i+myNum) {
        myArr.push(i)
    }
    return myArr;
}

console.log(generateRange(2, 10, 2)); // return [2,4,6,8,10]