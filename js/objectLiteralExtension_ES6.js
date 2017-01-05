/**
 * Created by Mihir.Desai on 3/17/2016.
 */

var x = 2, y = 3, obj = { x , y };

console.log("concise properties: ",obj.x,obj.y);

 obj = {
   x() {

       },
   y() {

       }
 };

var obj = {
    _id : 10,
    get id() {return this._id++;},
    set id(v) { this._id = v;}
};

console.log(obj.id);
console.log(obj.id);
obj.id = 20;
console.log(obj.id);

console.log(obj._id);
console.log(obj._id);
