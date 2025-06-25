let quote=document.querySelector('.text-content');
let person=document.querySelector('.person');
let newQuote= document.querySelector('#quoteGen');

const quotesArray = [
    { quote:"The only limit to our realization of tomorrow is our doubts of today.",person: "Franklin D. Roosevelt" },
    { quote:"Be the change that you wish to see in the world.",person: "Mahatma Gandhi" },
    { quote:"In the middle of difficulty lies opportunity.",person: "Albert Einstein" },
    { quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",person: "Winston Churchill" },
    { quote:"Do not go where the path may lead, go instead where there is no path and leave a trail.",person: "Ralph Waldo Emerson" },
    { quote:"I have not failed. I've just found 10,000 ways that won't work.",person: "Thomas A. Edison" },
    { quote:"It does not matter how slowly you go as long as you do not stop.",person: "Confucius" },
    { quote:"The best way to predict the future is to create it.",person: "Peter Drucker" },
    { quote:"Your time is limited, so don’t waste it living someone else’s life.",person: "Steve Jobs" },
    { quote:"Believe you can and you're halfway there.",person: "Theodore Roosevelt" }
];




newQuote.addEventListener("click",function(){
    let random = Math.floor(Math.random()*quotesArray.length);

    quote.innerText = quotesArray[random].quote;
    person.innerText = quotesArray[random].person;
})