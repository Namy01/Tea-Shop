var sum = 0;
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
$(document).ready(function(){
  // Function to load new content
  function loadNewContent() {
      $.ajax({
          url: 'contact.html', // Path to the new content file
          type: 'GET',
          success: function(response) {
              $('#container').html(response); // Replace the content of #container
          },
          error: function(xhr, status, error) {
              console.error('Error loading content:', error);
          }
      });
  }

  // Call loadNewContent function when a certain event occurs (e.g., button click)
  $('#click').on('click', function() {
      loadNewContent();
  });
});
 


function calculate1(cost) {
  sum= sum + cost;
}

function calculate2(cost) {
  sum= sum + cost;
}

function calculate3(cost) {
  sum= sum + cost;
}

function calculate4(cost) {
  sum= sum + cost;
}


function calculate5(cost) {
  sum= sum + cost;
}


function calculate6(cost)
 {
sum= sum + cost;
}

function display() {
    
    alert("You have ordered a total amount of Rs " + sum); 
}
