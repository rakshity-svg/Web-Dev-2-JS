const headingElement = document.getElementById('myHeading');

console.log(headingElement);

headingElement.textContent="New Heading Text";
headingElement.style.color="blue";
headingElement.style.backgroundColor="yellow";

// Select the first <p> element inside the #content div using querySelector
const paragraph = document.querySelector("#content p");

// Change the text content of the selected paragraph
paragraph.textContent = "This paragraph has been updated using querySelector.";

// Change the style of the selected paragraph
paragraph.style.color = "blue";

// Select and modify the <h1> element inside the #content div
const heading = document.querySelector("#content h1");
heading.textContent = "Hello, DOM!";

// You can also select elements by tag name
const title = document.querySelector("title");
title.textContent = "Updated Title";

