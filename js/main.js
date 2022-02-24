//get all the elements

const pages = ["page1", "page2", "page3", "page4", "page5", "page6"]; //index 0 - 5
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
//changes page, moves forward
const nextButton = document.getElementById("next-button");

//smaller message under next button
//present 2-6
const underButtonMessage = document.getElementById("under-button");

//go on start page
//go becomes go back on pages 2-6; returns to the previous page
//on page 6, refresh resets the game
const goOrRefreshButton = document.getElementById("go-or-refresh");




goOrRefreshButton.addEventListener("click", //startGame function
);

goOrRefreshButton.addEventListener("click", //goBack function
)

goOrRefreshButton.addEventListener("click", //reset function
)

goOrRefreshButton.addEventListener("click", //randomize function; after reset/part of reset
)

nextButton.addEventListener("click", //move forward; next function
)

nextButton.addEventListener("click", //updatePageContent function
)






function startGame() { //start game when you click go
    //maybe bundle into INIT

}

function next() { //next page/reveal; move forward

}

function goBack() { //return to the previous page

}

function reset() { //resets the game at the end, when go back on page 6 is clicked

}

function updatePage() { //update page content

} 

function randomize() { //randomize symbols every game, after reset is clicked

}



