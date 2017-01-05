/**
 * Created by Mihir.Desai on 3/17/2016.
 */
var name = "Mihir";

var greeting = `Hello ${name}`;

console.log("Interpolate String : "+ greeting);

var text = `now is the time for all men
to come to the aid of their
country!!`;

console.log("Interpolate String : "+ text);

function upper(s) {
    return s.toUpperCase();
}

var whom = 'country';

var text = `now is the time for all ${upper('men')}
to come to the aid of their
${upper(`${whom}`)}!!`;

console.log("Interpolate String : "+ text);

// Interpolated string is lexically scoped

function fooString(str) {
    var name = "foo";
    console.log("Interpolated string is lexically scoped - " + str);
}

function barString() {
    var name = "bar";
    fooString(`Hello from ${name}`);
}


var name = "global";
barString();
fooString(`Hello from ${name}`);

// tagged template literals on function call

function barTaggedLiterals(strings,...values) {
    console.log("Non interpolated strings :" + strings);
    console.log("Interpolated strings as values:" + values);
}

var desc = "awesome";

barTaggedLiterals`I am ${desc}!`;

function barTaggedLiteralsReturnedFunc() {
    return function(strings,...values) {
        console.log("Raw String:"+strings.raw);
        console.log("Non interpolated strings in returned func :" + strings);
        console.log("Interpolated strings as values in returned func:" + values);

    }
}

barTaggedLiteralsReturnedFunc()`I am ${desc}!`;

function convertToDollar(strings,...values) {
    return strings.reduce(function(start,curr,index){
        if(index > 0) {
            if(typeof values[index-1] == 'number') {
                start += `$${values[index-1].toFixed(2)}`;
            } else {
                start += values[index-1];
            }
        }

        return start + curr;

    },"");
}

var amt1 = 12.85, amt2 = amt1 * 1.80, name = "mihir";

var text = convertToDollar
    `Thanks for your purchase, ${name}! Your
product cost was ${amt1}, which with tax
comes out to ${amt2}.`;

console.log( text );

