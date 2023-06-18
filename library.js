let myLibrary = [];

function Book(author, title, numOfPages, read, index) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.read = read;
    this.index = index;
    //this is used to keep track with the arrangement of books.
}

function addBookToLibrary(author, title, numOfPages, read) {
  var lengthOfArray = myLibrary.length;
  myLibrary[lengthOfArray] = new Book(author, title, numOfPages, read, lengthOfArray);
}

Book.prototype.makeItRead = function(){
    this.read = true;
    console.log("it is read");
}

function deleteBookFromLibrary(){

}

function updateBookInLibrary(){

}

function display(){
    for(var i = 0; i < myLibrary.length; i++){
        //printing the elements of the array.
        var currentBook = myLibrary[i];
        //we should print out on the screen each attribute of that object.
    }
}

function generateElements() {
    var newHeading = document.createElement("h3");
    newHeading.textContent = "Add a New Book";
  
    var input1 = document.createElement("input");
    input1.type = "text";
    input1.placeholder = "Author";
  
    var input2 = document.createElement("input");
    input2.type = "text";
    input2.placeholder = "Title";
  
    var input3 = document.createElement("input");
    input3.type = "number";
    input3.placeholder = "Number of pages";

    var header5 = document.createElement("h5");
    header5.textContent = "Have you read it?";
  
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginTop = "-20px";
    checkbox.style.height = "20px";
    checkbox.className = "my-checkbox";
  
    var addButton = document.createElement("button");
    addButton.textContent = "Save";
    addButton.style.marginBottom = "20px";
    addButton.style.fontSize = "large";
    addButton.style.width = "80%";
    addButton.style.marginTop = "10px";
    
    // Append the new elements to the container
    var container = document.getElementById("pop-up");
    container.appendChild(newHeading);
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(input3);
    container.appendChild(header5);
    container.appendChild(checkbox);
    container.appendChild(addButton);
}  

function handleCheckboxChange() {
    var checkbox = this; 
    
    if (checkbox.checked) {
      this.makeItRead;
    } else {
      this.read = false;
    }
}