/*****************************
Solved 1: Help The Zoo Manager
******************************/

function calculateMoney(tickets) {
    if (tickets < 0 || typeof tickets === 'string' || !Number.isInteger(tickets)) {
        return "Invalid Number";
    }
    else {
        // earn 
        let income = tickets * 120;
        // cost
        const get_man_cost = 500;
        const staff_lunch_cost = 8 * 50;
        // total cost 
        let total_cost = get_man_cost + staff_lunch_cost;
        // total income 
        let profit = income - total_cost;
        return profit;
    }
}
// const have_taka = calculateMoney(10);
// console.log(have_taka);

/****************************
Solved 2: Good Name , Bad Name
*****************************/

function checkName(name) {
    if (typeof name == 'string') {
        const lastCharacter = name[name.length - 1].toLowerCase();
        if (lastCharacter === 'a' || lastCharacter === 'y' || lastCharacter === 'i' || lastCharacter === 'e' || lastCharacter === 'o' || lastCharacter === 'u' || lastCharacter === 'w') {
            return "Good Name";
        }
        else {
            return "Bad Name";
        }
    } else {
        return "invalid";
    }
}
// const check = checkName("jhankar");
// console.log(check);

/****************************
Solved 3: Virus in my Array
*****************************/

function deleteInvalids(numbers) {
    let result = [];
    if (Array.isArray(numbers)) {
        for (let i = 0; i < numbers.length; i++) {
            if (typeof numbers[i] === 'number' && !isNaN(numbers[i])) {
                result.push(numbers[i]);
            }
        }
        return result;
    }
    else {
        return "Invalid Array";
    }
}
// const ary = ["1" , {num:2} , NaN ];
// const check = deleteInvalids(ary);
// console.log(check); 

/****************************
Solved 4: Make A Great Password
*****************************/

function password(object) {
    if (typeof object !== 'object' || !object.name || object.birthYear.toString().length !== 4 || !object.siteName) {
        return "invalid";
    }
    const website = object.siteName.charAt(0).toUpperCase() + object.siteName.slice(1);
    const username = object.name;
    const birthday = object.birthYear;
    const createPassword = `${website}#${username}@${birthday}`;
    return createPassword;
}
// const userInfo = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
// console.log(password(userInfo));

/****************************************
Solved 5: Monthly Savings of a Freelancer
*****************************************/

function monthlySavings(payments, livingCost) {
    if (Array.isArray(payments) && typeof livingCost === "number") {
        let totalEarn = 0;
        for (const payment of payments) {
            if (payment >= 3000) {
                afterPayment = payment * 80 / 100;
                totalEarn = totalEarn + afterPayment;
            }
            else {
                totalEarn = totalEarn + payment;
            }
        }
        let netIncome = totalEarn;
        saveIncome = netIncome - livingCost;
        if (saveIncome < 0) {
            return "earn more"
        }
        return saveIncome;
    }
    else {
        return "Invalid input";
    }
}
const array= [ 1000 , 2000 , 2500 ];
const Cost= 50000;
console.log(monthlySavings(array, Cost));