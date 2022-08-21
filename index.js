let receivesAFunction = (spy) => {
    return spy();
};

let returnsANamedFunction = (name) => {
    return function returnsAFunction(name) {};
};

function returnsAnAnonymousFunction(name) {
    return function (name) {};
}; 