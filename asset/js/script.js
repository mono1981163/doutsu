// Hide fixed header
var headerBlack = document.getElementById('header-black');
headerBlack.style.visibility = 'hidden';
// Hide toMenu button
var toMenu = document.getElementById('toMenu');
toMenu.style.visibility = 'hidden';
// Hide toTop button
var toTop = document.getElementById('toTop');
toTop.style.visibility = 'hidden';

// Show or hide fixed header on scroll
window.addEventListener('scroll', function() {
	var element = document.querySelector('#sec00');
	var position = element.getBoundingClientRect();
	if(position.bottom < 0) {
		headerBlack.style.visibility = 'visible';
		headerBlack.style.opacity = '1';
		toMenu.style.visibility = 'visible';
		toMenu.style.opacity = '1';
	} else {
    headerBlack.style.visibility = 'hidden';
		headerBlack.style.opacity = '0';
		toMenu.style.visibility = 'hidden';
		toMenu.style.opacity = '0';
  }
});

// toTop button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.visibility = "visible";
    toTop.style.opacity = "1";
  } else {
    toTop.style.visibility = "hidden";
    toTop.style.opacity = "0";
  }
}