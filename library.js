let myLibrary = [];

function Book(author, title, numOfPages, read, index) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.read = read;
    this.index = index++;
    //this is used to keep track with the arrangement of books.
}


var lengthOfArray;
function addBookToLibrary(author, title, numOfPages, read) {
    lengthOfArray = myLibrary.length;
    myLibrary[lengthOfArray] = new Book(author, title, numOfPages, read, lengthOfArray);
    display();
}

Book.prototype.makeItRead = function(){
    this.read = true;
    console.log("it is read");
}

var readButton;
function display(){
        var currentBook = myLibrary[lengthOfArray];

        var containerDiv = document.createElement("div");
        containerDiv.id = "bookContainer";
        var containerDiv2 = document.createElement("div");
        containerDiv2.id = "delete-btn-box";

        var deleteBtn = document.createElement("button");
        deleteBtn.id = "delete-btn";
        deleteBtn.textContent = "X";

        // var updateBtn = document.createElement("img");

        // updateBtn.src = "image.jpg";
        // updateBtn.alt = "Image"; 
        // updateBtn.width = 20;      
        // updateBtn.height = 20;

        deleteBtn.style.fontSize = "larger";
        containerDiv2.appendChild(deleteBtn);
        // containerDiv2.appendChild(updateBtn);

        var authorLabel = document.createElement("label");
        authorLabel.textContent = currentBook.author;
        authorLabel.style.fontSize = "larger";
        var titleLabel = document.createElement("label");
        titleLabel.textContent = currentBook.title;
        titleLabel.style.fontSize = "larger";
        var pageNumLabel = document.createElement("label");
        pageNumLabel.textContent = currentBook.numOfPages;
        pageNumLabel.style.fontSize = "larger";
        pageNumLabel.style.color = "black";

        readButton = document.createElement("button");
        if(currentBook.read == true){
            readButton.textContent = "Read";
            readButton.style.backgroundColor = "#34D399";
        }else{
            readButton.textContent = "Not Read";
            readButton.style.backgroundColor = "#FF4D4F";
        }
        readButton.style.width = "80%";
        readButton.id = "read-btn";

        containerDiv.appendChild(containerDiv2);
        containerDiv.appendChild(authorLabel);
        containerDiv.appendChild(titleLabel);
        containerDiv.appendChild(pageNumLabel);
        containerDiv.appendChild(readButton);

        var containerCard = document.getElementById("book-cards");
        containerCard.appendChild(containerDiv);
        readButton.onclick = function(){
            if(currentBook.read == true){
                readButton.textContent = "Not Read";
                readButton.style.backgroundColor = "#FF4D4F";
                this.makeItRead = false;
            }else{
                readButton.textContent = "Read";
                readButton.style.backgroundColor = "#34D399";
                this.makeItRead = true;
            }
        }
        deleteBtn.onclick = function(){
            containerCard.removeChild(containerDiv);
            containerCard.removeChild(containerDiv2);
            myLibrary[currentBook.index] = null;
        }
}

var input1;
var input2;
var input3;
var checkbox;

function generateElements() {
    var newHeading = document.createElement("h3");
    newHeading.textContent = "Add a New Book";
  
    input1 = document.createElement("input");
    input1.type = "text";
    input1.placeholder = "Author";
  
    input2 = document.createElement("input");
    input2.type = "text";
    input2.placeholder = "Title";
  
    input3 = document.createElement("input");
    input3.type = "number";
    input3.placeholder = "Number of pages";

    var header5 = document.createElement("h5");
    header5.textContent = "Have you read it?";
  
    checkbox = document.createElement("input");
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
    addButton.onclick = function() {
        var authorInput = input1.value;
        var titleInput = input2.value;
        var pageNumInput = input3.value;
        var readInput = handleCheckboxChange();
        addBookToLibrary(authorInput, titleInput, pageNumInput, readInput);
        container.removeChild(newHeading);
        container.removeChild(input1);
        container.removeChild(input2);
        container.removeChild(input3);
        container.removeChild(header5);
        container.removeChild(checkbox);
        container.removeChild(addButton);
     };
}

function handleCheckboxChange() {
    if (checkbox.checked) {
      return true;
    } else {
      return false;
    }
}