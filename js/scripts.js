
// Tweet display //

$(document).ready(function() {
	$(".tweet").tweet({
		username: "modernseinfeld",
		count: 3,
		loading_text: "loading tweets..."
	});
});


// flickr feed //
/*
$(document).ready(function() {
	$('div.flickr').flickrush({
		limit:6,
		id:'44499772@N06',
		random:true
	});
});
*/

$(document).ready(function() {
 $('div.flickr').flickrush({
	id: '44499772@N06',  // the ID of your flickr username
	limit: 6,            // the number of photos to display
	random: true         // randomly select photos to be displayed
 });
});


//Hook up the flexslider

$(document).ready(function() {
	$('.flexslider').flexslider({
		directionNav: false,
	});
});

// dropdown select by chris coyer //

$(document).ready(function() {
	
	//build dropdown
	$("<select />").appendTo(".navigation nav div");
	
	// Create default option Go to...
	$("<option />", {
		"selected"	: "selected",
		"value"		: "",
		"text"		: "Go to..."
	}).appendTo("nav select");
	
	// Populate dropdown with the first items
	$(".navigation nav li a").each(function(){
		var el = $(this);
		$("<option />", {
			"value"	: el.attr("href"),
			"text"	: el.text()
		}).appendTo("nav select");	
	});
	
	// make responsive menu work
	$("nav select").change(function(){
		window.location = $(this).find("option:selected").val();
	});

});