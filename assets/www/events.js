$(function(){
	
	//touch OR tap
	$("#test").bind('tap',function(event, ui){
        $("#eventType p").replaceWith("<p align='center'>Event Triggered: Tap</p>");
	})
	
	//taphold
	$("#test").bind('taphold',function(event, ui){
        $("#eventType p").replaceWith("<p align='center'>Event Triggered: Tap Hold</p>");
	})
	
	// Simple Swipe
	$("#test").bind('swipe',function(event, ui){
        $("#eventType p").replaceWith("<p align='center'>Event Triggered: Swipe</p>");
	})
	
	//Swipe Left
	$("#test").bind('swipeleft',function(event, ui){
        $("#eventType p").replaceWith("<p align='center'>Event Triggered: Swipe Left</p>");
	})
	
	//Swipe Right
	$("#test").bind('swiperight',function(event, ui){
        $("#eventType p").replaceWith("<p align='center'>Event Triggered: Swipe Right</p>");
	})
	
})
