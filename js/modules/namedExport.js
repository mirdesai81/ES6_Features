/**
 * Created by Mihir.Desai on 4/21/2016.
 */

const sqrt = Math.sqrt;
function square(x) {
    return x * x;
}

function diag(x,y) {
    return sqrt(square(x) + square(y));
}

export {sqrt , square , diag};
