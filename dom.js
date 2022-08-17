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
var headertitle = document.getElementById('header-title');
var header = document.getElementById("main-header");

console.log(headertitle);
// headertitle.textContent = 'Hello';
// headertitle.innerText = 'Goodbye';

//
// headertitle.innerHTML = '<h3>Hello</h3>'

// Style====----------------------------------->>>>>>>>>>>>>>>>>>>>>>
header.style.borderBottom = 'solid 3px black';

var itemssss = document.getElementById('main');
itemssss.style.color = 'green';


