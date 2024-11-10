var array=[{
    quote:" “Be yourself; everyone else is already taken.” ",
    author:"― Oscar Wilde"
},{
    quote:" “So many books, so little time.” ",
    author:"― Frank Zappa"
},{
    quote:" “A room without books is like a body without a soul.” ",
    author:"― Marcus Tullius Cicero"
},{
    quote:" “Be the change that you wish to see in the world.” ",
    author:"― Mahatma Gandhi "
},{
    quote:" “In three words I can sum up everything I've learned about life: it goes on.”  ",
    author:" ― Robert Frost "
},{
    quote:" “If you tell the truth, you don't have to remember anything.” ",
    author:"― Mark Twain"
},{
    quote:" “Always forgive your enemies; nothing annoys them so much.” ",
    author:"― Oscar Wilde "
},{
    quote:" “A friend is someone who knows all about you and still loves you.” ",
    author:" ― Elbert Hubbard"
},
{
    quote:" “We accept the love we think we deserve.” ",
    author:"― Stephen Chbosky, The Perks of Being a Wallflower"
},
{
    quote:" “ You miss 100% of the shots you don't take.” ",
    author:"― Wayne Gretzy"
},
{
    quote:" “It's not what happens to you, but how you react to it that matters.” ",
    author:"― Epictetus"
},
]


function getQuote(){
var generateRandomNumber=Math.floor(Math.random()*array.length);
document.getElementById('myQuote').innerHTML=array[generateRandomNumber].quote;
document.getElementById('author').innerHTML=array[generateRandomNumber].author;

console.log(generateRandomNumber);

}

