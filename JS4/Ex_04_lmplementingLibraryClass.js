console.log('Implementing Liberary Class');

/*
create a class libreray and implement the following:
- constructor must take the book list as an argument
- getBookList()
- issueBook(bookname, user)
- returnUser(bookname)
*/

class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedbooks = {};
    }
    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }
    issueBook(bookname, user) {
        if (
            this.issuedbooks[bookname] ==undefined) {
            this.issuedbooks.push[bookname] = user;
        } else {
            console.log('This book is already issued!');
        }
    }
    returnBook() {
        delete this.issuedbooks[bookname];

    }
}