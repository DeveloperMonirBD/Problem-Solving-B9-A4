// #### Task-01
function calculateMoney(ticketSale) {
    if (ticketSale < 0 || typeof ticketSale !== 'number') {
        return 'Invalid Number';
    }
    let remainingAmount = ticketSale * 120 - (500 + 8 * 50);
    return remainingAmount;
}

// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(-130));
// console.log(calculateMoney('monir'));

// #### Task-02
function checkName(name) {
    if (typeof name !== 'string') {
        return 'Invalid';
    }

    // let lastLetter = name[name.length-1];
    let lastLetter = name.slice(-1).toLowerCase();
    let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    // Approse No: 1
    // let result = false;
    // for (let charAt of checkArray) {
    //     if (charAt === lastLetter) {
    //         result = true
    //     }
    // }

    // Approse No: 2
    let result = checkArray.includes(lastLetter);

    return result ? 'Good Name' : 'Bad Name';
}

// console.log(checkName("Salman"));
// console.log(checkName("RAFEE"));
// console.log(checkName("Jhankar"));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));

// #### Task-03
function deleteInvalids(array) {
    //Validation:
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }

    let numberArray = [];
    for (let element of array) {
        if (typeof element === 'number' && isNaN(element) === false) {
            numberArray.push(element);
        }
    }
    return numberArray;
}

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, '12', [1, 2], { ob: 'lala' }]));
// console.log(deleteInvalids(['1', { num: 2 }, NaN]));
// console.log(deleteInvalids([1, 2, -3]));
// console.log(deleteInvalids({ num: [1, 2, 3] }));

//Testing purpuse:-
// console.log(typeof NaN);
// console.log(isNaN(NaN))

// #### Task-04
function password(obj) {
    // validation:
    if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4) {
        return 'invalid';
    }
    //condition:
    let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let passwordString = capitalSiteName + '#' + obj.name + '@' + obj.birthYear;
    return passwordString;
}

// console.log(password({ name: 'kolimuddin', birthYear: 1999, siteName: 'google' }));

// console.log(password({ name: 'rahat', birthYear: 2002, siteName: 'Facebook' }));

// console.log(password({ name: 'toky', birthYear: 200, siteName: 'Facebook' }));

// console.log(password({ name: 'maisha', birthYear: 2002 }));

//Testing purpuse:-
// let birthYear = 1995
// console.log('hello'.length)
// console.log(birthYear.toString().length === 4)

// #### Task-05
function monthlySavings(arr, livingCost) {
    // array validation :
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid input';
    }

    // Calculate Total Income:
    let totalIncome = 0;
    for (let payment of arr) {
        if (payment >= 3000) {
            let tax = payment * (20 / 100);
            totalIncome += payment - tax;
        } else {
            totalIncome += payment;
        }
    }

    let savings = totalIncome - livingCost;

    // if (savings >= 0) {
    //     return savings
    // } else {
    //     return 'earn more'
    // }

    return savings >= 0 ? savings : 'earn more';
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
