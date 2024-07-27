function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

const log = debounce(() => console.log('Debounced!'), 1000);

log(); // Will log 'Debounced!' only if no other call is made within 1 second
