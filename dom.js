// // Examine the document objedct

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// //document.all[10].textContent = 'Hello';

// console.log(document.forms);
// console.log(document.links);

// console.log(document.images);

//-------------------------------------GETELEMENTSBYID----------------------//

// console.log(document.getElementById('header-title'));
// var headertitle = document.getElementById('header-title');
// var header = document.getElementById("main-header");

// console.log(headertitle);
// headertitle.textContent = 'Hello';
// headertitle.innerText = 'Goodbye';

//
// headertitle.innerHTML = '<h3>Hello</h3>'

// // Style====----------------------------------->>>>>>>>>>>>>>>>>>>>>>
// header.style.borderBottom = 'solid 3px black';

// var itemssss = document.getElementById('main');
// itemssss.style.color = 'green';


//    GETELEMENTSBYCLASSNAME------------------->>>>>>>>>>>>>>>>>>


// var itemss = document.getElementsByClassName('list-group-item');
// console.log(itemss);
// console.log(itemss[1]);
// itemss[1].textContent = 'Hello 2';
// itemss[1].style.fontWeight = 'bold';
// itemss[2].style.backgroundColor = 'green';


// for(var i =0;i<itemss.length;i++)
// {
//     itemss[i].style.fontWeight = 'bold'
// }


// GETELEMENTSBYTAGNAME---------------->>>>>>>



var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[2].style.backgroundColor = 'green';

for(var i =0;i<li.length;i++)
{
    li[i].style.backgroundColor = 'yellow';
}