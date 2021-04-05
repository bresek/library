console.log('script connected')


let myLibrary = [];



//button to add book

const container = document.querySelector('.container')
const bookButton = document.querySelector("#addBook")
const form = document.querySelector("form")
const submitButton = document.querySelector('#submit')
const overlay = document.querySelector(".overlay")
const bookForm = document.querySelectorAll('input')


//displays input form
bookButton.addEventListener("click", function(){
  overlay.style.display = "flex"
})

//submit button
submitButton.addEventListener('click', function(){
  console.log("submited!")
  console.log(bookForm)
  const test= new Book(bookForm[0].value, bookForm[1].value,bookForm[2].value,bookForm[3].value)
  console.log(test)
  addBookToLibrary(test)
  displayBooks()
  overlay.style.display = "none"


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
const harryPotter = new Book("Harry Potter", "J.K Rowling", '299', true);
addBookToLibrary(harryPotter);
const harryPotter2 = new Book("Harry Potter 2", "J.K Rowling", '351', false)
addBookToLibrary(harryPotter2);
const harryPotter3 = new Book("Harry Potter 3", "J.K Rowling", '483', false)
addBookToLibrary(harryPotter3);

displayBooks()
// Display my library
function displayBooks() {
  container.innerHTML = ''
  for (let i = 0; i < myLibrary.length; i++){
    const div = document.createElement('div')
    div.classList.add('book')
    div.setAttribute("data-index", i)
    div.innerHTML = "<ul>" +  "<li>" + myLibrary[i].title + "</li>" + "<li>" + myLibrary[i].author + "</li>" +"<li>" + myLibrary[i].pages +" pages"+ "</li>" + "<li>" + myLibrary[i].read + "</li>" +  "</ul>" + '<button type="button" id="remove">Remove</button>'
    container.appendChild(div)
  }

}

// Remove button 

  container.addEventListener('click', function(event){
    console.log(event.target.id)
    if (event.target.id === "remove"){
       console.log('remove clicked')
          console.log(event.target.parentElement.getAttribute("data-index"))
          const removedBookIndex = event.target.parentElement.getAttribute("data-index")
          myLibrary.splice(removedBookIndex,1)
          displayBooks()

    }
  })