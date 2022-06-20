console.log("Classes and Inheritance with Examples");
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class library {
    constructor(bookList) {
        this.bookList = bookList;
    }
    getBookList() {
        return this.bookList;
    }
    issueBook(bookname, user) {
        this.bookList.push(bookname);
        return this.bookList;
    }
    returnBook(bookname) {
        this.bookList.pop(bookname);
        return this.bookList;
    }

}
let library1 = new library(["HTML", "CSS", "JavaScript", "React", "NodeJS","ExpressJS","Python","Flask"]);
// console.log(library1);
// console.log(library1.getBookList());
console.log(library1.issueBook("JavaScript", "Zeeshan"));
// console.log(library1.returnBook("JavaScript"));
// Show the issue book
console.log(library1.issueBook("React", "Zeeshan"));