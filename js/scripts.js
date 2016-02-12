(function(d){
	"use strict";

	// Document objects
	var navIcon = d.getElementById("navIcon"),
	nav = d.getElementsByClassName("nav")[0],
	sectionToggles = d.querySelector(".expandable > .sectionHeader");

	// Document events
	navIcon.addEventListener("click", function(){
		nav.classList.toggle("show");
	});

	// Accordion Toggles
	sectionToggles.addEventListener("click", function(){
		this.parentElement.classList.toggle("expanded");
	});

	// Scroll
	d.addEventListener("scroll", function(){
		if(d.getElementsByClassName("show").length > 0){
			nav.classList.remove("show");
		}
	});
})(document);