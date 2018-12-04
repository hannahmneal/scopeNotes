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

//                          ****        IF SCOPE         ****

let dog = "Great Dane"
let monthlyFoodCost = 0

if (dog === "Great Dane")
{  // Beginning of `if` scope

    /*
        This code can look out into the "outer" scope
        and modify a variable defined out there.
    */


   // const monthlyFoodCost += 23.00          //This is the original code given in the example. However, due to scope, you must remove
     monthlyFoodCost += 23.00                //"const" in order to get this to work.
     let monthlyGroomingCost = 100.00;       //added during code-along


}  // End of `if` scope

console.log(monthlyFoodCost);           //Code added during code-along
//console.log(monthlyGroomingCost);       //Code added during code-along; undefined (outside of scope)




//                           ****        FUNCTION SCOPE      ****

const userWord = "hll" //"hello"

function containsVowels (wordParameter)
{  // Beginning of `function` scope

    console.log(wordParameter);

    /*
        The `doesItHaveOne` variable can only be accessed
        within the curly braces of this function. The match()
        method on a string will return `null` if there
        are no matches, otherwise, an array will be returned.
    */
    const doesItHaveOne = wordParameter.match(/[aeiou]/gi)      //between the parentheses is a "regular expression"; .match means the argument itself needs to be an expression; it's a way to write whether something matches several arguments


    console.log(doesItHaveOne);
    console.log("checking condition", doesItHaveOne !== null );

    return doesItHaveOne !== null           //T/F value (Boolean?)

}  // End of `function` scope

const itContainedVowels = containsVowels(userWord)      //We call the function here, passing in "hello" (or, userWord)

console.log(itContainedVowels) // true or false         //We should get "true" from declaration on line 72
//console.log(doesItHaveOne) // doesItHaveOne is undefined



//                                  ****    Block Scope     ***
// You can isolate any code you want to make inaccessible simply by surrounding it in curly braces. 
// It doesn't matter what scope you are currently in - global, if, for, function - any code surrounded 
// by the braces is inaccessible.

// In global scope
const product = "Mirror"

{
    const order = []
    order.push(product) // This is fine. `product` variable in outer scope
}

/*
    Nope...
    Undefined exception thrown. Can't look into inner scopes.
*/
order.clear()