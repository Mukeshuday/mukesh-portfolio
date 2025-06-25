//PRIMITIVE TYPE:stored in ['stack']

//STRINGS


const firstName='MUKESH';



//NUMBER

const age = 30;



//boolean

const trueKids= true;



//Null

const aptNumber = null;

//which returns the output typeof as 'object'

//Underdefined
const score=undefined;



//NON_PRIMITIVE types:stored in ['heap']

//ARRAY
const number = [1,2,3,4];
//which return the typeof as 'object'


//FUNCTION
function sayHello(){
    console.log("hello");
}
//return as typeof as 'function'
const output = sayHello;
console.log(output, typeof output);


let person ={
    name:'mukesh',
    email:'muki14576@gmail.com'
};

let newPerson= person;

newPerson.name='udayakumar mukesh';
console.log(person.name);
console.log(newPerson.name);