//For Loop Scope:

let tenPlus = 1;
for (let i = 0; i <=10; i++)
{ // Beginning of `for` scope

    /*
        Code outside of this scope has no idea that the `tenPlus` variable even exists.
        Only the code inside the block can access it.
    */
    const tenPlus = i + 10      //You can play with this line, providing different "let" and "console.log" statements to see what happens.

    // Still inside the `for` block, so `tenPlus` is accessible
    if (tenPlus > 100) {
        console.log("Your number was too high")
    }

} // End of `for` scope

/*
    This will throw an exception stating that `tenPlus` is not defined. This is external 
    code to the `for` loop's scope, and is therefore not capable of accessing anything inside it.
*/
console.log(tenPlus)