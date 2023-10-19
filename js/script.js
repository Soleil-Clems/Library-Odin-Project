class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }
    
    addBookToLibrary() {
        myLibrary.push(this)
        
    }

    removeBookToLibrary(){
        console.log();
    }

}

const myLibrary = [];

let book = new Book("Geofrey is alive", "Gunther Further", 233)
book.addBookToLibrary()

book = new Book("Geo is alive", "Gunther Hammer", 112)
book.addBookToLibrary()

console.log(myLibrary);

