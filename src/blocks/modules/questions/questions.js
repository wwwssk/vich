var swiper = new Swiper(".questions__swiper", {

	navigation: {
		nextEl: ".questions__btn-slide-next, .back-slide__btn",
		prevEl: ".questions__btn-slide-prev",
	},
/* 	autoHeight: true,
 */});


$('.btn1').click(function(event) {
	$(this).addClass('active');
	$('.slide-container1').addClass('active');
});
$('.btn2').click(function(event) {
	$(this).addClass('active');
	$('.slide-container2').addClass('active');
});
$('.btn3').click(function(event) {
	$(this).addClass('active');
	$('.slide-container3').addClass('active');
});
$('.btn4').click(function(event) {
	$(this).addClass('active');
	$('.slide-container4').addClass('active');
});
$('.btn5').click(function(event) {
	$(this).addClass('active');
	$('.slide-container5').addClass('active');
});
$('.btn6').click(function(event) {
	$(this).addClass('active');
	$('.slide-container6').addClass('active');
});


