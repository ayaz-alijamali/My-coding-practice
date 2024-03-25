// Aritimetic operators
let a = 5;
let b = 2;
console.log("a = ", a, " & b = ", b);
console.log("a + b =", a + b );
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b); 
console.log("a ** b =", a ** b);

// Unary operators

let A = 5;
let B = 2;
console.log( "A =", A, " & B = ", B);
A ++;
console.log(" A ++ =", A);
B --;
console.log(" B -- =", B);

// Assignment operators

let c = 5;
let d = 2;
c += 4
console.log("c + 4 =", c);
c -= 4
console.log("c - 4 =", c);
c *= 4
console.log("c * 4 =", c);
c /= 4
console.log("c / 4 =", c);
c %= 4
console.log("c % 4 =", c);

// Comprison operators 

let f = 5;
let g = 2;
console.log("f == g", f == g);
console.log("f != g", f != g);

let F = 5;
let G = "5";
console.log("F === G", F === G);
console.log("F !== G", F !== G);

// Conditional Statement

let age = 18;
if ( age >= 18) {
    console.log ("you can vote");
}

let AGE = 16;
if ( AGE < 18) {
    console.log ("you cannot vote");
} 

let mode = "dark";
let color;

if ( mode === "dark") {
    color = "black";
}
else if ( mode === "blue") {
    color = "blue";
}
else if ( mode === "pink") {
    color = "pink";
}
else {
    color = "white";
}

console.log(color);

if (mode === "dark")
{ console.log(mode)}

// Odd or even 

let num = 20;
if ( num % 2 === 0){
    console.log(num,"is even");
} else{ console.log(num, "is odd");
}

let number = 15;
if ( number % 2 === 0){
    console.log(number,"is even");
} else{ console.log(number, "is odd");
}

// Prompt 

let NUM = prompt ( " Enter a number");

if ( NUM % 3 === 0 ){
    console.log( NUM, "is multiple is 3");
}
else {
    console.log( NUM, "is not multiple is 3");
} 

// Score 

let score = prompt ( "Enter your score (0-100):");
let grade;
if ( score >= 90 && score <= 100 ) {
    grade = "A";
} else if ( score >= 70 && score <= 89) {
    grade = "B";
} else if ( score >= 60 && score <= 69) {
    grade = "C";
} else if ( score >= 50 && score <= 59) {
    grade = "D";
} else if ( score >= 0 && score <= 49) {
    grade = "F ";
}

console.log("according to your score, your grade was:",grade);