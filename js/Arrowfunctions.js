/**
 * Created by Mihir.Desai on 4/4/2016.
 */

/*
So now we can conclude a more nuanced set of rules for when => is appropriate and not:

If you have a short, single-statement inline function expression, where the only statement is a return of some computed value,
    and that function doesn't already make a this reference inside it,
    and there's no self-reference (recursion, event binding/unbinding),
    and you don't reasonably expect the function to ever be that way,
    you can probably safely refactor it to be an => arrow function.
If you have an inner function expression that's relying on a var self = this hack or a .bind(this) call on
    it in the enclosing function to ensure proper this binding,
    that inner function expression can probably safely become an => arrow function.
If you have an inner function expression that's relying on something like var args = Array.prototype.slice.call(arguments)
    in the enclosing function to make a lexical copy of arguments,
    that inner function expression can probably safely become an => arrow function.
For everything else -- normal function declarations, longer multistatement function expressions,
    functions that need a lexical name identifier self-reference (recursion, etc.),
    and any other function that doesn't fit the previous characteristics -- you should probably avoid => function syntax.

*/

var foo = (x,y) => x + y;

console.log("Array function : " + foo(20,10));

var f3 = (x,y) => {
      var z = x*2 + y;
        return (x + Y + z)/2;
    };

console.log("Array function : " + f3(20,10));

var a = [1,2,3,4,5];

a.map(v => v * 2);

console.log("Array function using array map : " + a);

var controller = {
    makeRequest : function() {
        // var self = this;
        btn.addEventListener('click', () => {
            // here this point to enclosing scope of array function so var self = this
            this.makeRequest();
        });
    },
    makeOtherRequest : () => {
        // here this points to global
        this.helper();
    },
    helper : function() {

    }
};