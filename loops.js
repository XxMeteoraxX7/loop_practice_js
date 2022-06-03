 /*

 i is short for index
 for (initialExpression; condition; incrementExpression) {
        one or more statements, if only one statement no curly brackets needed
 }
Loop will execute as long as the condition is true. After each iteration i is incremented by 1. Once the condition is false the loop will end.
*/

// This will loop 5 times and show Hello world! + ( i++) for each iteration
for (let i = 1; i <= 5; i++) {
    console.log('Hello world!', i);
}




// This will loop and the output to the console will show all odd numbers from the incremented i variable
for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0)
    console.log(i);
}