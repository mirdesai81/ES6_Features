/**
 * Created by Mihir.Desai on 3/17/2016.
 */
function defaultTest(x,y) {
    x = (x !== undefined) ? x : 11;
    y = (y !== undefined) ? y : 12;

    x = (0 in arguments) ? x : 11;
    y = (1 in arguments) ? y : 12;

    console.log("default params without ES6:"+(x + y));
}

defaultTest();
defaultTest(0,12);
defaultTest(undefined,13);

function defaultTestEs6(x = 11, y = 12) {
    console.log("default params with ES6:"+(x + y));
}

defaultTestEs6();
defaultTestEs6(0,12);
defaultTestEs6(undefined,13);


function barDefault(val) {
    console.log("bar called");
    return y + val;
}

function fooDefault(x = y + 5, z = barDefault(x)) {
    console.log("default value expression: ",x,z);
}

var y = 5;
fooDefault();
fooDefault(10);
y = 6;
fooDefault(undefined,20);