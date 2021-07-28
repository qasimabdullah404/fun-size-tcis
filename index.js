let fun = (string) => {
    if (typeof string !== "string") throw new TypeError("String is required");
    return string.replace(/\s/g, "")
}

exports.fun = fun;