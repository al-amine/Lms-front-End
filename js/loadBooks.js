
let books = [
    {id: 0, Title:"Blue Storm", Author:"Jessica Daniels", Publisher:"Bloomberg"},
    {id: 1, Title:"Greek Gods", Author:"Jessica Daniels", Publisher:"Bloomberg"},
    {id: 2, Title:"The Mist", Author:"Stephen King", Publisher:"Donaldson"}
   ];

   if (window.localStorage.getItem('books') == null) {

    window.localStorage.setItem('books', JSON.stringify(books));
     
   }



    let listOfbooks = JSON.parse(window.localStorage.getItem('books'));

    var table = document.getElementById("tab1").getElementsByTagName('tbody')[0];

    if(listOfbooks != null) {

      for(book of listOfbooks) {
    


    var row = document.createElement("tr");

    //using innerHTML with template string

    row.innerHTML = ` <th scope="row">${book.id}</th>
                      <td>${book.Title}</td>
                      <td>${book.Author}</td>
                      <td>${book.Publisher}</td>
                      <td class="table_buttons">
                      <a class="edit" href="adminBooksEdit.html"
                      onclick="BookRef('${book.id}', '${book.Title}', '${book.Author}', '${book.Publisher}')"
                      title="Edit Book" data-toggle="tooltip">
                      <i class="material-icons">edit</i>
                      </a>
                      <a class="delete"  href="adminBooks.html" onclick="deleteBook('${book.Title}')" 
                      title="Delete Book" 
                      data-toggle="tooltip">
                      <i class="material-icons">delete</i>
                      </a>
                      </td>`;

    document.getElementsByTagName("tbody")[0].appendChild(row);


    }
}


    function BookRef  (id, title, author, publisher) {
        var refbook = {
          "id": id,
          "Title": title,
          "Author": author,
          "Publisher": publisher
        };
      
        localStorage.setItem("bookToUpdate", JSON.stringify(refbook));
      }



    //   function deleteFunction(id) {
    //     let listOfbooks = JSON.parse(window.localStorage.getItem('books'));
    //     for(book of listOfbooks) {
    //       if(book.id == id) {
    //         listOfbooks.splice(book,1);
    //         break;
    //       }
    //     }
    //     localStorage.setItem("books", JSON.stringify(listOfbooks));
    //   }


      function deleteBook(title) {

        let listOfbooks = JSON.parse(window.localStorage.getItem('books'));
      
        for(var i=0; i<listOfbooks.length; i++) {
          if(listOfbooks[i].Title === title) {
            listOfbooks.splice(i, 1);  //remove 1 item from books array which is target obj i
            break;
          }
        }
      
        localStorage.setItem("books", JSON.stringify(listOfbooks));
      }






   
