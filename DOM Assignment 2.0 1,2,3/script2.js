//to hide Hire ME from the nav > ul

let hideme = document.querySelector("nav > ul > li:nth-child(4)");
hideme.style.display = "none";

//to update input text with "Search My Project"

let searchBox = document.querySelector(".search-field > input");
searchBox.placeholder = "Search My Project";