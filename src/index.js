import "./style.css";
import { createProjectElement } from "./utils/project";

const parentEl = document.querySelector(".second-page section");

createProjectElement(parentEl);
createProjectElement(parentEl);
createProjectElement(parentEl);
createProjectElement(parentEl);
createProjectElement(parentEl);
createProjectElement(parentEl);

function positionAbsoluteElement(scaleFactor) {
  const sibling = document.querySelector(".portrait > img");
  const absoluteElement = document.querySelector(".portrait > .myName");

  // Get the position of the sibling
  const siblingRect = sibling.getBoundingClientRect();

  // Set the absolute element's position based on the sibling
  absoluteElement.style.top = `${
    (siblingRect.top + window.scrollY) / scaleFactor + 250
  }px`; // 20px offset
  absoluteElement.style.left = `${
    (siblingRect.left + window.scrollX) / scaleFactor
  }px`; // 50px offset
}

// Function to check the media query and position the element
function checkMediaQuery() {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    positionAbsoluteElement(2);
  }
}

// Initial check
checkMediaQuery();

// // Optional: Recheck on resize
// window.addEventListener("resize", checkMediaQuery);
