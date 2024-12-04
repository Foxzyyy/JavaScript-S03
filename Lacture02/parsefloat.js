//sen rop wong
function circumference(r) {
    if (Number.isNaN(Number.parseFloat(r))) {
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}
console.log(circumference("4.567abcdefgh"));
//op: 28.695307297889173
console.log(circumference("abcdefgh"));
//op: 0