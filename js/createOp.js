
function retrieveFunction() {

  var title = document.getElementById("title").value;
  window.localStorage.setItem('CreatedTitle', title);
  var author = document.getElementById("author").value;
  window.localStorage.setItem('CreatedAuthor', author);
  var publisher = document.getElementById("publisher").value;
  window.localStorage.setItem('CreatedPublisher', publisher);


  let listOfbooks = JSON.parse(window.localStorage.getItem('books'));

  let book = {id: listOfbooks.length+1, Title:title, Author:author, Publisher:publisher};

  listOfbooks.push(book);

  window.localStorage.setItem('books', JSON.stringify(listOfbooks));

  if (author.length > 35) {
    alert("The Author's the name should  preferably be less than 35 characters");
  } 
  if (publisher.length > 35) {
    alert("The Publisher's the name should  preferably be less than 35 characters");
  }

  if (title.length > 100) {
    alert("The Book's title should  preferably be less than 100 characters");
  }

  

}



