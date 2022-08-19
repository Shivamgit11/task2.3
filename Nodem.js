//    Traversing the dom      //

// var itemList = document.querySelector('#items');

// parentNode 
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//ParentElement
// console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundColor = 'grey';
// console.log(itemList.parentElement.parentElement.parentElement);


//       ChildNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'Yellow';

//firstchile
// console.log(itemList.firstChild);

// first element child
// console.log(itemList.firstElementChild);

// itemList.firstElementChild.textContent = 'Hello 1';

// //    lastchild
// console.log(itemList.lastChild);

// //   lastElementchild
// console.log(itemList.lastElementChild);

// itemList.lastElementChild.textContent = 'Hello 1';

// nextsiblings
// console.log(itemList.nextSibling);

// //nextelementsibling
// console.log(itemList.nextElementSibling);

//     previoussibling
// console.log(itemList.previousSibling);

//      previouselementsibling
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color = 'green';

//        createElement

//        Create a div

// var newdiv = document.createElement('div');

//Add class 
// newdiv.className = 'hellow';

// Add id 
// newdiv.id = 'hello1';

//Add attributes
// newdiv.setAttribute('title','Hello Div');

// Create a text Node
// var newdivText = document.createTextNode('Hellow world');

//  Add text to div 
// newdiv.appendChild(newdivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newdiv);

// newdiv.style.fontSize = '25px'

// container.insertBefore(newdiv, h1);

// var itelelem = document.querySelector('li .list-group-item');
// var i1 = document.querySelector('list-group-item li');
// container.insertBefore(newdiv, i1);


var filter = document.getElementById('filter');

// Filter Event
filter.addEventListener('keyup', filterItems);

//filterItem
function filterItem(){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    //getlist
    var items = ItemList.getElementsByTagName();
    // Convert to an array
    Array.from(items).forEach(function(item){
        var ItemName = item.firstChild.textContent;
        if(ItemName.toLowerCase(text) != -1){
                item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    });
}
