let fun = (string) => {
    if (typeof string !== "string") throw new TypeError("String is required");
    return string.replace(/\s/g, "")
}

let andFun = (arr) => {
    let sum = 0;
    for (let i of arr) {
        sum += Number(i);
    }
    return sum;
}

let funHello = (name) => {
    return "Hello "+name+"!"
}

exports.fun = fun;
exports.andFun = andFun;
exports.funHello = funHello;