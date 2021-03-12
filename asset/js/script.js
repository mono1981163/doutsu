// Hide fixed header
var headerBlack = document.getElementById('header-black');
headerBlack.style.visibility = 'hidden';

// Show or hide fixed header on scroll
window.addEventListener('scroll', function() {
	var element = document.querySelector('#sec00');
	var position = element.getBoundingClientRect();
	if(position.bottom < 0) {
		headerBlack.style.visibility = 'visible';
	} else {
    headerBlack.style.visibility = 'hidden';
  }
});