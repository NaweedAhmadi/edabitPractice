// Weekly Salary
// Write a function that takes a list of hours and returns the total weekly salary.

// The input list hours is listed sequentially, ordered from Monday to Sunday.
// A worker earns $10 an hour for the first 8 hours.
// For every overtime hour, he earns $15.
// On weekends, the employer pays double the usual rate, regardless how many hours were worked previously that week. For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.

// Examples
// weeklySalary([8, 8, 8, 8, 8, 0, 0]) ➞ 400
// weeklySalary([10, 10, 10, 0, 8, 0, 0]) ➞ 410
// weeklySalary([0, 0, 0, 0, 0, 12, 0]) ➞ 280

// Notes
// Every element in the array is greater than or equal to 0.

function salary(hours) {

    let salaryTotal = 0;
    
    for (let x = 0; x < 5; x++) {
        if(hours[x] <= 8) {
            salaryTotal += (hours[x] * 10);
        } else if (hours[x] > 8) {
            salaryTotal += 8 * 10;
            salaryTotal += (hours[x] - 8) * 15;
        }
    }

    for (let y = 5; y < 7; y++) {
        if(hours[y] <= 8) {
            salaryTotal += hours[y] * 20;
        } else if (hours[y] > 8) {
            salaryTotal += 8 * 20;
            salaryTotal += (hours[y] - 8) * 30;
        }
    }

    return salaryTotal;
}

console.log(salary([0, 0, 0, 0, 0, 12, 0]));