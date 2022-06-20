console.log("Basic 21: Creating an Editable Div");
/* Create an editable div that has the following properties:
when the user clicks on the div, the div should turn into an input box.
when the user clicks outside of the input box, the div should turn back into a div.
*/
let editableDiv = document.createElement("div");

// Adding text to that created div
let value = localStorage.getItem('text');
let text;
if (value == null) {
    text = document.createTextNode("Click to edit");
}
else {
    text = document.createTextNode(value);
}
// Inserting text into the div
editableDiv.appendChild(text);
editableDiv.setAttribute("id", "elem");
editableDiv.setAttribute("class", "elem");
editableDiv.setAttribute('style', 'font-size:3rem; border:3px solid; width: 350px; height: 200px;');
localStorage.clear();

//access the main container
let container = document.querySelector(".container");
// Insert the div into the container
container.insertBefore(editableDiv, null)
    ;
// Add event listener to the divElem
editableDiv.addEventListener("click", function () {
    let lengthOfTextArea = document.getElementsByClassName('textarea').length;
    if (lengthOfTextArea == 0) {
        let html = elem.innerHTML;
        editableDiv.innerHTML = `<textarea class="textarea" rows="4" cols="50">${html}</textarea>`;
    }
    let textarea = document.getElementById('textarea');

    textarea.addEventListener('blur',function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem(
        'text', textarea.value); 

    })

}
);


