function promisify(func) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            func(...args, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    };
}

// Example usage:
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);

readFileAsync('example.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err));
