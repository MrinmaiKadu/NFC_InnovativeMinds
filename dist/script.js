const knowledgeHubLink = document.querySelector(".group > a");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownIcon = knowledgeHubLink.querySelector("svg");

knowledgeHubLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default link behavior
  dropdownMenu.classList.toggle("hidden"); // Toggle the visibility of the dropdown menu
  // Toggle the arrow icon between up and down
  dropdownIcon.classList.toggle("rotate-180");
});

// Close the dropdown when clicking outside of it
document.addEventListener("click", (e) => {
  if (!knowledgeHubLink.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
    dropdownIcon.classList.remove("rotate-180"); // Reset the arrow icon to its default position
  }
});