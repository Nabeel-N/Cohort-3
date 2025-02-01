"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("./typescript");
console.log(typescript_1.Sum);
const cart = [
    { name: "Apple", price: 1.5, quantity: 3 },
    { name: "Banana", price: 0.75, quantity: 5 },
    { name: "Orange", price: 1.25, quantity: 2 },
];
const add = cart.reduce((acc, current) => {
    const itemcost = current.price * current.quantity;
    return acc + itemcost;
}, 0);
console.log(add);
const numbers = [10, 15, 20, 25, 30, 35, 40];
const odd = numbers.reduce((acc, current) => {
    if (current % 2 == 0) {
        acc.sum += current;
        acc.count++;
    }
    return acc;
}, { sum: 0, count: 0 });
console.log(add);
const transactions = [
    { account: "A", amount: 100 },
    { account: "B", amount: 200 },
    { account: "A", amount: -50 },
    { account: "C", amount: 300 },
    { account: "B", amount: -100 },
    { account: "A", amount: 150 },
];
const total = transactions.reduce((acc, current) => {
    acc += current.amount;
    return acc;
}, 0);
console.log(total);
//Your task is to use the reduce function to calculate the total revenue for each product category.
const sales = [
    { product: "Laptop", category: "Electronics", revenue: 1000 },
    { product: "Smartphone", category: "Electronics", revenue: 800 },
    { product: "Shirt", category: "Clothing", revenue: 50 },
    { product: "Jeans", category: "Clothing", revenue: 100 },
    { product: "Headphones", category: "Electronics", revenue: 200 },
    { product: "Shoes", category: "Clothing", revenue: 150 },
];
const revenue = sales.reduce((acc, current) => {
    const { category, revenue } = current;
    if (!acc[category]) {
        acc[category] = 0;
    }
    acc[category] += revenue;
    return acc;
}, {});
console.log(revenue);
const app = {
    facebook: "nabeel",
    instagram: 8497,
};
console.log(app.facebook);
const developer = {
    framework: 4231,
    library: 24323,
};
console.log(developer.framework);
console.log((developer.coding = 9));
const students = [
    { name: "Alice", scores: { math: 85, science: 90, english: 80 } },
    { name: "Bob", scores: { math: 75, science: 80, english: 85 } },
    { name: "Charlie", scores: { math: 90, science: 85, english: 90 } },
];
const averagescore = students.reduce((acc, current) => {
    acc.math = acc.math + current.scores.math;
    acc.science = acc.science + current.scores.science;
    acc.english += current.scores.english;
    acc.count++;
    return acc;
}, { math: 0, science: 0, english: 0, count: 0 });
const math = averagescore.math / averagescore.count;
const science = averagescore.science / averagescore.count;
const english = averagescore.english / averagescore.count;
console.log(math, science, english);
//The total score for each student across all subjects.
//8The percentage of each student’s total score relative to the maximum possible score (assume each subject has a maximum score of 100).
const children = [
    { name: "Alice", scores: { math: 85, science: 90, english: 80 } },
    { name: "Bob", scores: { math: 75, science: 80, english: 85 } },
    { name: "Charlie", scores: { math: 90, science: 85, english: 90 } },
];
const score = children.reduce((acc, current) => {
    const { name, scores } = current;
    const totalscore = 300;
    if (!acc.totalscore[name]) {
        acc.totalscore[name] = 0;
    }
    acc.totalscore[name] += scores.english + scores.math + scores.science;
    acc.percentage[name] = (acc.totalscore[name] / totalscore) * 100;
    return acc;
}, { totalscore: {}, percentage: {} });
console.log(score);
/*Group the sales data by date, product, and region.

Calculate the total sales for each combination of date, product, and region.

Return the result as a nested object where:

//The first level of keys is the date.

//The second level of keys is the product.

//The third level of keys is the region.

//The values are the total sales for that date, product, and region.
*/
const salesData = [
    { date: "2023-10-01", product: "Laptop", region: "North", sales: 1000 },
    { date: "2023-10-01", product: "Laptop", region: "South", sales: 1500 },
    { date: "2023-10-01", product: "Smartphone", region: "North", sales: 800 },
    { date: "2023-10-02", product: "Laptop", region: "North", sales: 1200 },
    { date: "2023-10-02", product: "Smartphone", region: "South", sales: 900 },
    { date: "2023-10-02", product: "Tablet", region: "North", sales: 500 },
];
