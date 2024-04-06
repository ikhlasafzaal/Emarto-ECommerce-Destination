const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});





function signin(){
  var text=document.getElementById('text').value;
  var password=document.getElementById('password').value;
  



  sessionStorage.setItem('text',text);
  sessionStorage.getItem('text');

  sessionStorage.setItem('password',password);
  sessionStorage.getItem('password');


}

function signup(){
  var textt=document.getElementById('textt').value;
  var email=document.getElementById('email').value;
  var passwordd=document.getElementById('passwordd').value;
  



  sessionStorage.setItem('textt',textt);
  sessionStorage.getItem('textt');

  sessionStorage.setItem('email',email);
  sessionStorage.getItem('email');

  sessionStorage.setItem('passwordd',passwordd);
  sessionStorage.getItem('passwordd');


}
