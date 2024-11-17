const myLibrary = [];
const bookList = document.getElementById("bookList");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(book) {
    myLibrary.push(book);
    console.log(myLibrary); // Debugging: Check if the book is added
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded"); // Debugging: Check if DOM is loaded
    const dialog = document.getElementById("dialog");
    const dialogBtn = document.getElementById("dialogBtn");
    const closeBtn = document.getElementById("closeBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    dialogBtn.addEventListener("click", () => {
        dialog.showModal();
    });

    closeBtn.addEventListener("click", () => {
        event.preventDefault();
        const form = document.getElementById("form");
        const title = document.getElementById("title");
        const author = document.getElementById("author");
        const pages = document.getElementById("pages");
        const read = document.getElementById("read");

        if (form.checkValidity()) {
            const book = new Book(title.value, author.value, pages.value, read.checked);
            addBook(book);
            dialog.close();
            renderBooks();
        } else {
            alert("Please fill out all required fields.");
        }
    });

    cancelBtn.addEventListener("click", () => {
        dialog.close();
    });
});

function renderBooks() {
    console.log("Rendering books..."); // Debugging: Confirm renderBooks is called
    bookList.innerHTML = ""; // Clear the book list

    myLibrary.forEach((book, index) => {
        console.log("Adding book:", book.title); // Debugging: Confirm each book
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";

        const title = document.createElement("h2");
        title.innerText = book.title;

        const author = document.createElement("p");
        author.innerText = `Author: ${book.author}`;

        const pages = document.createElement("p");
        pages.innerText = `Pages: ${book.pages}`;

        const read = document.createElement("p");
        read.innerText = `Read: ${book.read ? "Yes" : "No"}`;

        const changeRead = document.createElement("button");
        changeRead.innerText = "Change Read";
        changeRead.className = "change-read-button";
        changeRead.setAttribute("data-index", index.toString());

        // Add click event listener to change the read status
        changeRead.addEventListener("click", (event) => {
            const bookIndex = event.target.getAttribute("data-index"); // Retrieve the index
             // Toggle the read status
            myLibrary[bookIndex].read = !myLibrary[bookIndex].read; // Update the read status
            renderBooks(); // Re-render the library
        });
        // Create the remove button
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.className = "remove-button";
        removeButton.setAttribute("data-index", index.toString());

        // Add click event listener to remove the book
        removeButton.addEventListener("click", (event) => {
            const bookIndex = event.target.getAttribute("data-index"); // Retrieve the index
            myLibrary.splice(bookIndex, 1); // Remove book from the array
            renderBooks(); // Re-render the library
        });

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(read);
        bookDiv.appendChild(removeButton);
        bookDiv.appendChild(changeRead);
        bookList.appendChild(bookDiv);
    });
}

