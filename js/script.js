let formBookDiv = document.getElementById('formBookDiv')
let taskContainer = document.querySelector('.taskContainer')
let addBook= document.getElementById("addBook")
let form= document.getElementById("form")
let submitBtn= document.getElementById("submit")
let inputTitle= document.getElementById("title")
let inputAuthor= document.getElementById("author")
let inputPages= document.getElementById("pages")
let isRead= document.getElementById("isRead")
let header= document.getElementById("header")
let mode= document.getElementById("mode")
let icon= document.getElementById("icon")

mode.addEventListener('click', ()=>{
    document.body.classList.toggle('darkmode')
    header.classList.toggle('darkmode')
    icon.classList.toggle("fa-moon")
    icon.classList.toggle("fa-sun")
})

class Book {
    constructor(title, author, pages, status) {
        this.title = title
        this.author = author
        this.pages = pages
        this.status =status
        this.id = Date.now()
    }
    
    addBookToLibrary() {
        myLibrary.push(this)
        displayBookOfLibrary()
        
    }
    
    removeBookToLibrary(){

        
    }

    
    
}


const myLibrary = [];

function displayBookOfLibrary(){
    taskContainer.innerHTML=""
    myLibrary.forEach(book =>{
        createBook(book.title, book.author, book.pages, book.status, book.id)
    })

}

formBookDiv.addEventListener('click', (e)=>{
    if (e.target.classList=="formBookDiv hide") {
        formBookDiv.classList.toggle('hide')
        form.classList.toggle('hide')
        
    }
})

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    let bookTitle = inputTitle.value
    let bookAuthor = inputAuthor.value
    let bookPages = inputPages.value
    let bookIsRead = "not read"
    if (isRead.checked==true) {
        bookIsRead = "read"
    }

    if (bookTitle !='' && bookAuthor !='' && bookPages !="") {
        if (bookPages >0 ) {
            let book = new Book(bookTitle, bookAuthor, bookPages, bookIsRead)
            book.addBookToLibrary()
            
        }
    }



    formBookDiv.classList.toggle('hide')
    form.classList.toggle('hide')

    clean()
})


addBook.addEventListener('click', ()=>{
    clean()
    formBookDiv.classList.toggle('hide')
    form.classList.toggle('hide')
})


function clean() {
    inputTitle.value = ''
    inputAuthor.value = ''
    inputPages.value = ''
    isRead.checked = false

}

function createBook(titleBook, authorBook, pagesBook, statusBook, id) {
    let card = document.createElement('div')
    let contentTitle = document.createElement('p')
    let contentAuthor = document.createElement('p')
    let contentPages = document.createElement('p')
    let contentStatus = document.createElement('p')
    let contentRemove = document.createElement('p')

    card.classList = "card"
    contentTitle.classList = "same title"
    contentAuthor.classList = "same author"
    contentPages.classList = "same pages"

    if (statusBook==="read") {
        contentStatus.classList = "same status-ok"
    } else {
        contentStatus.classList = "same status-not-ok"
        
    }
    contentRemove.classList = "same remove"

    let txtTitle = document.createTextNode(titleBook)
    let txtAuthor = document.createTextNode(authorBook)
    let txtPages = document.createTextNode(pagesBook)
    let txtStatus = document.createTextNode(statusBook)
    let txtRemove = document.createTextNode("remove")

    
    contentTitle.appendChild(txtTitle)
    contentAuthor.appendChild(txtAuthor)
    contentPages.appendChild(txtPages)
    contentStatus.appendChild(txtStatus)
    contentRemove.appendChild(txtRemove)

    contentStatus.addEventListener('click',()=>{
        myLibrary.forEach((book,i) =>{
            if (book.id===id) {

                if (myLibrary[i].status !== 'read') {
                    myLibrary[i].status="read"
                }else{
                    myLibrary[i].status="not read"

                }
                
                
            }
            displayBookOfLibrary()
            
        })


    })

    contentRemove.addEventListener('click',()=>{
        myLibrary.forEach((book,i) =>{
            if (book.id===id) {
                console.log(i);
                myLibrary.splice(i, 1)
                
            }
            displayBookOfLibrary()
            
        })


    })

    card.appendChild(contentTitle)
    card.appendChild(contentAuthor)
    card.appendChild(contentPages)
    card.appendChild(contentStatus)
    card.appendChild(contentRemove)

    taskContainer.appendChild(card)
}

window.addEventListener('keydown', (e)=>{
    if (e.key=='Escape') {
        formBookDiv.classList.remove('hide')
        form.classList.remove('hide')
        clean()
    }
})

