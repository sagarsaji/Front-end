// Write a TypeScript program to create a simple calculator. 
// The calculator should have functions to perform basic arithmetic operations such as 
// addition, subtraction, multiplication, and division. The program should prompt the 
// user to enter two numbers and the operation they want to perform.
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function divv(a, b) {
    return a / b;
}
var a = Number(prompt());
var b = Number(prompt());
var op = prompt("Operator : ");
switch (op) {
    case '+':
        add(a, b);
        break;
    case '-':
        sub(a, b);
        break;
    case '*':
        mul(a, b);
        break;
    case '/':
        divv(a, b);
        break;
    default:
        console.log("invalid");
        break;
}
