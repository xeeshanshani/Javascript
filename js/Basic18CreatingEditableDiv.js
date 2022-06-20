console.log('Tutorial 21 exercise 2 JavaScript');
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/
let div = document.createElement('div');
div.innerHTML = '<h1>This is a testing heading</h1>';
div.style.width = '200px';
div.style.height = '200px';
div.style.backgroundColor = 'blue';
div.style.margin = '10px';
div.style.padding = '10px';
div.style.border = '1px solid black';
addEventListener('click', function(e) {
    if (e.target.tagName === 'DIV') {
        e.target.contentEditable = true;
    }
}
);
document.body.appendChild(div); 

// store the data in local storage
addEventListener('blur', function(e) {
    if (e.target.tagName === 'DIV') {
        e.target.contentEditable = false;
        localStorage.setItem('note', e.target.innerHTML);
    }
}
);

