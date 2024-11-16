const myLibrary = []

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return this.title + " by " + this.author + " has " + this.pages + " pages and is " + this.read;
    };
}

function addBook(book) {
    myLibrary.push(book);
}
document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.getElementById("dialog");
    const dialogBtn = document.getElementById("dialogBtn");
    const closeBtn = document.getElementById("closeBtn");

    // Open dialog when the "Add a Book" button is clicked
    dialogBtn.addEventListener("click", () => {
        dialog.showModal();
    });

    // Close dialog when the "Close" button is clicked
    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
});