document.addEventListener('DOMContentLoaded', () => {
  const startMusicButton = document.getElementById('more_hint');
  const clicker = document.getElementById('clicker');
  startMusicButton.style.display = "none";

  // if and only if the clicker element is clicked 6 times then only display element : startMusicButton on the screen else not.
  clicker.addEventListener('click', () => {
      //click counter:
      clicker.clickCount = clicker.clickCount ? clicker.clickCount + 1 : 1;
      if (clicker.clickCount === 6) {
          startMusicButton.style.display = "inline";
      }
  });

    startMusicButton.addEventListener('click', () => {
      //click counter:
          alert("The trail one is the best one!!!");
  });
  
});

function validateForm(){
  const username = document.forms["form1"]["username"].value;
  const password = document.forms["form1"]["password"].value;

  // validate login credentials:
  if(username == "Arka Nandi" && password == "ancreations"){
    open("ancreations.html");
    close();
    alert("Welcome");
  }
  else{
    alert("Invalid login credentials");
  }
}