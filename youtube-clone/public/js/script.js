const btn = document.querySelector(".btn-toggle");
// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
} else if (currentTheme == "light") {
  document.documentElement.setAttribute("data-theme", "light");
}

// document
//   .getElementsByClassName(".sidebar")
//   .addEventListener("mouseover", mouseOver);
// const scroll = document.getElementsByClassName(".sidebar");
// console.log(scroll);

// function mouseOver() {
//   console.log("dasf");
// }

function toggleTheme() {
  if (document.documentElement.getAttribute("data-theme") == "dark") {
    theme = "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", "light");
  } else {
    theme = "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", "dark");
  }
  console.log(theme);
  // console.log(
  //   getComputedStyle(document.documentElement).getPropertyValue(
  //     "--background-color"
  //   )
  // );
  // // document.documentElement.style.setProperty("--background-color", "brown");

  // document
  //   .getElementsByClassName(".sidebar")
  //   .addEventListener("mouseover", mouseOver)[0];
}
