console.log('script connected')


let myLibrary = [];



//button to add book

const container = document.querySelector('.container')
const bookButton = document.querySelector("#addBook")
const form = document.querySelector("form")
const submitButton = document.querySelector('#submit')
const overlay = document.querySelector(".overlay")

//displays input form
bookButton.addEventListener("click", function(){
  overlay.style.display = "flex"

})

submitButton.addEventListener('click', function(){
  console.log("submited!")
  const form = document.querySelector('form')
  console.log(form.innerHTML)
})



//book constructor function
function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


// //prototype
// Book.prototype.info = function(){
//     let readStatus = ''
//     if (this.read === true){
//         this.readStatus = 'read'
//     }else{
//         this.readStatus = 'not read yet'
//     }
//     return (this.title + " by " + this.author+", "+ this.pages + ", "+this.readStatus)
// }

//adds books to array
function addBookToLibrary(book){
  myLibrary.push(book)
}


//temporary book for desiign
const harryPotter = new Book("Harry Potter", "J.K Rowling", '299 pages', true);
addBookToLibrary(harryPotter);
const harryPotter2 = new Book("Harry Potter 2", "J.K Rowling", '351 pages', false)
addBookToLibrary(harryPotter2);


// Display my library
for (let i = 0; i < myLibrary.length; i++){
  const div = document.createElement('div')
  div.classList.add('book')
  div.innerHTML = "<ul>" + "<li>" + myLibrary[i].title + "</li>" + "<li>" + myLibrary[i].author + "</li>" +"<li>" + myLibrary[i].pages + "</li>" + "<li>" + myLibrary[i].read + "</li>" +  "</ul>"
  container.appendChild(div)
}