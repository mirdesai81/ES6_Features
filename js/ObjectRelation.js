/**
 * Created by Mihir.Desai on 10/28/2016.
 */

function relatedTo(o1,o2) {
    function F() {};
    F.prototype = o1;
    F.prototype.constructor = F;
    if(o2 instanceof F) {
        return true;
    }

    return false;
}

var a = {};
var b = Object.create(a);

function Foo() {

}

var c = new Foo();
var d = Object.create(c);

console.log("IS a is related to b : "+relatedTo(a,b));

console.log("IS c is related to d : "+c.isPrototypeOf(d));

console.log("IS a is related to b : "+a.isPrototypeOf(b));

