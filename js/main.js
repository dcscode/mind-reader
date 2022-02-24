//get all the elements


//current page
//certain elements are hidden depending on which page (1-6)
const gamePage = document.getElementById("game-page");

//instructions, larger text on top; present on every page
const instructions = document.getElementById("instructions");


//div for scroll section on page 5
const scrollSection = document.getElementById("scroll-section");
//div for next/reveal button and under button message
//unhidden on pages 2-5
const buttonGroup = document.getElementById("button-group");

//hidden on page 1
//next on pages 2-4
//reveal on page 5
//hidden on page 6
const nextButton = document.getElementById("next-button");

//smaller message under next button
//present 2-6
const underButtonMessage = document.getElementById("under-button");

//go on start page
//go becomes go back on pages 2-6
//on page 6, refresh resets the game
const goOrRefreshButton = document.getElementById("go-or-refresh");




goOrRefreshButton.addEventListener("click", //refresh or go function
);




function startGame() { //start game when you click go

}

