$(document).ready(function(){
	
	$(".skin1" ).click(function(){
		$("#skins" ).attr("href", "css/skins/skin1.css" );
		return false;
	});
	
		
	$(".skin2" ).click(function(){
		$("#skins" ).attr("href", "css/skins/skin2.css" );
		return false;
	});
	
	$(".skin3" ).click(function(){
		$("#skins" ).attr("href", "css/skins/skin3.css" );
		return false;
	});
	
	$(".skin4" ).click(function(){
		$("#skins" ).attr("href", "css/skins/skin4.css" );
		return false;
	});
	

	$('.icon').click (function(event){
		event.preventDefault();
		if( $ (this).hasClass('inOut')  ){
			$('.demo-option').stop().animate({left:'0px'},500 );
		} else{
			$('.demo-option').stop().animate({left:'-200px'},500 );
		} 
		$(this).toggleClass('inOut');
		return false;

	}  );

	
} );
