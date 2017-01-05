/**
 * Created by Mihir.Desai on 4/4/2016.
 */
var a = ['a', 'b', 'c' , 'd' , 'e'];

for(var idx in a) {
    console.log("for..in - " + idx);
}

for(var idx in a) {
    console.log("for..in - " + idx);
}

for(var val,ret, it = a[Symbol.iterator]();
    (ret = it.next()) && !ret.done;
) {
    console.log("iterator for - " + ret.value);
}

var o = {};
for(o.a of [1,2,3]) {
    console.log("object property to array: "+o.a);
}

for({ x : o.a } of [{x:1},{x:2},{x:3}]) {
    console.log("object property to array using destructuring: "+o.a);
}





