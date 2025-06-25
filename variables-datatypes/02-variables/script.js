//variables: are three types
//var,let,const


let firstName = 'Mukesh';
let lastName='Udaykumar';
console.log(firstName,lastName);

let age = 30;
console.log(age);


//hoisting :var


//Naming conventions :
// cammelCase[variables]
// underScore case:first_name
// PascalCase:FirstName

//re-assigning variables
//let can re-assign
age=31;
console.log(age);


let score;
score=1;
if(true)
{
    score+=1;
}

console.log(score);

const x= 100;

const arr = [1,2,3,4];// const cant be re-assigned

arr.push(5);
console.log(arr);

const person ={
    name:'mike',
    email:'mike@gmail.com'
};

person.name='tyson';

console.log(person);


//declaring multiple values at once
//let and const can take multiple variables
let a,b,c;
const d=10,e=20,f=30;
console.log(e);



//Primitive data types:
// string,number(decimal,floating)
//  ,boolean,null,undefined,symbol
//  ,bigInt;

//reference type objects are NON-PRIMITIVE DATATYPES(object-literals,functions)



