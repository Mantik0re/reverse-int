module.exports = function reverse(n) {

    let revStr = '';
    n = n.toString();
    for (let i = n.length - 1; i >= 0; i--) {
        if (n[0] != 0 && n[i] != '-') {
            revStr += n[i];
        }
        
    }
    return revStr;
}