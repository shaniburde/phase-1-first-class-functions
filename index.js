function receivesAFunction(callback) {
    callback();
};

function returnsANamedFunction() {
 const name = () => {};
 return name;
};

function returnsAnAnonymousFunction() { 
    (function() {}) ();
    return returnsAnAnonymousFunction;
};

