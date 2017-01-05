/**
 * Created by Mihir.Desai on 10/27/2016.
 */

function Foo(fname,lname) {
    this.fname = fname;
    this.lname = lname;
}

Foo.prototype.fullName = function() {
    console.log(this.fname + " " + this.lname );
};

function Bar(fname,lname,title) {
    Foo.call(this,fname,lname);
    this.title = title;
}


// link bar's prototype to foo.prototype will have side of bar.constructor
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.fullNameWithTitle = function() {
    console.log(this.fname + " " + this.lname + " position is" + this.title );
};

var bar = new Bar("mihir","desai","Staff UI Engineer");

console.log(bar.fname);
bar.fullName();
console.log(bar.constructor);

Object.defineProperty(Bar.prototype ,"constructor",{
   enumerable : false,
    writable : true,
    configurable : true,
    value : Bar
});

console.log(bar.constructor);

if(!Object.create){
    Object.create = function(o) {
        function F() {};
        // below call will remove the constructor property
        F.prototype = o;
        //Add back constrcutor
        F.prototype.constructor = F;
        return new F();
    }
}

function createAndLink(o) {
    function F() {}
    F.prototype = o;
    F.prototype.constructor = F;
    return new F();
}

var anotherObject = {
    a : 2
};

var myObject = createAndLink(anotherObject);
console.log(myObject.a);
console.log(myObject.constructor);