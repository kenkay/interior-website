window.onscroll = function() {midScroll()};

function midScroll() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("mid_page_scroll").className = "slideUp";
  }
}

// var slideshows = document.querySelectorAll('[data-component="slideshow"]');
// slideshows.forEach(initSlideShow);

// function initSlideShow(slideshow) {

// 	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide3`);

// 	var index = 0, time = 3000;
// 	slides[index].classList.add('active');

// 	setInterval( () => {
// 		slides[index].classList.remove('active');
		
// 		index++;
// 		if (index === slides.length) index = 0;

// 		slides[index].classList.add('active');

// 	}, time);
// }

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("man-slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


var slideIndex_2 = 1;
showDivs2(slideIndex_2);

function plusDivs2(n) {
  showDivs2(slideIndex_2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("man-slides-2");
  if (n > x.length) {slideIndex_2 = 1}
  if (n < 1) {slideIndex_2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex_2-1].style.display = "block";  
}