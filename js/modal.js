var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
// img 2
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}     
 // img 3
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
      // img 4
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}     
 // img 5
var img5 = document.getElementById("myImg5");
var modalImg5 = document.getElementById("img05");
img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}      
// img 7
var img6 = document.getElementById("myImg6");
var modalImg6 = document.getElementById("img06");
img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}     


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}