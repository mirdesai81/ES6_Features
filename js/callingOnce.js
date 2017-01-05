/**
 * Created by Mihir.Desai on 10/28/2016.
 */
var once = function(func) {
    return function() {
       var f = func;
       func = null;
       if(typeof f !== 'function') {
           return;
       }
       return f.apply(this,arguments);
    }
};

var returnedOnce = once(function(){console.log("called only once");});

returnedOnce();
returnedOnce();
