/**
 * Created by Mihir.Desai on 3/17/2016.
 */
function destructFoo() {
    return [1,2,3];
}

function destructBar() {
    return {
        x : 4,
        y : 5,
        z : 6
    };
}

var a,b,c,x,y,z;
[a,b,c]  = destructFoo();
({ x:x, y: y, z: z} = destructBar());

console.log("destructure array :",a,b,c);
console.log("destructure object properties: ",x,y,z);

var aa = 20, bb = 30;

var o = { x : aa, y : bb};

// source --> traget in destructuring
// not target <-- source
var {x:AA , y : BB} = o;
console.log("destructure:", AA, BB);

var o = {};

[o.a, o.b, o.c] = destructFoo();
({x : o.x, y : o.y,z : o.z} = destructBar());

console.log(o);

var which = 'x', p = {};

({ [which] : p[which]} = destructBar());
console.log("computed property: "+p.x);

var o1 = { a : 1, b: 2, c : 3};
var o2 = {};

({ a : o2.a, b : o2.b, c : o2.c} = o1);
console.log("object mapping to another using assignment; ", o2.a, o2.b,o2.c);

var a1 = [1,2,3];
var o2 = [];

[o2[2] , o2[1], o2[0]] = a1;

console.log("Reorder array to another: " + o2);

var x1 = 20, y1 = 30;

console.log("before swap x = " + x1 + " y =" + y1) ;
[y1 , x1] = [x1 , y1];
console.log("after swap x = " + x1 + " y =" + y1) ;
