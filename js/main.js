//get all the elements

//certain elements are hidden depending on which page (1-6)
const gamePage = document.getElementById("game-page");

//instructions, larger text on top; present on every page
const instructionsDisplay = document.getElementById("instructions");

//div for scroll section on page 5
const scrollSectionDisplay = document.getElementById("scroll-section");

//div for next/reveal button and under button message
//unhidden on pages 2-5
const buttonGroupDisplay = document.getElementById("button-group");

//hidden on page 1
//next on pages 2-4
//reveal on page 5
//hidden on page 6
//changes page, moves forward
const nextButtonDisplay = document.getElementById("next-button");

//smaller message under next button
//present 2-6
const underButtonMessageDisplay = document.getElementById("under-button");

//go on start page
//go becomes go back on pages 2-6; returns to the previous page
//on page 6, refresh resets the game
const goOrRefreshButtonDisplay = document.getElementById("go-or-refresh");

//current page
const pagesObject = pagesJSONObject["pages"];
let currentPage = null;

window.onload = init();


 //startGame
/*

goOrRefreshButtonDisplay.addEventListener("click", //goBack function
);

goOrRefreshButtonDisplay.addEventListener("click", //reset function
);

goOrRefreshButtonDisplay.addEventListener("click", //randomize function; after reset/part of reset
);
*/

nextButtonDisplay.addEventListener("click", next() //move forward; next function
);

/*
nextButtonDisplay.addEventListener("click", updatePage() //updatePageContent function
);
*/


function init() { //initialize webpage
    //currentPage = pagesObject[0];
    goOrRefreshButtonDisplay.addEventListener("click", startGame());
}




function startGame() { //start game when you click go
    //maybe bundle into INIT
}

function next() { //next page/reveal; move forward
    currentPage = pagesObject[0];
    for (let i = 0; i <= pagesObject.length - 1; i++)
        if (pagesObject[i] = currentPage) {
            updatePage();
        }
        else {
            currentPage = pagesObject[i];
        }
    //move currentPage forward
    //increment the index in currentPage
    
}

function goBack() { //return to the previous page
    
}

function reset() { //resets the game at the end, when go back on page 6 is clicked

}

function updatePage() { //update page content
    instructionsDisplay.textContent = currentPage["instructions"];
    if (currentPage["scrollSection"] != null) {
        scrollSectionDisplay.textContent = currentPage["scrollSection"];
    }
    else {
        scrollSectionDisplay.style.visibility = "hidden";
    }
    if (currentPage["nextButton"] != null) {
        nextButtonDisplay.textContent = currentPage["nextButton"];
    }
    else {
        nextButtonDisplay.style.visibility = "hidden";
    }
    if (currentPage["underButtonMessage"] != null) {
        underButtonMessageDisplay.textContent = currentPage["underButtonMessage"];
    }
    else {
        underButtonMessageDisplay.style.visibility = "hidden";
    }
    goOrRefreshButtonDisplay.textContent = currentPage["goOrRefresh"];
   
}
function randomize() { //randomize symbols every game, after reset is clicked

}



