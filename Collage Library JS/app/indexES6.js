// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view
console.log("This Is ES6 version of Project");
class Book {
    constructor(name, auther, type) {
        this.name = name;
        this.auther = auther;
        this.type = type;
    }
}
class Display {
    add(book) {
        console.log("Add Book in UI");
       let tableBody = document.getElementById("tableBody");
        let uiString = `<tr> 
                    <td>${book.name}</td> 
                    <td>${book.auther}</td> 
                    <td>${book.type}</td> 
                    </tr>`;
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.auther.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Messge:</strong> ${displayMessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
    </div>`;
        setTimeout(() => {
            message.innerHTML = '';
        }, 5000);
}
}

// Add submit event listener to the form
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
    console.log("You have submitted the form");
    let name = document.getElementById("bookName").value;
    let auther = document.getElementById("auther").value;
    let type;

    let fication = document.getElementById('fication');
    let programming = document.getElementById('programming');
    let literature = document.getElementById('literature');
    if (fication.checked) {
        type = fication.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (literature.checked) {
        type = literature.value;
    }
    let book = new Book(name, auther, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}
