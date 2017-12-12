$(document).ready(function () {
      $('.parallax').parallax();
      $(".button-collapse").sideNav();
});

var images = ['assets/images/cat_s.jpg', 'assets/images/dog_stare.jpg', 'assets/images/cat_s2.jpg', 'assets/images/dog.png'],
index=0,
maxImages= images.length - 1;
var timer= setInterval(function(){
	var currentImage= images[index];
	index= (index == maxImages) ? 0 : ++index;
	$('#banner').delay(2000).fadeOut(2000, function(){
		$('#banner').attr("src", currentImage);
		$('#banner').fadeIn(3000);
	});
}, 3000);