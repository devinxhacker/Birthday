

function validateForm(){
  const username = document.forms["form1"]["username"].value;
  const password = document.forms["form1"]["password"].value;

  // validate login credentials:
  if(username == "Arun Nandi" && password == "baba"){
    open("index3.html");
    close();
    alert("Welcome");
  }
  else{
    alert("Invalid login credentials");
  }
}