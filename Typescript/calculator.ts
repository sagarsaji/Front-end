// Write a TypeScript program to create a simple calculator. 
// The calculator should have functions to perform basic arithmetic operations such as 
// addition, subtraction, multiplication, and division. The program should prompt the 
// user to enter two numbers and the operation they want to perform.

function add(a: number, b: number): number{
    return a+b;
}

function sub(a: number, b: number): number{
    return a-b;
}

function mul(a: number, b: number): number{
    return a*b;
}

function divv(a: number, b: number): number{
    return a/b;
}

let a: number = parseInt(prompt());
let b: number = parseInt(prompt());
let op: string = prompt("Operator : ");
let result: number;
switch(op){
    case '+' : result = add(a,b);
                break;
    case '-' : result = sub(a,b);
                break;
    case '*' : result = mul(a,b);
                break;
    case '/' : result = divv(a,b);
                break;
    default  : console.log("invalid");
                break;
}

console.log(result);