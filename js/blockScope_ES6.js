/**
 * Created by Mihir.Desai on 3/16/2016.
 */

var a = 2;

{
    let a = 3;
    console.log("Inside block let a="+a);
}

console.log("Outside block var a="+a);

if(a > 1) {
    let b = a * 3;
    console.log("b="+b);

    for(let i = a; i <= b; i++) {
        let j = i * 10;
        console.log("for loop using let declaration j="+j);
    }

    let c = a + b;
    console.log("c="+c);
}

// z will display undefined due to hoisting
// y will throw referenceError due Temporarl dead zone and let has no hoisting
/*
{
    if(typeof z == 'undefined') {
        console.log("z");
    }

    if(typeof y == 'undefined') {
        console.log("y")
    }

    var z;
    let y;
}*/

// let + for loop
// let will re-initialize for each iteration
var func = [];

for(let i = 0; i < 5; i++) {
    func.push(function(){
        console.log("let in for loop i="+i);
    })
}

func[3]();

func = [];
for(var i = 0; i < 5; i++) {
    func.push(function(){
        console.log("var in for loop i="+i);
    })
}

func[3]();

func = [];
for(var i = 0; i < 5; i++) {
    func.push((function(j){
        return function() {
            console.log("IIFE used for var i binding i="+j);
        }
    })(i))
}

func[3]();

//const delcaration
{
    const a = 2;
    console.log(a);
    // Will throw TypeError when attempt to update value of const
  //  a = 3;

    // the variable b doesn't hold a cinstant array rather it holds a constant reference to array. the array is mutable
    const b = [1,2,3];
    b.push(4);
    console.log(b);
}

//block scoped functions
{
    bar();

    function bar() {
        console.log('foo');
    }
}
// should throw reference error but for backward compatiblity it might not throw error;
bar();









