let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let popup=document.getElementById("popup-count");
 
	setTimeout(function() {
		openPopup();
	}, 2000);
 

function openPopup() {
    console.log("come")
	 popup.style.display="block";
}
  
  // Close the popup
  function closePopup() {
	 
	popup.style.display = "none";
  }
 
  // Attach the close button click event listener
  var closeButton = document.getElementById("close-btn");
  var closeButton1 = document.getElementById("close-btn1");
  closeButton.addEventListener("click", closePopup);
  closeButton1.addEventListener("click", closePopup);