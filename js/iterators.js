/**
 * Created by Mihir.Desai on 4/12/2016.
 */

var fib = {
    [Symbol.iterator]() {
        var n1 = 1, n2 = 1;

        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
              var current = n2;
              n2 = n1;
              n1 = n1 + current;
              return { value : current, done: false};
            },
            return(v) {
              console.log("fib completed!!");
              return { value : v, done : true};
            }
        };
    }
};

for(var v of fib) {
    console.log(v);
    if(v > 30)
        break;
}

var tasks = {
   [Symbol.iterator]() {
       var steps = this.actions.slice();
       return {
           [Symbol.iterator]() {
               return this;
           },
           next() {
              if(steps.length > 0) {
                  let res = steps.shift()(...args);
                  return { value: res, done : false};
              } else {
                  return {done : true};
              }
           },
           return(v) {
              steps.length = 0;
              return { value : v, done : true};
           }
       }
   },
   actions : []
};

tasks.action.push(function step1(x){
   console.log("step 1:",x);
    return x * 2;
    },
    function step2(x,y){
        console.log("step 2:",x,y);
        return x + (y * 20);
    },
    function step3(x,y,z){
        console.log("step 3:",x,y,z);
        return x + ((y * 2) + (z * 2));
    }
);

var iter = tasks[Symbol.iteraotr]();
iter.next(10);
iter.next(10,20);
iter.next(10,20,30);
iter.next();


