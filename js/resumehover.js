$(document).ready(function(){
    $(".happy").hover(
	function(){$(".selfie").attr("src","../assets/hopeful.jpg");},
	function(){ $(".selfie").attr("src","../assets/selfie.jpg");});
});

