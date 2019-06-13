// JavaScript Document
$(document).ready( function() {

	const $spans = $("span");
	const { length } = $spans;
	$spans.each(function(i) {
	  $(this).append("<img src='Images/With Out Logo/Insta Photo-" + (length - i) + ".JPG' />");
	});
});
