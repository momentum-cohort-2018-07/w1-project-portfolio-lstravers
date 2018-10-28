function fizzBuzz (start, end) {        //declare the function
    let current = start                 // can declare variables anywhere in the code
    
    while (current <= end) {
    if (current % 15 === 0) {
            console.log ('FizzBuzz');
        elseif (current % 3 === 0); {
            console.log('Fizz')
        elseif (current % 5 === 0); {
            console.log ('Buzz')
        else { 
            console.log (current)
        }

        current = current+1           // current +1 SAME as current++
        }
}

    fizzBuzz(1, 100)                     //call the argument

    function sayHello(name) {
        console.log("Hello, ") + name + "!")
    }