
// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

var header = document.querySelector(".article__header")
header.textContent = "Welcome to the Dog Blog"



// Use JavaScript to obtain a reference to all article__header elements 
// and change their classList property value to article__header__important.

var classChange = document.querySelectorAll(".article__header")

for (i = 0; i < classChange.length; i++) {
    classChange[i].classList.remove("article__header")
    classChange[i].classList.add("article__header__important")
    

}




// Obtain a reference the element with a class of dashed and remove it.

var removeDashed = document.querySelector(".dashed")
removeDashed.parentNode.removeChild(removeDashed);






// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
var addGoldenrod = document.querySelector(".article__footer")
addGoldenrod.classList.add("goldenrod")