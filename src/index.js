module.exports = function reverse (n) {
    let revStr = '';
    for (let i = n.length - 1; i >= 0; i--) {
        revStr += n[i];
    }
    return revStr;
}
