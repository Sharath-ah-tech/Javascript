let a = 10;
var b = 20;
const c = 30;

function showResult(value) {
    document.getElementById("Output").innerText = value;
}

function Addnum() {
    showResult(a + b + c);
}

function Subnum() {
    showResult(a - b - c);
}

function Mulnum() {
    showResult(a * b * c);
}

function Divnum() {
    showResult(a / b / c);
}

function ChangeValuea() {
    let newValue = prompt("Enter new value for a:");
    if (newValue !== null) {
        a = Number(newValue);
        document.getElementById("a").innerText = "Value of a: " + a;
    }
}

function Changevalueb() {
    let newValue = prompt("Enter new value for b:");
    if (newValue !== null) {
        b = Number(newValue);
        document.getElementById("b").innerText = "Value of b: " + b;
    }
}

function Changevaluec() {
    let newValue = prompt("Enter new value for c:");
    if (newValue !== null) {
        c = Number(newValue);
        document.getElementById("c").innerText = "Value of c: " + c;
    }
}

function Check() {
    alert(a === b && b === c);
}

function Checknum() {
    alert(a === b && b === c);
}

function Compare() {
    alert(a > b && b > c);
}

//28-04-2025

function sub(a,b){
    return a-b;
}

const d = function(a, b, c){
    return a+b+c;
}
console.log(d(10, 10, 20));

let num = [1, 2, 3, 4, 5, 6]
num.forEach(ele=> console.log(ele));

const n = 10;
const result = (n)=> n%2==0;
console.log(result(n));

function multiply(num){
    return function(x){
        return x*num;
    }
}
const disp = multiply(5);
console.log(disp(10));

function callback(number, callback){
    let result = callback(number);
    return result;
}
console.log(callback(5, number=>number*number));

const cube = (n) => n*n*n;
console.log(cube(3));

const filterEven = (arr) => arr.filter(r => r % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5, 6]));

const find = (arr)=>arr.find(e => e > 3);
console.log(find([1, 2, 3, 4, 6, 5, 7]));

Person = {
    "name" : "Seera",
    "age" : 22,
    "city" : "Hyderabad"
}
console.log(Person.age)
for(let key in Person){
    console.log(Person[key]);
    console.log(key +  ":" + Person[key]);
}

Car = {
    "brand" : "BMW",
    "model" : "X5",
    "year" : 2020
}
console.log(Car.model);
Car.model = "M6";
console.log(Car.model);

let Merge = {...Person, ...Car};
console.log(Merge);

console.log(Object.keys(Merge));
console.log(Object.values(Merge));

