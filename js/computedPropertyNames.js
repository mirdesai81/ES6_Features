/**
 * Created by Mihir.Desai on 4/4/2016.
 */
var prefix = "user_";
var o = {
    baz() {
        console.log("baz called..");
    },
    [prefix + "foo"]() {
        console.log("computed property user_foo called");
    }
};

o.user_foo();
