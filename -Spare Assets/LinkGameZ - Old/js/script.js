/*
••••••••••••••••••••••••

Powered by Type & Grids™
www.typeandgrids.com

••••••••••••••••••••••••
*/

jQuery.easing.def = "easeOutQuad";

$(document).ready(function()
{
	
	// Make enlarge buttons inactive if no onClick event
	$(".enlargeButton").each(function() {
        if ( $(this).attr("onClick") == undefined )  {
            $(this).addClass("projectNavInactive");
        };
    });
	
	// For fluid video embedding
	$(".video").fitVids();
	
	// Hide project info
	$(".projectInfo").css("display", "none");
	// Don't hide video info
	$(".videoInfo").css("display", "inline");
	
	// Move projects to second column
	$(".project:odd").appendTo("#col2");
		
	// Project thumbnail hover
	$(".projectThumbnail").on("mouseenter", function(e)
	{
		$(this).children(".projectThumbnailHover").fadeIn(300);
		
		$(this).children(".projectThumbnailHover").find("h5").css("display", "block");
		$(this).children(".projectThumbnailHover").find("h5").css("opacity", "0");
		$(this).children(".projectThumbnailHover").find("h5").delay(200).animate({left: '30', opacity: 1}, 200);
		
		$(this).children(".projectThumbnailHover").find("h6").css("display", "block");
		$(this).children(".projectThumbnailHover").find("h6").css("opacity", "0");
		$(this).children(".projectThumbnailHover").find("h6").delay(350).animate({left: '30', opacity: 1}, 200);
	})
	
	$(".projectThumbnail").on("mouseleave", function(e)
	{
		$(this).children(".projectThumbnailHover").fadeOut(200);
		$(this).children(".projectThumbnailHover").find("h5").animate({left: '0', opacity: 0}, 0);
		$(this).children(".projectThumbnailHover").find("h6").animate({left: '0', opacity: 0}, 0);
	})
	
	// Hide hover effect on touch devices
	if (Modernizr.touch) {
		$(".projectThumbnailHover").css("display", "none");
		$(".projectThumbnailHover").css("visibility", "hidden");
		$(".projectThumbnail").unbind("mouseenter");
		$(".projectThumbnail").unbind("mouseleave");	
	}
	
	// Page navigation
	var isArtworkCurrentPage = false;
	var isGamesCurrentPage = false;
	var isAboutCurrentPage = true;
	
	
	$("#logoDetailView").click(function()
	{
		window.location = "../../index.html";
	});
	
	$("#artworkPage").click(function()
		{
			if(!isArtworkCurrentPage)
			{
				isArtworkCurrentPage = true;
				isAboutCurrentPage = false;
				isGamesCurrentPage = false;
				$("#artworkPage").attr("class", "currentPage");
				$("#aboutPage, #gamesPage").removeClass("currentPage");
				
				$("#about, #games").fadeOut(0, function()
				{
					$("#artwork").fadeIn(500);
				});
			}
		});
	
	$("#aboutPage, #logo").click(function()
		{
			if(!isAboutCurrentPage)
			{
				isAboutCurrentPage = true;
				isArtworkCurrentPage = false;
				isGamesCurrentPage = false;
				$("#aboutPage").attr("class", "currentPage");
				$("#artworkPage, #gamesPage").removeClass("currentPage");
				
				$("#artwork, #games").fadeOut(0, function()
				{
					$("#about").fadeIn(500);
				});
			}
		});

	$("#gamesPage").click(function()
		{
			if(!isGamesCurrentPage)
			{
				isArtworkCurrentPage = false;
				isAboutCurrentPage = false;
				isGamesCurrentPage = true;
				$("#gamesPage").attr("class", "currentPage");
				$("#aboutPage, #artworkPage").removeClass("currentPage");
				
				$("#about, #artwork").fadeOut(0, function()
				{
					$("#games").fadeIn(500);
				});
			}
		});
	
	// Make about page current page
	$("#aboutPage").attr("class", "currentPage");
	
	// Hide other pages
	$("#artwork").fadeOut(0);
	$("#games").fadeOut(0);
	
	// For site fade site in
	$(".container").css("display", "none");
	
});

// Read More tag for longer text
$(function(){

    $('a.read_more').click(function(event){

        event.preventDefault(); 
        $(this).parents('.read_more').find('.more_text').show();

    });

});

// Remove site preloader after site is loaded
$(window).load(function() {
	$('#sitePreloader').delay(200).fadeOut(500, function() {
		$(this).remove();
	});
	
	// Fade site in
	$(".container").delay(700).fadeIn(500);
});