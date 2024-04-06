function signin(){
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var subject=document.getElementById('number').value;
  var number=document.getElementById('subject').value;
  var msg=document.getElementById('msg').value;
  



  sessionStorage.setItem('name',name);
  sessionStorage.getItem('name');

  sessionStorage.setItem('email',email);
  sessionStorage.getItem('email');


  sessionStorage.setItem('number',number);
  sessionStorage.getItem('number');


  sessionStorage.setItem('subject',subject);
  sessionStorage.getItem('subject');


  sessionStorage.setItem('msg',msg);
  sessionStorage.getItem('msg');



}






function ikhlas(){
  if(navigator.geolocation=true)
  {
      alert("Your browser supported Geolocation and API")
      navigator.geolocation.getCurrentPosition(getcoordinates,errorcallback)
  }
  else{
      alert("Your browser not support Geolocation and API")
  }
}
function getcoordinates(position){
  var lat=position.coords.latitude;
  var long=position.coords.longitude;
  alert("latitude"+lat+""+"longitude"+long)
}
function errorcallback(error){
  if(error.code=1){
      alert("permission-denied")
  }
  if(error.code=1){
      alert("position-unavailable")
  }
  if(error.code=1){
      alert("timeout")
  }
}

