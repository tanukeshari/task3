

var items= document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[1].style.fontWeight='bold';
items[1].style.color='green';

for(let i =0;i<items.length; i++)
{
    items[i].style.background="pink";
    
}