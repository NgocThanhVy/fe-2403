function add(x, y, z) {
    return x + y +z;
}

function currieAdd(x) {
    return function (y) {
    return function (z) {
        return x + y + z;
    };
    };
}

let curriedResult = currieAdd(2)(3)(4);
console.log(curriedResult);


let addFive = currieAdd(2)(3);
console.log(addFive(5));