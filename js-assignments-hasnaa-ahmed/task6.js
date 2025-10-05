/****** */
let row=""
for (let i = 1; i <= 100; i++){
    if (i==3)
        row = "Fizz"
    else if (i == 5)
        row = "Buzz"
    else if (i == 3 * 5)
        row = "FizzBuzz"
    else 
        row = i
    
    console.log(row)
}
