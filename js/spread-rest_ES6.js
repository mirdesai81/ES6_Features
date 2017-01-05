/**
 * Created by Mihir.Desai on 3/17/2016.
 */
//Spread/Rest

function spread(x,y,z) {
    console.log(x,y,z);
}

spread(...[1,2,3]);

//proior to ES5
//spread.apply(null,[1,2,3]);

var z = [1,2,3];

var x = [0,...z,4];
console.log("ES6 spread "+x);

function rest(...args){
    console.log(args);
}

rest(1,2,3,4,5);