import "./style.css";
import { createProjectElement } from "./utils/project";
import sstaImg from "./assets/ssta.jpg";
import file_storage from "./assets/file_storage.jpg";
import legacy_lines from "./assets/legacy_lines.jpg";
import shopping_cart from "./assets/shopping_cart.jpg";
import members_only from "./assets/members_only.jpg";
import cv_app from "./assets/cv_app.jpg";

const parentEl = document.querySelector(".second-page section");

createProjectElement({
  parentEl,
  projectDeployUrl: "https://filestoragetauqirkhan.up.railway.app/",
  projectGithubUrl: "https://github.com/tauqirkhan/file_storage",
  projectImg: file_storage,
  name: "File Storage App",
  description:
    "A secure Express.js file storage app built with EJS, Prisma, and local upload handling. It provides authenticated endpoints for uploading, downloading, and managing files with structured routing and error handling.",
});
createProjectElement({
  parentEl,
  projectDeployUrl: "https://legacylinestauqirkhan.up.railway.app/",
  projectGithubUrl: "https://github.com/tauqirkhan/inventory_app",
  projectImg: legacy_lines,
  name: "Quotes App",
  description:
    "A streamlined quotes management web application built with Node.js, Express, and EJS. It features intuitive CRUD operations for quotes and author, structured routing/controllers, and dynamic views. Ideal for storing quotes with authors efficiently.",
});
createProjectElement({
  parentEl,
  projectDeployUrl: "https://ssta.daad.sa/",
  projectGithubUrl: "https://github.com/tauqirkhan/ssta-security-pulse",
  projectImg: sstaImg,
  name: "Saudi Security Training & Advancement Website",
  description:
    "A polished, responsive website built with React, Vite, and Tailwind CSS. Created for SSTA, a Riyadh-based company focused on improving security guard standards in support of Saudi Vision 2030. The site presents training programs, company information, and mission-driven content through a clean and modern interface.",
});

createProjectElement({
  parentEl,
  projectDeployUrl: "https://shopping-cart-nu-flax.vercel.app/shop",
  projectGithubUrl: "https://github.com/tauqirkhan/shopping_cart",
  projectImg: shopping_cart,
  name: "E-Commerce Store",
  description:
    "A full stack shopping cart application built with React and Vite on the frontend and Node.js/Express on the backend. It supports adding, updating, and removing items in the cart, shows live pricing and quantities, and integrates seamless state management and routing.",
});
createProjectElement({
  parentEl,
  projectDeployUrl: "https://membersonlytauqirkhan.up.railway.app/",
  projectGithubUrl: "https://github.com/tauqirkhan/members_only",
  projectImg: members_only,
  name: "Members Only App",
  description:
    "An Express.js web application that enables user authentication and gated content access. Built with Node.js, Express, MongoDB, and EJS, it offers secure sign-up/login functionality and a private forum where only registered members can post and view content.",
});
createProjectElement({
  parentEl,
  projectDeployUrl: "https://cv-app-tauqirkhan.netlify.app/",
  projectGithubUrl: "https://github.com/tauqirkhan/cv-app",
  projectImg: cv_app,
  name: "CV Making App",
  description:
    "A minimalist CV builder built with React and Vite. Features live preview editing of personal details, experience, education, and styled formatting, all in a fast, single-page app structure.",
});

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
