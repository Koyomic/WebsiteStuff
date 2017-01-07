jQuery.easing.def = "easeOutQuad";

$(document).ready(function()
{

	// Header Sizing
	$(function(){
	 	$('#header').data('size','big');
	});

	$(window).scroll(function(){
	  if($(document).scrollTop() > 0)
	{
	    if($('#header').data('size') == 'big')
	    {
	        $('#header').data('size','small');
	        $('#header').stop().animate({
	            height:'50px'
	        },200);
	    }
	}
	else
	  {
	    if($('#header').data('size') == 'small')
	      {
	        $('#header').data('size','big');
	        $('#header').stop().animate({
	            height:'80px'
	        },200);
	      }  
	  }
	});
			
	// Project thumbnail hover
	$(".projectWrap").on("mouseenter", function(e)
	{
		$(this).children(".projectText").fadeIn(300);
		
		$(this).children(".projectText").find("h5").css("display", "block");
		$(this).children(".projectText").find("h5").css("opacity", "0");
		$(this).children(".projectText").find("h5").delay(200).animate({left: '30', opacity: 1}, 200);
		
		$(this).children(".projectText").find("h6").css("display", "block");
		$(this).children(".projectText").find("h6").css("opacity", "0");
		$(this).children(".projectText").find("h6").delay(350).animate({left: '30', opacity: 1}, 200);
	})
	
	$(".projectWrap").on("mouseleave", function(e)
	{
		$(this).children(".projectText").fadeOut(200);
		$(this).children(".projectText").find("h5").animate({left: '0', opacity: 0}, 0);
		$(this).children(".projectText").find("h6").animate({left: '0', opacity: 0}, 0);
	})
	
	// Page navigation
	var isAboutCurrentPage = true;
	var isArtworkCurrentPage = false;
	var isGamesCurrentPage = false;
	var is3dCurrentPage = false;
	
	$("#aboutButton, #logo").click(function()
		{
			if(!isAboutCurrentPage)
			{
				isAboutCurrentPage = true;
				isArtworkCurrentPage = false;
				isGamesCurrentPage = false;
				is3dCurrentPage = false;
				$("#aboutButton").attr("class", "currentPage");
				$("#artButton, #gamesButton, #3dButton").removeClass("currentPage");
				
				$("#ArtworkPage, #GamesPage, #BlenderPage").fadeOut(0, function()
				{
					$("#AboutPage").fadeIn(500);
				});
			}
		});

	$("#artButton").click(function()
		{
			if(!isArtworkCurrentPage)
			{
				isAboutCurrentPage = false;
				isArtworkCurrentPage = true;
				isGamesCurrentPage = false;
				is3dCurrentPage = false;
				$("#artButton").attr("class", "currentPage");
				$("#aboutButton, #gamesButton, #3dButton").removeClass("currentPage");
				
				$("#AboutPage, #GamesPage, #BlenderPage").fadeOut(0, function()
				{
					$("#ArtworkPage").fadeIn(500);
				});
			}
		});	

	$("#gamesButton").click(function()
		{
			if(!isGamesCurrentPage)
			{
				isAboutCurrentPage = false;
				isArtworkCurrentPage = false;
				isGamesCurrentPage = true;
				is3dCurrentPage = false;
				$("#gamesButton").attr("class", "currentPage");
				$("#aboutButton, #artButton, #3dButton").removeClass("currentPage");
				
				$("#AboutPage, #ArtworkPage, #BlenderPage").fadeOut(0, function()
				{
					$("#GamesPage").fadeIn(500);
				});
			}
		});

	$("#3dButton").click(function()
		{
			if(!is3dCurrentPage)
			{
				isAboutCurrentPage = false;
				isArtworkCurrentPage = false;
				isGamesCurrentPage = false;
				is3dCurrentPage = true;
				$("#3dButton").attr("class", "currentPage");
				$("#aboutButton, #artButton, #gamesButton").removeClass("currentPage");
				
				$("#AboutPage, #ArtworkPage, #GamesPage").fadeOut(0, function()
				{
					$("#BlenderPage").fadeIn(500);
				});
			}
		});	

	// Art navigation ==============================================================================================================================
	$("#ArtReturn").click(function()
		{			
			$("#ArtProjectReturn, #ArtProject1, #ArtProject2, #ArtProject3, #ArtProject4, #ArtProject5").fadeOut(0, function()
			{	
				$("#ArtThumbnailsWrap").fadeIn(500);
			});			
		});

	$("#ArtProject1Click").click(function()
		{
			$("#ArtThumbnailsWrap").fadeOut(0, function()
			{
				$("#ArtProjectReturn, #ArtProject1").fadeIn(500);
				var retPosition = $('#ArtReturn').offset();
				$('html, body').animate({scrollTop: retPosition.top - 60}, "slow");
			});
		});	

	$("#ArtProject2Click").click(function()
		{
			$("#ArtThumbnailsWrap").fadeOut(0, function()
			{
				$("#ArtProjectReturn, #ArtProject2").fadeIn(500);
				var retPosition = $('#ArtReturn').offset();
				$('html, body').animate({scrollTop: retPosition.top - 60}, "slow");
			});
		});

	$("#ArtProject3Click").click(function()
		{
			$("#ArtThumbnailsWrap").fadeOut(0, function()
			{
				$("#ArtProjectReturn, #ArtProject3").fadeIn(500);
				var retPosition = $('#ArtReturn').offset();
				$('html, body').animate({scrollTop: retPosition.top - 60}, "slow");
			});
		});

	$("#ArtProject4Click").click(function()
		{
			$("#ArtThumbnailsWrap").fadeOut(0, function()
			{
				$("#ArtProjectReturn, #ArtProject4").fadeIn(500);
				var retPosition = $('#ArtReturn').offset();
				$('html, body').animate({scrollTop: retPosition.top - 60}, "slow");
			});
		});

	$("#ArtProject5Click").click(function()
		{
			$("#ArtThumbnailsWrap").fadeOut(0, function()
			{
				$("#ArtProjectReturn, #ArtProject5").fadeIn(500);
				var retPosition = $('#ArtReturn').offset();
				$('html, body').animate({scrollTop: retPosition.top - 60}, "slow");
			});
		});

	// Contact open window ==============================================================================================================================
	$("#AboutReturn").click(function()
		{			
			$("#ContactTab").fadeOut(0, function()
			{
				$("#IntroductionTab").fadeIn(200);
			});			
		});

	$("#ContactOpen").click(function()
		{
			$("#IntroductionTab").fadeOut(0, function()
			{
				$("#ContactTab").fadeIn(200);
			});
		});		


	// Make about page current page
	$("#aboutButton").attr("class", "currentPage");

	// Hide other pages
	$("#ArtworkPage").fadeOut(0);
	$("#GamesPage").fadeOut(0);
	$("#BlenderPage").fadeOut(0);
	
});

// Remove site preloader after site is loaded
/*
$(window).load(function() {
	$('#sitePreloader').delay(200).fadeOut(500, function() {
		$(this).remove();
	});
	
	// Fade site in
	$("body").delay(700).fadeIn(500);
}); */