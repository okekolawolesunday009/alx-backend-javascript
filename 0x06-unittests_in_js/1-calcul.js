const calculateNumber = (type, a, b) => {
    const roundA = Math.round(a)
    const roundB = Math.round(b)
    var result;
    switch(type) {
        case 'SUM' :
            result = roundA + roundB
            break;
        case 'SUBTRACT' :
            result = roundA - roundB
            break;
        case 'MULTIPLY' :
            result = roundA * roundB
            break;
        case 'DIVIDE' :
            result = roundA / roundB
            break;

    }
    return result
   
   
}

const test1 = calculateNumber('DIVIDE', 1.4, 0)
console.log(test1, "kkk");

module.exports = calculateNumber