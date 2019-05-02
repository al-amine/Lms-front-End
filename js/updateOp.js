
function retrieveFunction() {

    var UpdatedTitle = document.getElementById("tit").value;
    var UpdatedAuthor = document.getElementById("auth").value;
    var UpdatedPublisher = document.getElementById("pub").value;


    let listOfbooks = JSON.parse(window.localStorage.getItem('books'));
    let savedbook = JSON.parse(window.localStorage.getItem('bookToUpdate'));

    if (UpdatedAuthor.length > 35) {
      alert("The Author's the name should  preferably be less than 35 characters");
    } 
    if (UpdatedPublisher.length > 35) {
      alert("The Publisher's the name should  preferably be less than 35 characters");
    }
  
    if (UpdatedTitle.length > 100) {
      alert("The Book's title should  preferably be less than 100 characters");
    }

    for(book of listOfbooks) {
      if (book.Title == savedbook.Title) {
        book.Title = UpdatedTitle;
        book.Author = UpdatedAuthor;
        book.Publisher = UpdatedPublisher;
      }
   }


window.localStorage.setItem('books', JSON.stringify(listOfbooks));
  
}