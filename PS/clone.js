function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

const original = { a: 1, b: { c: 2, d: { e: 3 } } };
const cloned = deepClone(original);
console.log(cloned); // { a: 1, b: { c: 2, d: { e: 3 } } }
