
function authFunction() {

    var username_1 = window.localStorage.setItem('username_1', 'chris');
    var password_1 = window.localStorage.setItem('password_1', '123');

    var username_2 = window.localStorage.setItem('username_2', 'al');
    var password_2 = window.localStorage.setItem('password_2', '1234');


    var inputUsername =  document.getElementById("username").value;
    var inputPassword =  document.getElementById("password").value;
    
  
    if (inputUsername =='chris' &&  inputPassword == '123')  {
      alert("welcome Chris");
      return true;
    } 
    if (inputPassword =='al' &&  inputPassword == '1234') {
      alert("Welcome Al");
      return true;
    }
  else{

    //...
    alert("either the  username  or  password might be worng ! try again.");
    return false;
  }

  
    
  
  }
  
  
  
  