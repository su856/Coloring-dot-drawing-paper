let first = document.querySelector('#fir');
let second = document.querySelector('#sec');
let third = document.querySelector('#thir');
let fourth = document. querySelector('#four');
let fifth = document.querySelector('#fift');
let six = document.querySelector('#sixt');
let seven = document.querySelector('#sevent');
let eight = document.querySelector('#eighth');
let nine = document. querySelector('#nineth');
let ten = document.querySelector('#tenth');
let eleven = document.querySelector('#eleventh');

let setColor = '#fff';

head();

function head()
{
    let all_button = document.querySelector('#contain');
    for(let i=0; i < all_button.children.length; i++)
    {
        const button = all_button.children[i];
        button.addEventListener('click',call);
    }
}

const Converter_1= () => setColor = 'rgb(10, 133, 10)';
const Converter_2= () => setColor = 'rgb(236, 236, 28)';
const Converter_3= () => setColor = 'rgb(247, 7, 7)';
const Converter_4= () => setColor = 'rgb(14, 14, 238)';
const Converter_5= () => setColor = 'rgb(12, 233, 148)';
const Converter_6= () => setColor = 'rgb(234, 241, 234)';
const Converter_7= () => setColor = 'rgb(163, 43, 43)';
const Converter_8= () => setColor = 'rgb(241, 122, 142)';
const Converter_9= () => setColor = 'rgb(219, 14, 238)';
const Converter_10=() => setColor = 'rgb(12, 12, 12)';
const Converter_11=() => setColor = '#868f96';

function call(e)
{
    e.target.style.backgroundColor = setColor;
}

first.addEventListener('click',Converter_1);
second.addEventListener('click',Converter_2);
third.addEventListener('click',Converter_3);
fourth.addEventListener('click',Converter_4);
fifth.addEventListener('click',Converter_5);
six.addEventListener('click',Converter_6);
seven.addEventListener('click',Converter_7);
eight.addEventListener('click',Converter_8);
nine.addEventListener('click',Converter_9);
ten.addEventListener('click',Converter_10);
eleven.addEventListener('click',Converter_11);