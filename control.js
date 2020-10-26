var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('p');
para.style.color = "red";
 
form.onsubmit = function(e) {

   if  (!/\w+\@\w+/.test(fname) ) {
      e.preventDefault();
      para.textContent = 'Falta @';
   
    
   }
  
   if (fname.value === '' || lname.value === '') {
      e.preventDefault();
      para.textContent = 'Completa todos los campos';
     }

  
  
}